"""Render iPhone 17 Pro mockups from simulator screenshots.

usage: python3 scripts/render-mockups.py <screenshot_dir> <out_dir>
Each <name>.png (1206x2622) becomes <out_dir>/mock-<name>.webp (transparent).
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageChops

SS = 2  # supersampling factor
SCREEN_W, SCREEN_H = 1206, 2622
SCREEN_R = 170  # display corner radius at 3x
BEZEL = 30  # black border
FRAME = 18  # titanium band
BTN = 12  # side button protrusion
OUT_W = 900  # final output width (incl. buttons)

# Natural titanium tones
TI_LIGHT = (214, 210, 202)
TI_MID = (168, 163, 154)
TI_DARK = (112, 108, 101)


def s(v):
    return int(v * SS)


def rr_mask(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return m


def metal(size, horizontal=True):
    """Brushed-metal gradient: bright rim highlight, darker body, specular stripe."""
    w, h = size
    n = w if horizontal else h
    stops = [(0.0, TI_DARK), (0.06, TI_LIGHT), (0.16, TI_MID), (0.5, TI_MID), (0.84, TI_MID), (0.94, TI_LIGHT), (1.0, TI_DARK)]
    line = []
    for i in range(n):
        t = i / max(n - 1, 1)
        for (t0, c0), (t1, c1) in zip(stops, stops[1:]):
            if t0 <= t <= t1:
                k = (t - t0) / (t1 - t0) if t1 > t0 else 0
                line.append(tuple(int(a + (b - a) * k) for a, b in zip(c0, c1)))
                break
    strip = Image.new("RGB", (n, 1) if horizontal else (1, n))
    strip.putdata(line)
    return strip.resize(size, Image.NEAREST)


def build_frame():
    sw, sh, sr = s(SCREEN_W), s(SCREEN_H), s(SCREEN_R)
    bz, fr, bt = s(BEZEL), s(FRAME), s(BTN)
    dev_w, dev_h = sw + 2 * (bz + fr), sh + 2 * (bz + fr)
    W, H = dev_w + 2 * bt, dev_h
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ox = bt

    # Side buttons (drawn first so the frame overlaps their inner edge)
    def button(x, y, w, h):
        b = metal((w, h), horizontal=False).convert("RGBA")
        b.putalpha(rr_mask((w, h), min(w, h) // 2))
        img.alpha_composite(b, (x, y))

    k = dev_h / (SCREEN_H + 2 * (BEZEL + FRAME))  # scale helper in device px
    left_x, right_x, bw = 0, W - bt * 2, bt * 2
    button(left_x, int(560 * k), bw, int(110 * k))  # action button
    button(left_x, int(760 * k), bw, int(210 * k))  # volume up
    button(left_x, int(1010 * k), bw, int(210 * k))  # volume down
    button(right_x, int(830 * k), bw, int(330 * k))  # side button
    button(right_x, int(1620 * k), bw, int(190 * k))  # camera control

    # Titanium band
    outer_r = sr + bz + fr
    band = metal((dev_w, dev_h), horizontal=True).convert("RGBA")
    band.putalpha(rr_mask((dev_w, dev_h), outer_r))
    img.alpha_composite(band, (ox, 0))

    # Thin highlight along the outer edge for a machined chamfer
    edge = Image.new("RGBA", (dev_w, dev_h), (0, 0, 0, 0))
    ImageDraw.Draw(edge).rounded_rectangle((s(2), s(2), dev_w - s(3), dev_h - s(3)), radius=outer_r - s(2), outline=(255, 255, 255, 120), width=s(2))
    img.alpha_composite(edge, (ox, 0))

    # Black bezel
    bez = Image.new("RGBA", (dev_w - 2 * fr, dev_h - 2 * fr), (10, 10, 12, 255))
    bez.putalpha(rr_mask(bez.size, sr + bz))
    img.alpha_composite(bez, (ox + fr, fr))

    screen_box = (ox + fr + bz, fr + bz)
    return img, screen_box


def glass_overlay(size, radius):
    """Soft diagonal reflection, very subtle."""
    w, h = size
    g = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(g)
    d.polygon([(0, 0), (int(w * 0.62), 0), (0, int(h * 0.42))], fill=26)
    g = g.filter(ImageFilter.GaussianBlur(s(60)))
    g = ImageChops.multiply(g, rr_mask(size, radius))
    white = Image.new("RGBA", size, (255, 255, 255, 0))
    white.putalpha(g)
    return white


SHADOW_PAD = 140  # transparent margin (at 3x) that holds the baked shadow


def with_shadow(img):
    pad = s(SHADOW_PAD)
    canvas = Image.new("RGBA", (img.width + 2 * pad, img.height + 2 * pad), (0, 0, 0, 0))
    alpha = img.split()[-1]
    for blur, dy, opacity in ((s(55), s(60), 70), (s(14), s(16), 45)):
        layer = Image.new("RGBA", canvas.size, (24, 28, 10, 0))
        a = Image.new("L", canvas.size, 0)
        a.paste(alpha.point(lambda v: v * opacity // 255), (pad, pad + dy))
        layer.putalpha(a.filter(ImageFilter.GaussianBlur(blur)))
        canvas.alpha_composite(layer)
    canvas.alpha_composite(img, (pad, pad))
    return canvas


def render(src: Path, frame, screen_box, out: Path):
    shot = Image.open(src).convert("RGBA").resize((s(SCREEN_W), s(SCREEN_H)), Image.LANCZOS)
    shot.putalpha(rr_mask(shot.size, s(SCREEN_R)))
    img = frame.copy()
    img.alpha_composite(shot, screen_box)
    img.alpha_composite(glass_overlay(shot.size, s(SCREEN_R)), screen_box)
    img = with_shadow(img)
    h = round(img.height * OUT_W / img.width)
    img = img.resize((OUT_W, h), Image.LANCZOS)
    img.save(out, "WEBP", quality=88, method=6)
    print(f"{out.name}: {img.width}x{img.height}")


if __name__ == "__main__":
    src_dir, out_dir = Path(sys.argv[1]), Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    frame, box = build_frame()
    for p in sorted(src_dir.glob("*.png")):
        render(p, frame, box, out_dir / f"mock-{p.stem}.webp")
