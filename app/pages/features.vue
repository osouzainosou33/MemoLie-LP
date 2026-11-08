<template>
    <div>
        <AppHeader />

        <!-- ヒーロー：方眼ノートに、スマホ3台と付箋 -->
        <section class="f-hero">
            <div class="f-hero-inner">
                <div class="f-hero-copy">
                    <p class="hero-badge">機能一覧</p>
                    <h1 class="f-hero-title">
                        <span class="phrase">MemoLie で</span><br />
                        <span class="phrase">できること、</span><span class="phrase marker">ぜんぶ。</span>
                    </h1>
                    <p class="memo-body f-hero-lead">
                        <span class="phrase">チェックリスト、スイング動画、参考動画、</span><span class="phrase">10ヤードごとのアプローチ、練習の記録。</span><span class="phrase">バラバラになりがちなゴルフの気づきを、</span><span class="phrase">ひとつのアプリに。</span>
                    </p>
                    <AppStoreButton cta="features_hero" label="App Storeで無料ダウンロード" />
                    <p class="f-hero-trust">無料 ・ 登録不要 ・ iPhone / iPad</p>
                </div>
                <div class="f-hero-visual" aria-hidden="true">
                    <div class="f-fan f-fan--left"><PhoneMock screen="checklist" alt="" /></div>
                    <div class="f-fan f-fan--right"><PhoneMock screen="friend" alt="" /></div>
                    <div class="f-fan f-fan--center"><PhoneMock screen="home_lists" alt="" eager /></div>
                    <p class="f-hero-sticky">7つの機能を、<br />1冊のノートに</p>
                </div>
            </div>
        </section>

        <!-- 目次：ノートのインデックスタブ -->
        <nav class="f-toc" aria-label="機能一覧">
            <a v-for="(f, i) in features" :key="f.id" :href="`#${f.id}`" :style="{ '--tab': tabColors[i % tabColors.length] }">
                <span>0{{ i + 1 }}</span>{{ f.short }}
            </a>
        </nav>

        <!-- 各機能：左右交互に、方眼の台紙へスマホを貼る -->
        <section class="memo-section bg-paper">
            <div class="memo-inner">
                <article
                    v-for="(feature, index) in features"
                    :id="feature.id"
                    :key="feature.id"
                    class="f-row"
                    :class="{ 'f-row--reverse': index % 2 !== 0 }"
                    data-aos="fade-up"
                >
                    <div class="f-text">
                        <p class="f-num"><span>0{{ index + 1 }}</span>{{ feature.short }}</p>
                        <h2 class="f-title" v-html="feature.title"></h2>
                        <p class="memo-body">{{ feature.body }}</p>
                        <ul class="f-points">
                            <li v-for="point in feature.points" :key="point">{{ point }}</li>
                        </ul>
                    </div>
                    <div class="f-visual">
                        <span class="tape f-tape--left" aria-hidden="true"></span>
                        <span class="tape f-tape--right" aria-hidden="true"></span>
                        <div class="f-phone">
                            <PhoneMock :screen="feature.screen" :alt="feature.alt" />
                        </div>
                        <p class="f-sticky" :style="{ background: feature.sticky }">{{ feature.note }}</p>
                    </div>
                </article>
            </div>
        </section>

        <!-- ほかの機能：机に貼った付箋 -->
        <section class="memo-section bg-deep">
            <div class="memo-inner">
                <div class="memo-center">
                    <p class="memo-label">Others</p>
                    <h2 class="memo-title">ほかにも、こんなことができます</h2>
                </div>
                <ul class="f-extras">
                    <li v-for="item in extras" :key="item.title" class="f-extra" data-aos="fade-up">
                        <span class="f-extra-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" v-html="item.icon"></svg>
                        </span>
                        <div>
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.body }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
definePageMeta({ lpVariant: "features" });
import AOS from "aos";
import { FEATURE_ICONS } from "../utils/featureIcons";
import "aos/dist/aos.css";

const features = [
    {
        id: "checklist",
        note: "打つ前に、上から3つだけ",
        sticky: "var(--sticky-yellow)",
        short: "チェックリスト",
        tag: "Checklist & Routine",
        title: "気づきは、<br>チェックリストで整理する",
        body: "クラブ・シチュエーション・アプローチ距離ごとに、意識するポイントをタイトルとメモでリスト化。打つまでの手順は「ルーティーン」タブに分けて残せます。",
        points: [
            "ハートをつけたポイントが一番上に並ぶ",
            "鉛筆アイコンからその場で書き換え",
            "ルーティーンは順番どおりにステップで管理",
        ],
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面",
    },
    {
        id: "video",
        note: "あの日の一打を、いつでも",
        sticky: "var(--sticky-green)",
        short: "動画・参考動画",
        tag: "Swing Video & Reference",
        title: "自分のスイングと、<br>お手本の動画を並べておく",
        body: "自分で撮ったスイング動画をクラウドに保存し、参考にしたい YouTube・Instagram・TikTok のリンクも同じ画面に。練習の前に、メモとお手本をまとめて見返せます。",
        points: [
            "スイング動画は60秒以内、無料で5本まで保存（Google ログイン後）",
            "プレミアムなら15本まで保存できる",
            "参考動画にはひとことメモを添えられる",
        ],
        screen: "club_top",
        alt: "スイング動画と参考動画が並ぶクラブ詳細画面",
    },
    {
        id: "approach",
        note: "30y＝52°で腰から腰",
        sticky: "var(--sticky-pink)",
        short: "アプローチ",
        tag: "Approach",
        title: "10ヤードごとに、<br>自分だけの基準をつくる",
        body: "10・20・30ヤード…と距離ごとに、クラブ・振り幅・スタンスをメモ。「この距離はこう打つ」を自分の言葉で決めておけば、コースで迷いません。",
        points: [
            "距離ごとにチェックリスト・ルーティーン・参考動画",
            "距離は設定から追加・非表示・並べ替え",
            "クラブ別の飛距離（ハーフ・平均・最高）も記録",
        ],
        screen: "approach",
        alt: "アプローチ30ヤードの詳細画面",
    },
    {
        id: "home",
        note: "ラウンド前はここだけ",
        sticky: "var(--sticky-yellow)",
        short: "ホーム",
        tag: "Home",
        title: "大事なことは、<br>ホームにぜんぶ",
        body: "目標スコア・ベストスコア、ベースフォーム、クラブ・シチュエーション・アプローチ距離の一覧がホームにそろいます。ラウンド前に開くのは、この画面だけ。",
        points: [
            "崩れたときに戻る「ベースフォーム」",
            "クラブ・シチュエーションはタップですぐ詳細へ",
            "マスコットのメモくんが毎日ひとこと",
        ],
        screen: "home",
        alt: "MemoLie のホーム画面",
    },
    {
        id: "log",
        note: "続けた日に、印がつく",
        sticky: "var(--sticky-green)",
        short: "ログ",
        tag: "Practice & Round Log",
        title: "練習もラウンドも、<br>カレンダーに残る",
        body: "カレンダーの日付をタップして、練習場所・球数・金額、ラウンドのコースやスコアを記録。続けた日に印がつくから、積み上げが目に見えます。",
        points: [
            "練習・ラウンド・メモ更新を色分け表示",
            "ラウンドのスコアはベストスコアと連動",
            "月ごとの費用・球数をグラフで振り返れる",
        ],
        screen: "log",
        alt: "練習とラウンドが記録されたカレンダー画面",
    },
    {
        id: "distance",
        note: "番手に迷ったら、この表",
        sticky: "#d9ecff",
        short: "飛距離",
        tag: "Distance",
        title: "クラブ別の飛距離を、<br>表でひと目に",
        body: "クラブごとにハーフ・平均・最高の飛距離を記録すると、ホームに一覧表ができあがります。番手選びで迷ったら、この表を見るだけ。",
        points: [
            "ハーフ・平均・最高の3つを記録",
            "ホーム画面の一覧表ですぐ確認",
            "クラブは追加・並べ替え・非表示も自由",
        ],
        screen: "distance",
        alt: "クラブ別の飛距離一覧表",
    },
    {
        id: "share",
        note: "友達のコツを、そのままコピー",
        sticky: "var(--sticky-pink)",
        short: "友達と共有",
        tag: "Share",
        title: "友達とメモを共有して、<br>コツを教え合う",
        body: "共有コードを送るだけで、友達のチェックリスト・ルーティーン・参考動画がまとめて見られます。気に入ったメモは、ボタンひとつで自分のメモにコピー。",
        points: [
            "共有コードを発行して友達に送る",
            "友達のメモは閲覧専用で安心",
            "「このメモをコピー」で自分のメモに追加",
        ],
        screen: "friend",
        alt: "友達のチェックリストやルーティーンを閲覧している画面",
    },
];

const tabColors = ["var(--sticky-yellow)", "var(--sticky-green)", "var(--sticky-pink)", "#d9ecff"];

const extras = [
    { icon: FEATURE_ICONS.situation, title: "シチュエーション別メモ", body: "ラフ・バンカー・つま先上がりなど、状況ごとの打ち方と注意点をまとめておけます。" },
    { icon: FEATURE_ICONS.mistake, title: "よくあるミス", body: "出やすいミスと、そのときの対策をセットで。自分専用のトラブルシュート集に。" },
    { icon: FEATURE_ICONS.history, title: "メモの軌跡", body: "メモを書き換えるたびに履歴が残り、自分の考え方の変化を振り返れます。" },
    { icon: FEATURE_ICONS.lock, title: "登録なしで使える", body: "メモの記録はアカウント不要。データは基本的に端末の中に保存されます。" },
    { icon: FEATURE_ICONS.tablet, title: "iPad にも対応", body: "大きな画面でメモや動画をじっくり見返せます。" },
    { icon: FEATURE_ICONS.yen, title: "プレミアムでもっと", body: "動画を15本まで保存・広告なし。月額¥300、年額¥3,000（初月無料）。" },
];

useSeoMeta({
    title: "機能一覧 | ゴルフメモアプリ MemoLie（メモリー）",
    description:
        "MemoLie（メモリー）の機能一覧。クラブ別チェックリスト、スイング動画と参考YouTubeの保存、10ヤードごとのアプローチメモ、練習・ラウンドの記録、費用グラフ、友達とのメモ共有まで。",
    ogTitle: "機能一覧 | ゴルフメモアプリ MemoLie",
    ogDescription:
        "チェックリスト・スイング動画・参考YouTube・アプローチ距離・練習記録・友達との共有。MemoLie でできることをまとめて紹介します。",
    ogUrl: "https://memolie.app/features",
    ogImage: "https://memolie.app/assets/icon.png",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/features" }],
});

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
});
</script>
<style scoped>
/* ── ヒーロー：トップと同じ方眼ノート＋赤い余白線 ── */
.f-hero {
    position: relative;
    overflow: hidden;
    padding: 124px 24px 0;
    background-color: var(--paper);
    background-image: var(--grid-bg);
    background-size: 28px 28px;
    background-position: -1px -1px;
    border-bottom: 2px dashed rgba(29, 29, 27, 0.14);
}
.f-hero::before {
    content: "";
    position: absolute;
    left: max(18px, calc((100% - 1180px) / 2));
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--margin-line);
}
.f-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}
.f-hero-copy {
    padding-bottom: 56px;
}
.f-hero-title {
    font-size: clamp(34px, 4.6vw, 58px);
    font-weight: 900;
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
}
.f-hero-lead {
    max-width: 460px;
    margin-bottom: 30px;
}
.f-hero-trust {
    margin-top: 14px;
    font-size: 13px;
    font-weight: 700;
    color: var(--ink-sub);
}
/* スマホ3台を扇状に。下端はヒーローの端で切る */
.f-hero-visual {
    position: relative;
    height: 540px;
}
.f-fan {
    position: absolute;
    bottom: -150px;
    left: 50%;
}
.f-fan--center {
    width: 280px;
    transform: translateX(-50%);
    z-index: 3;
}
.f-fan--left {
    width: 240px;
    transform: translateX(-112%) rotate(-9deg);
    transform-origin: bottom center;
    bottom: -175px;
    z-index: 2;
}
.f-fan--right {
    width: 240px;
    transform: translateX(12%) rotate(9deg);
    transform-origin: bottom center;
    bottom: -175px;
    z-index: 2;
}
.f-hero-sticky {
    position: absolute;
    z-index: 4;
    top: 40px;
    right: 0;
    padding: 14px 16px 16px;
    background: var(--sticky-yellow);
    font-size: 14px;
    font-weight: 800;
    line-height: 1.5;
    color: var(--ink);
    rotate: 5deg;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}

/* ── 目次：色違いのインデックスタブ ── */
.f-toc {
    position: sticky;
    top: 66px;
    z-index: 50;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 14px 16px 0;
    background: rgba(247, 244, 234, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 2px solid var(--ink);
}
.f-toc a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px 9px;
    border: 2px solid var(--ink);
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    background: var(--tab);
    font-size: 13px;
    font-weight: 800;
    color: var(--ink);
    text-decoration: none;
    translate: 0 2px;
    transition: translate 0.15s;
}
.f-toc a span {
    font-family: var(--font-logo);
    font-size: 11px;
    opacity: 0.6;
}
.f-toc a:hover {
    translate: 0 -2px;
}

/* ── 各機能 ── */
.f-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    scroll-margin-top: 140px;
}
.f-row + .f-row {
    margin-top: 96px;
}
.f-row--reverse .f-text {
    order: 2;
}
/* 番号は手書きで丸を付けたような円 */
.f-num {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 800;
    color: var(--green);
    margin-bottom: 14px;
}
.f-num span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 44px;
    border: 2.5px solid var(--ink);
    border-radius: 52% 46% 55% 44% / 50% 54% 44% 50%;
    font-family: var(--font-logo);
    font-size: 18px;
    font-weight: 900;
    color: var(--ink);
    transform: rotate(-6deg);
}
.f-title {
    font-size: clamp(22px, 2.6vw, 30px);
    font-weight: 900;
    line-height: 1.4;
    color: var(--ink);
    margin-bottom: 16px;
}
.f-points {
    list-style: none;
    margin-top: 22px;
    display: grid;
    gap: 10px;
}
/* チェック済みのチェックボックス */
.f-points li {
    position: relative;
    padding-left: 32px;
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.6;
}
.f-points li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 20px;
    height: 20px;
    border: 2px solid var(--ink);
    border-radius: 5px;
    background: var(--lime) no-repeat center / 14px
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7' stroke='%231d1d1b' stroke-width='3.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
/* スクリーンショットを貼った方眼の台紙 */
.f-visual {
    position: relative;
    height: 520px;
    border-radius: 10px;
    background-color: var(--paper-deep);
    background-image: var(--grid-bg);
    background-size: 24px 24px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.f-tape--left {
    left: 18%;
    transform: translateX(-50%) rotate(-8deg);
}
.f-tape--right {
    left: 82%;
    transform: translateX(-50%) rotate(6deg);
}
.f-phone {
    width: 250px;
    height: 470px;
    margin-bottom: -1px;
    overflow: hidden;
}
.f-sticky {
    position: absolute;
    right: -14px;
    top: 56px;
    white-space: nowrap;
    padding: 14px 16px 16px;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.5;
    color: var(--ink);
    rotate: 5deg;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}
.f-row--reverse .f-sticky {
    right: auto;
    left: -14px;
    rotate: -5deg;
}

/* ── ほかの機能：色と傾きを変えた立体的な付箋 ── */
.f-extras {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 24px;
    margin-top: 48px;
}
.f-extra {
    position: relative;
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 28px 20px 24px;
    background: var(--sticky-yellow);
    rotate: -1.4deg;
    box-shadow: 0 1px 1px rgba(29, 29, 27, 0.06), 0 10px 18px -6px rgba(29, 29, 27, 0.22);
    transition: rotate 0.2s ease, translate 0.2s ease;
}
.f-extra:nth-child(6n + 2) {
    background: var(--sticky-green);
    rotate: 1.2deg;
}
.f-extra:nth-child(6n + 3) {
    background: var(--sticky-pink);
    rotate: -0.8deg;
}
.f-extra:nth-child(6n + 4) {
    background: #d9ecff;
    rotate: 1.4deg;
}
.f-extra:nth-child(6n + 5) {
    background: var(--sticky-yellow);
    rotate: -1deg;
}
.f-extra:nth-child(6n) {
    background: var(--sticky-green);
    rotate: 0.8deg;
}
.f-extra:hover {
    rotate: 0deg;
    translate: 0 -3px;
}
/* 上辺のマスキングテープ */
.f-extra::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 64px;
    height: 20px;
    transform: translateX(-50%) rotate(-3deg);
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 1px 2px rgba(29, 29, 27, 0.08);
}
/* 右下のめくれ */
.f-extra::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.85) 50%, var(--paper-deep) 50%);
    box-shadow: -2px -2px 4px rgba(29, 29, 27, 0.08);
}
.f-extra-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    color: var(--ink);
    display: grid;
    place-items: center;
    flex-shrink: 0;
}
.f-extra-icon svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.f-extra h3 {
    font-size: 15px;
    font-weight: 900;
    color: var(--ink);
    margin-bottom: 4px;
}
.f-extra p {
    font-size: 13px;
    line-height: 1.7;
    color: var(--ink-sub);
}

@media (max-width: 900px) {
    .f-hero {
        padding-top: 104px;
    }
    .f-hero::before {
        left: 9px;
    }
    .f-hero-inner {
        grid-template-columns: 1fr;
        gap: 8px;
    }
    .f-hero-copy {
        padding-bottom: 0;
    }
    .f-hero-visual {
        height: 400px;
        max-width: 420px;
        width: 100%;
        margin: 0 auto;
    }
    .f-fan--center {
        width: 210px;
    }
    .f-fan--left,
    .f-fan--right {
        width: 180px;
    }
    .f-hero-sticky {
        top: 16px;
        right: 4px;
        font-size: 12px;
    }
    .f-toc {
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto;
        scrollbar-width: none;
    }
    .f-toc a {
        flex-shrink: 0;
    }
    .f-row {
        grid-template-columns: 1fr;
        gap: 36px;
    }
    .f-row + .f-row {
        margin-top: 72px;
    }
    .f-row--reverse .f-text {
        order: 0;
    }
    .f-visual {
        height: 420px;
        max-width: 440px;
        width: 100%;
        margin: 0 auto;
    }
    .f-phone {
        width: 210px;
        height: 380px;
    }
    .f-sticky {
        right: -6px;
        top: 32px;
        font-size: 12px;
    }
    .f-row--reverse .f-sticky {
        left: -6px;
    }
    .f-extras {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 560px) {
    .f-extras {
        grid-template-columns: 1fr;
        gap: 26px;
    }
}
</style>
