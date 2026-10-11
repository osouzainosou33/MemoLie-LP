<template>
    <div>
        <AppHeader />

        <section class="features-hero">
            <div class="features-hero-inner">
                <div class="features-hero-copy">
                    <p class="features-hero-label">Features</p>
                    <h1 class="features-hero-title">
                        MemoLie で<br />できること、<br class="sp-only" />ぜんぶ。
                    </h1>
                    <p class="features-hero-lead">
                        チェックリスト、スイング動画、参考YouTube、10ヤードごとのアプローチ、練習の記録。
                        バラバラになりがちなゴルフの気づきを、ひとつのアプリに。
                    </p>
                    <AppStoreButton cta="features_hero" light />
                </div>
                <div class="features-hero-visual" aria-hidden="true">
                    <div class="fan fan--left"><PhoneMock screen="checklist" alt="" /></div>
                    <div class="fan fan--right"><PhoneMock screen="friend" alt="" /></div>
                    <div class="fan fan--center"><PhoneMock screen="home_lists" alt="" eager /></div>
                </div>
            </div>
        </section>

        <nav class="features-toc" aria-label="機能一覧">
            <a v-for="f in features" :key="f.id" :href="`#${f.id}`">{{ f.short }}</a>
        </nav>

        <section class="section">
            <div class="section-inner">
                <article
                    v-for="(feature, index) in features"
                    :id="feature.id"
                    :key="feature.id"
                    class="feature-row"
                    :class="{ reverse: index % 2 !== 0 }"
                    data-aos="fade-up"
                >
                    <div class="feature-text">
                        <span class="feature-tag">{{ feature.tag }}</span>
                        <h2 class="feature-title" v-html="feature.title"></h2>
                        <p class="feature-body">{{ feature.body }}</p>
                        <ul class="feature-points">
                            <li v-for="point in feature.points" :key="point">{{ point }}</li>
                        </ul>
                    </div>
                    <div class="feature-visual">
                        <div class="feature-phone">
                            <PhoneMock :screen="feature.screen" :alt="feature.alt" />
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="section extras">
            <div class="section-inner">
                <p class="section-label">Others</p>
                <h2 class="section-title">ほかにも、こんなことができます</h2>
                <ul class="extras-grid">
                    <li v-for="item in extras" :key="item.title" class="extras-card" data-aos="fade-up">
                        <span class="extras-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" v-html="item.icon"></svg>
                        </span>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.body }}</p>
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
        short: "チェックリスト",
        tag: "Checklist & Routine",
        title: "気づきは、<br>チェックリストで整理する",
        body: "クラブ・シチュエーション・アプローチ距離ごとに、意識するポイントをタイトルとメモでリスト化。打つまでの手順は「ルーティーン」タブに分けて残せます。",
        points: [
            "♥ をつけたポイントが一番上に並ぶ",
            "鉛筆アイコンからその場で書き換え",
            "ルーティーンは順番どおりにステップで管理",
        ],
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面",
    },
    {
        id: "video",
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
.features-hero {
    position: relative;
    overflow: hidden;
    padding: 120px 24px 0;
    color: var(--white);
    background:
        radial-gradient(60% 50% at 78% 38%, rgba(208, 220, 49, 0.28), transparent 70%),
        radial-gradient(50% 40% at 10% 100%, rgba(208, 220, 49, 0.12), transparent 70%),
        linear-gradient(180deg, #121411 0%, #1b1f15 100%);
}
.features-hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}
.features-hero-label {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--yellow);
    margin-bottom: 14px;
}
.features-hero-title {
    font-size: clamp(32px, 4.2vw, 50px);
    font-weight: 900;
    line-height: 1.22;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    white-space: nowrap;
}
.features-hero-lead {
    font-size: 15px;
    line-height: 1.9;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 32px;
    max-width: 440px;
}
/* Three phones fanned out; the bottom of the fan is cropped by the hero edge. */
.features-hero-visual {
    position: relative;
    height: 560px;
}
.fan {
    position: absolute;
    bottom: -150px;
    left: 50%;
}
.fan--center {
    width: 290px;
    transform: translateX(-50%);
    z-index: 3;
}
.fan--left {
    width: 250px;
    transform: translateX(-112%) rotate(-9deg);
    transform-origin: bottom center;
    bottom: -175px;
    z-index: 2;
}
.fan--right {
    width: 250px;
    transform: translateX(12%) rotate(9deg);
    transform-origin: bottom center;
    bottom: -175px;
    z-index: 2;
}
.features-toc {
    position: sticky;
    top: 60px;
    z-index: 50;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
}
.features-toc a {
    font-size: 13px;
    font-weight: 800;
    color: var(--black);
    text-decoration: none;
    border: 1px solid var(--border);
    border-radius: 50px;
    padding: 7px 15px;
    background: var(--white);
    transition: background 0.2s, border-color 0.2s;
}
.features-toc a:hover {
    background: var(--yellow);
    border-color: var(--yellow);
}

.feature-row {
    scroll-margin-top: 130px;
}
.feature-visual {
    position: relative;
    height: 540px;
    border-radius: 32px;
    overflow: hidden;
    background:
        radial-gradient(80% 60% at 50% 0%, rgba(255, 255, 255, 0.9), transparent 70%),
        linear-gradient(180deg, #eef3cf 0%, #dfe99a 100%);
}
.feature-phone {
    position: absolute;
    width: 310px;
    left: 50%;
    top: 52px;
    transform: translateX(-50%);
}

.extras-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: #f1f5d0;
    color: #5f6e00;
    display: grid;
    place-items: center;
    margin-bottom: 12px;
}
.extras-icon svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

@media (max-width: 900px) {
    .features-hero {
        padding-top: 104px;
    }
    .features-hero-title {
        white-space: normal;
    }
    .features-toc {
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto;
        scrollbar-width: none;
    }
    .features-toc a {
        flex-shrink: 0;
    }
    .features-hero-inner {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .features-hero-lead {
        margin-left: auto;
        margin-right: auto;
    }
    .features-hero-visual {
        height: 420px;
    }
    .fan--center {
        width: 220px;
    }
    .fan--left,
    .fan--right {
        width: 190px;
    }
    .feature-visual {
        height: 450px;
        border-radius: 24px;
    }
    .feature-phone {
        width: min(260px, 68vw);
        top: 40px;
    }
}

.extras {
    background: var(--gray);
}
.extras-grid {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 32px;
}
.extras-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 22px;
}
.extras-card h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 6px;
}
.extras-card p {
    font-size: 13.5px;
    line-height: 1.75;
    color: var(--text);
}
@media (max-width: 900px) {
    .extras-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 560px) {
    .extras-grid {
        grid-template-columns: 1fr;
    }
}
</style>
