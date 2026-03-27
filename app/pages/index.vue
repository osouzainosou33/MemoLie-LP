<template>
    <div>
        <!-- Header -->
        <header
            class="site-header"
            :style="{
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
            }"
        >
            <a href="#top" class="header-logo">
                <img src="/assets/icon.png" alt="MemoLie" width="40" height="40" loading="lazy" />
                <span class="header-logo-name">MemoLie</span>
            </a>
            <nav class="header-nav">
                <a href="#features">機能</a>
                <a href="#howto">使い方</a>
                <a href="#origin">名前の由来</a>
                <a href="#download" class="header-cta">無料ダウンロード</a>
            </nav>
            <a href="#download" class="header-cta-mobile">ダウンロード</a>
        </header>

        <!-- Hero -->
        <section class="hero" id="top">
            <div class="hero-inner">
                <div
                    class="hero-text"
                    data-aos="fade-right"
                    data-aos-duration="800"
                >
                    <div class="hero-badge">Golf Swing Memo App</div>
                    <h1 class="hero-headline">
                        ゴルフ練習の気づきを、<br />
                        <span class="accent">コースで再現</span><br />
                        するアプリ。
                    </h1>
                    <p class="hero-sub">
                        クラブ別・シチュエーション別にスイングメモを整理。スタート前の5分で、自分の攻略書を確認しよう。
                    </p>
                    <div class="hero-actions">
                        <a href="#download" class="btn-primary">
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                                />
                            </svg>
                            App Store で無料ダウンロード
                        </a>
                        <span class="hero-note"
                            >iPhone対応 ・ 完全無料 ・ 登録不要</span
                        >
                    </div>
                </div>
                <div
                    class="hero-visual"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="150"
                >
                    <div class="hero-sub-device">
                        <div class="device-frame">
                            <div class="device-screen">
                                <img
                                    src="/assets/screenshot_07.png"
                                    alt="MemoLie ゴルフ練習メモアプリ - 成長ログ画面"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="hero-device">
                        <div class="device-frame">
                            <div class="device-screen">
                                <img
                                    src="/assets/screenshot_01.png"
                                    alt="MemoLie ゴルフ練習メモアプリ - ホーム画面"
                                    loading="eager"
                                    fetchpriority="high"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        class="hero-memokun"
                        src="/assets/memokun.png"
                        alt="メモくん"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>

        <!-- Name Origin -->
        <section class="origin" id="origin">
            <div class="origin-inner">
                <div class="origin-text" data-aos="fade-right">
                    <p class="section-label">名前の由来</p>
                    <div class="origin-word">
                        <span class="part-memo">Memo</span
                        ><span class="part-lie">Lie</span>
                    </div>
                    <div class="origin-breakdown">
                        <div class="origin-part">
                            <div class="origin-part-word">Memo</div>
                            <div class="origin-part-desc">記録・メモ</div>
                        </div>
                        <div class="origin-part">
                            <div class="origin-part-word">Lie</div>
                            <div class="origin-part-desc">ライ（球の状態）</div>
                        </div>
                    </div>
                    <p class="origin-story">
                        「ライが悪い」というゴルフ用語、聞いたことありますか？ボールの置かれた状況のことです。<br /><br />
                        初心者のころ、ラフ・傾斜・バンカーでどうすればいいかわからずに困りました。そしてせっかくレッスンで教わっても、コースに出るころには忘れてしまう。<br /><br />
                        忙しい中の貴重な練習を、無駄にしてほしくない。そんな想いから、<strong
                            style="color: var(--yellow)"
                            >MemoLie</strong
                        >
                        は生まれました。
                    </p>
                </div>
                <div
                    class="origin-visual"
                    data-aos="fade-left"
                    data-aos-delay="100"
                >
                    <img src="/assets/memokun.png" alt="メモくん" loading="lazy" />
                    <div class="origin-quote">
                        「ライが悪い時、どうすれば？」<br />
                        その答えを、あなた自身が<br />ここに積み重ねていく。
                    </div>
                </div>
            </div>
        </section>

        <!-- Problem -->
        <section class="section problem">
            <div class="section-inner">
                <p class="section-label" data-aos="fade-up">Problem</p>
                <h2 class="section-title" data-aos="fade-up">
                    こんな悩み、<br />ありませんか？
                </h2>
                <div class="problem-grid">
                    <div
                        v-for="(item, index) in problems"
                        :key="index"
                        class="pain-card"
                        data-aos="fade-up"
                        :data-aos-delay="index * 80"
                    >
                        <div class="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                v-html="item.iconSvg"
                            ></svg>
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.body }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solution Banner -->
        <section class="solution-banner">
            <img
                class="memokun-center"
                src="/assets/memokun.png"
                alt="メモくん"
                loading="lazy"
                data-aos="zoom-in"
            />
            <p class="section-label" data-aos="fade-up">Solution</p>
            <h2 class="section-title" data-aos="fade-up">
                自分だけのゴルフ攻略書を<br />スマホの中につくろう
            </h2>
            <p class="section-body" data-aos="fade-up">
                MemoLie
                は、スイングのコツや修正ポイントをクラブ別・シチュエーション別に整理できるメモアプリ。スコア管理より大切な「なぜ」を記録します。
            </p>
        </section>

        <!-- Features -->
        <section class="section features" id="features">
            <div class="section-inner">
                <p class="section-label" data-aos="fade-up">Features</p>
                <h2 class="section-title" data-aos="fade-up">
                    ゴルフ練習メモアプリ MemoLie でできること
                </h2>
                <div
                    v-for="(feature, index) in features"
                    :key="index"
                    class="feature-row"
                    :class="{ reverse: index % 2 !== 0 }"
                    data-aos="fade-up"
                >
                    <div class="feature-text">
                        <span class="feature-tag">{{ feature.tag }}</span>
                        <h3 class="feature-title" v-html="feature.title"></h3>
                        <p class="feature-body">{{ feature.body }}</p>
                        <ul class="feature-points">
                            <li v-for="(point, i) in feature.points" :key="i">
                                {{ point }}
                            </li>
                        </ul>
                    </div>
                    <div class="feature-screenshot">
                        <div class="tablet-frame">
                            <div class="tablet-screen">
                                <img
                                    :src="feature.screenshot"
                                    :alt="feature.tag"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How To -->
        <section class="section howto" id="howto">
            <div class="section-inner">
                <p
                    class="section-label"
                    style="text-align: center"
                    data-aos="fade-up"
                >
                    How to Use
                </p>
                <h2
                    class="section-title"
                    style="text-align: center"
                    data-aos="fade-up"
                >
                    3ステップで<br />ゴルフ上達・スコアアップへ
                </h2>
                <div class="steps-grid">
                    <div
                        v-for="(step, index) in steps"
                        :key="index"
                        class="step-card"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="step-num-wrap">
                            <div class="step-num">{{ index + 1 }}</div>
                            <h3>{{ step.title }}</h3>
                        </div>
                        <p>{{ step.body }}</p>
                        <div class="step-screenshot">
                            <img :src="step.screenshot" :alt="step.title" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Target -->
        <section class="section target">
            <div class="section-inner">
                <div class="target-inner">
                    <div>
                        <p class="section-label" data-aos="fade-up">
                            こんな方に
                        </p>
                        <h2 class="section-title" data-aos="fade-up">
                            ゴルフ上達を目指す、<br />あなたへ
                        </h2>
                        <div class="target-list">
                            <div
                                v-for="(item, index) in targetItems"
                                :key="index"
                                class="target-item"
                                data-aos="fade-right"
                                :data-aos-delay="index * 60"
                            >
                                <div class="target-check">✓</div>
                                {{ item }}
                            </div>
                        </div>
                    </div>
                    <div class="target-visual" data-aos="zoom-in">
                        <img src="/assets/memokun.png" alt="メモくん" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Privacy -->
        <section class="privacy">
            <div class="privacy-inner">
                <p class="section-label light" data-aos="fade-up">
                    Privacy First
                </p>
                <h2 class="section-title" data-aos="fade-up">
                    データはすべて<br />あなたの端末の中に
                </h2>
                <p class="section-body" data-aos="fade-up">
                    アカウント登録なし。インターネット送信なし。
                </p>
                <div class="privacy-grid">
                    <div
                        v-for="(card, index) in privacyCards"
                        :key="index"
                        class="privacy-card"
                        data-aos="fade-up"
                        :data-aos-delay="index * 80"
                    >
                        <div class="privacy-card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                v-html="card.iconSvg"
                            ></svg>
                        </div>
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.body }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Bottom -->
        <section class="cta-bottom" id="download">
            <img
                class="memokun-cta"
                src="/assets/memokun.png"
                alt="メモくん"
                loading="lazy"
                data-aos="zoom-in"
            />
            <p class="section-label" data-aos="fade-up">Download</p>
            <h2 class="section-title" data-aos="fade-up">
                今日の練習から、<br />記録を始めよう
            </h2>
            <p class="section-body" data-aos="fade-up">
                無料ダウンロード。登録不要ですぐ使えます。
            </p>
            <div class="cta-actions" data-aos="fade-up">
                <a
                    href="https://apps.apple.com/jp/app/memolie/id6760087461"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary"
                >
                    <svg viewBox="0 0 24 24" style="fill: var(--yellow)">
                        <path
                            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        />
                    </svg>
                    App Store で無料ダウンロード
                </a>
                <span class="cta-note">iPhone対応 ・ 完全無料 ・ 登録不要</span>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="footer-inner">
                <a href="#top" class="footer-logo">
                    <img src="/assets/icon.png" alt="MemoLie" width="40" height="40" loading="lazy" />
                    <span class="footer-logo-name">MemoLie</span>
                </a>
                <div class="footer-links">
                    <a href="/support">サポート</a>
                    <a href="/privacy-policy">プライバシーポリシー</a>
                </div>
                <div class="footer-copy">&copy; 2026 MemoLie</div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Header scroll state
const scrolled = ref(false);

function handleScroll() {
    scrolled.value = window.scrollY > 40;
}

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });

    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

// Data
const problems = [
    {
        iconSvg:
            '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
        title: "練習の気づきが残らない",
        body: "「今日はグリップを変えたら良くなった」と思っても、コースに出るころには忘れている。",
    },
    {
        iconSvg:
            '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
        title: "メモがバラバラで使えない",
        body: "ノートや普通のメモ帳に書いても、クラブ別・状況別に整理されていないから、必要なときに探せない。",
    },
    {
        iconSvg:
            '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        title: "コース直前に確認できない",
        body: "スタート前の5分、「今日の自分の注意点」をサッと見直したいのに、どこを見ればいいかわからない。",
    },
    {
        iconSvg:
            '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
        title: "成長しているか実感できない",
        body: "練習量は増えているのに、スコアに反映されているのかわからない。変化の記録がどこにもない。",
    },
];

const features = [
    {
        tag: "Base Form",
        title: "ベースフォームを<br>丁寧に記録",
        body: "グリップ・スタンス・アドレスなど、自分のスイングの基本を項目ごとに保存。迷ったときにいつでも原点に戻れます。",
        points: [
            "グリップ・スタンス・アドレスを個別管理",
            "自由記述でオリジナル項目を追加できる",
            "大切なポイントにお気に入り設定",
        ],
        screenshot: "/assets/screenshot_06.png",
    },
    {
        tag: "Club Memo",
        title: "クラブ別に飛距離・<br>コツを整理",
        body: "DR・3W・アイアン・ウェッジ別に、距離感やスイングのコツを管理。クラブ選びが確信を持ってできます。",
        points: [
            "MIN / AVG / MAX 飛距離を記録",
            "クラブごとの注意点をメモできる",
            "ホーム画面でクラブ一覧をすぐ確認",
        ],
        screenshot: "/assets/screenshot_05.png",
    },
    {
        tag: "Situation",
        title: "シチュエーション別の<br>対策を保存",
        body: "ラフ・バンカー・つま先上がりなど、苦手な状況ごとに対策をまとめておけます。コース直前の確認に最適。",
        points: [
            "よく遭遇するシチュエーションを登録",
            "状況ごとの対応方法をすぐ確認",
            "ラウンド前のメンタル準備に活用",
        ],
        screenshot: "/assets/screenshot_04.png",
    },
    {
        tag: "Growth Log",
        title: "成長ログで<br>変化を実感",
        body: "フォームを修正するたびに「変更ログ」が自動で記録されます。3ヶ月前との自分の違いが一目でわかります。",
        points: [
            "変更内容が自動でログに残る",
            "目標スコア・ベストスコアを設定",
            "自由メモで気づきをその場で記録",
        ],
        screenshot: "/assets/screenshot_07.png",
    },
];

const steps = [
    {
        title: "練習後にメモ",
        body: "打ちっぱなしやラウンド後、気づいたことをその場でサッと記録。クラブ・状況別に整理されます。",
        screenshot: "/assets/screenshot_06.png",
    },
    {
        title: "コース前に確認",
        body: "スタートの5分前、今日意識すべきポイントをさっとチェック。自信を持ってティーグラウンドに立てます。",
        screenshot: "/assets/screenshot_01.png",
    },
    {
        title: "成長を振り返る",
        body: "修正の履歴がログとして残るので、自分の変化が見えます。「ドライバーが安定してきた」を実感できる。",
        screenshot: "/assets/screenshot_07.png",
    },
];

const targetItems = [
    "100切りを目指して練習しているゴルファー",
    "練習はしているのにスコアが安定しない",
    "スイング改善中で、気づきを記録したい",
    "コース前に自分のフォームを確認したい",
    "GPSやスコア管理より「整理」がしたい",
];

const privacyCards = [
    {
        iconSvg:
            '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        title: "アカウント不要",
        body: "メールアドレスもパスワードも必要ありません。ダウンロードしてすぐ使えます。",
    },
    {
        iconSvg:
            '<line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
        title: "完全オフライン動作",
        body: "インターネット接続なしで全機能が使えます。コースのどこでも安心。",
    },
    {
        iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        title: "外部送信なし",
        body: "入力したデータが外部に送られることは一切ありません。完全にプライベートな空間です。",
    },
    {
        iconSvg:
            '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        title: "端末内に安全保存",
        body: "すべてのデータはデバイス内のSQLiteに保存。アプリを消せばデータも完全に削除できます。",
    },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
