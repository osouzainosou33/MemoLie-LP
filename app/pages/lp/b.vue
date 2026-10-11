<template>
    <div class="lpb">
        <AppHeader />

        <section class="b-hero">
            <div class="b-hero-copy">
                <p class="b-eyebrow">ゴルフ専用メモアプリ MemoLie</p>
                <h1 class="b-title">
                    練習場の「これだ！」を、<br />
                    <span>コースまで。</span>
                </h1>
                <p class="b-lead">
                    クラブ別のチェックリスト、自分のスイング動画、お手本のYouTube。<br class="pc-only" />
                    打つ前に見返すものを、ぜんぶ1つのアプリに。
                </p>
                <div class="b-actions">
                    <AppStoreButton cta="hero" light />
                    <span class="b-note">無料 ・ 登録なしですぐ使える ・ iPhone / iPad</span>
                </div>
            </div>
            <div class="b-hero-phones" aria-hidden="true">
                <div class="b-phone b-phone--side b-phone--l"><PhoneMock screen="club_top" alt="" /></div>
                <div class="b-phone b-phone--main"><PhoneMock screen="checklist" alt="" eager /></div>
                <div class="b-phone b-phone--side b-phone--r"><PhoneMock screen="approach" alt="" /></div>
            </div>
        </section>

        <section class="b-section b-steps">
            <div class="b-inner">
                <p class="b-label">How it works</p>
                <h2 class="b-h2">使い方は、3つだけ。</h2>
                <div class="b-steps-grid">
                    <article v-for="(step, i) in steps" :key="step.title" class="b-step" data-aos="fade-up" :data-aos-delay="i * 90">
                        <div class="b-step-head">
                            <span class="b-step-num">0{{ i + 1 }}</span>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.body }}</p>
                        </div>
                        <div class="b-step-stage">
                            <div class="b-step-phone"><PhoneMock :screen="step.screen" :alt="step.alt" /></div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class="b-section b-features">
            <div class="b-inner">
                <p class="b-label">Features</p>
                <h2 class="b-h2">上達に必要な記録が、そろってる。</h2>
                <ul class="b-feature-grid">
                    <li v-for="f in features" :key="f.title" data-aos="fade-up">
                        <span class="b-icon" aria-hidden="true"><svg viewBox="0 0 24 24" v-html="f.icon"></svg></span>
                        <h3>{{ f.title }}</h3>
                        <p>{{ f.body }}</p>
                    </li>
                </ul>
                <div class="b-mid-cta" data-aos="fade-up">
                    <AppStoreButton cta="middle" light />
                </div>
            </div>
        </section>

        <PricingSection />
        <FaqSection />

        <section class="b-final">
            <img src="/assets/memokun_fun.png" alt="" aria-hidden="true" class="b-final-memokun" loading="lazy" />
            <h2>次の1球から、<br class="sp-only" />メモしよう。</h2>
            <p>ダウンロードは無料。メモは登録なしで今日から使えます。</p>
            <AppStoreButton cta="bottom" light />
        </section>

        <AppFooter />

        <div class="b-sticky" :class="{ 'is-visible': showSticky }">
            <img src="/assets/icon.png" alt="" width="40" height="40" />
            <div class="b-sticky-text">
                <strong>MemoLie</strong>
                <span>無料のゴルフメモアプリ</span>
            </div>
            <AppStoreButton cta="sticky" label="入手" light />
        </div>
    </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
import { FEATURE_ICONS } from "../../utils/featureIcons";

definePageMeta({ lpVariant: "b" });

const steps = [
    {
        title: "気づいたら、メモする",
        body: "レッスンや練習で掴んだコツを、クラブごとのチェックリストへ。大事なものは♥で一番上に。",
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面",
    },
    {
        title: "打つ前に、見返す",
        body: "ラウンド前や1球目の前に、ホームを開くだけ。クラブ・状況・距離ごとのメモにすぐ届く。",
        screen: "home_lists",
        alt: "クラブ・シチュエーション・アプローチ距離が並ぶホーム画面",
    },
    {
        title: "友達と、教え合う",
        body: "共有コードを送れば、友達のメモが見られる。いいと思ったら自分のメモにコピー。",
        screen: "friend",
        alt: "友達のメモを閲覧している画面",
    },
];

const features = [
    { icon: FEATURE_ICONS.checklist, title: "チェックリスト", body: "クラブ・状況・距離ごとに、意識するポイントを整理。" },
    { icon: FEATURE_ICONS.video, title: "動画＋参考YouTube", body: "自分のスイングとお手本動画を同じ画面に保存。" },
    { icon: FEATURE_ICONS.flag, title: "10ヤードごとの基準", body: "アプローチの振り幅やクラブを距離ごとにメモ。" },
    { icon: FEATURE_ICONS.compass, title: "クラブ別飛距離", body: "ハーフ・平均・最高を記録して一覧表に。" },
    { icon: FEATURE_ICONS.history, title: "練習・ラウンド記録", body: "カレンダーに球数・費用・スコアを残せる。" },
    { icon: FEATURE_ICONS.users, title: "友達と共有", body: "共有コードでお互いのメモを見せ合える。" },
];

const showSticky = ref(false);
function onScroll() {
    const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
    showSticky.value = window.scrollY > 560 && !nearBottom;
}

useSeoMeta({
    title: "練習場の「これだ！」をコースまで | ゴルフメモアプリ MemoLie（メモリー）",
    description:
        "クラブ別のチェックリスト、スイング動画、参考YouTube、10ヤードごとのアプローチメモ。打つ前に見返すものを1つにまとめるゴルフメモアプリ。無料・登録不要。",
    ogTitle: "練習場の「これだ！」を、コースまで。| MemoLie",
    ogDescription: "打つ前に見返すものを、ぜんぶ1つのアプリに。無料のゴルフメモアプリ MemoLie。",
    ogUrl: "https://memolie.app/lp/b",
    ogImage: "https://memolie.app/assets/icon.png",
    robots: "noindex, follow",
});
useHead({ link: [{ rel: "canonical", href: "https://memolie.app/" }] });

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
    window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.lpb {
    --b-bg: #111310;
    --b-panel: #1b1e17;
    --b-line: rgba(255, 255, 255, 0.1);
    background: var(--white);
}

/* Hero */
.b-hero {
    position: relative;
    overflow: hidden;
    padding: 132px 24px 0;
    text-align: center;
    color: var(--white);
    background:
        radial-gradient(55% 45% at 50% 78%, rgba(208, 220, 49, 0.32), transparent 72%),
        linear-gradient(180deg, #0e100d 0%, var(--b-bg) 100%);
}
.b-eyebrow {
    display: inline-block;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: var(--yellow);
    border: 1px solid rgba(208, 220, 49, 0.4);
    border-radius: 50px;
    padding: 6px 14px;
    margin-bottom: 22px;
}
.b-title {
    font-size: clamp(32px, 6vw, 64px);
    font-weight: 900;
    line-height: 1.18;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
}
.b-title span {
    color: var(--yellow);
}
.b-lead {
    font-size: clamp(14px, 1.8vw, 17px);
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.72);
    max-width: 640px;
    margin: 0 auto 30px;
}
.b-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.b-note {
    font-size: 12.5px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.55);
}
.b-hero-phones {
    position: relative;
    height: 520px;
    margin-top: 48px;
}
.b-phone {
    position: absolute;
    left: 50%;
}
.b-phone--main {
    width: 320px;
    top: 0;
    transform: translateX(-50%);
    z-index: 2;
}
.b-phone--side {
    width: 270px;
    top: 90px;
    opacity: 0.9;
    z-index: 1;
}
.b-phone--l {
    transform: translateX(-148%);
}
.b-phone--r {
    transform: translateX(48%);
}

/* Shared section bits */
.b-section {
    padding: 96px 24px;
}
.b-inner {
    max-width: 1100px;
    margin: 0 auto;
}
.b-label {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6b7a00;
    text-align: center;
    margin-bottom: 10px;
}
.b-h2 {
    font-size: clamp(26px, 3.6vw, 40px);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.3;
    text-align: center;
}

/* Steps */
.b-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 48px;
}
.b-step {
    border-radius: 28px;
    overflow: hidden;
    background: var(--gray);
    display: flex;
    flex-direction: column;
}
.b-step-head {
    padding: 28px 28px 10px;
}
.b-step-num {
    font-size: 13px;
    font-weight: 900;
    color: #6b7a00;
    letter-spacing: 0.06em;
}
.b-step h3 {
    font-size: 20px;
    font-weight: 900;
    margin: 6px 0 8px;
}
.b-step p {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text);
}
.b-step-stage {
    position: relative;
    height: 340px;
    margin-top: auto;
}
.b-step-phone {
    position: absolute;
    width: 250px;
    left: 50%;
    top: 26px;
    transform: translateX(-50%);
}

/* Features */
.b-features {
    background: var(--b-bg);
    color: var(--white);
}
.b-features .b-label {
    color: var(--yellow);
}
.b-feature-grid {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    margin-top: 48px;
    background: var(--b-line);
    border: 1px solid var(--b-line);
    border-radius: 24px;
    overflow: hidden;
}
.b-feature-grid li {
    background: var(--b-bg);
    padding: 30px 28px;
}
.b-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(208, 220, 49, 0.14);
    color: var(--yellow);
    display: grid;
    place-items: center;
    margin-bottom: 16px;
}
.b-icon svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.b-feature-grid h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 6px;
}
.b-feature-grid p {
    font-size: 13.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.62);
}
.b-mid-cta {
    text-align: center;
    margin-top: 44px;
}

/* Final CTA */
.b-final {
    text-align: center;
    padding: 96px 24px 110px;
    color: var(--white);
    background:
        radial-gradient(50% 60% at 50% 100%, rgba(208, 220, 49, 0.25), transparent 70%),
        var(--b-bg);
}
.b-final-memokun {
    width: 96px;
    margin: 0 auto 18px;
    display: block;
}
.b-final h2 {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.3;
    margin-bottom: 12px;
}
.b-final p {
    color: rgba(255, 255, 255, 0.66);
    margin-bottom: 28px;
}

/* Sticky download bar (mobile) */
.b-sticky {
    display: none;
}
@media (max-width: 768px) {
    .b-sticky {
        position: fixed;
        left: 12px;
        right: 12px;
        bottom: calc(12px + env(safe-area-inset-bottom));
        z-index: 90;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 10px 10px 12px;
        border-radius: 20px;
        background: rgba(17, 19, 16, 0.92);
        backdrop-filter: blur(14px);
        color: var(--white);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        transform: translateY(140%);
        transition: transform 0.3s ease;
    }
    .b-sticky.is-visible {
        transform: translateY(0);
    }
    .b-sticky img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
    .b-sticky-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        line-height: 1.3;
    }
    .b-sticky-text strong {
        font-family: var(--font-logo);
        font-size: 15px;
    }
    .b-sticky-text span {
        font-size: 11.5px;
        color: rgba(255, 255, 255, 0.6);
    }
    .b-sticky :deep(.btn-primary) {
        padding: 10px 18px;
        font-size: 14px;
    }
}

@media (max-width: 900px) {
    .b-hero {
        padding-top: 108px;
    }
    .b-hero-phones {
        height: 440px;
    }
    .b-phone--main {
        width: min(260px, 66vw);
    }
    .b-phone--side {
        display: none;
    }
    .b-steps-grid,
    .b-feature-grid {
        grid-template-columns: 1fr;
    }
    .b-step-stage {
        height: 320px;
    }
}
@media (min-width: 601px) and (max-width: 900px) {
    .b-feature-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
