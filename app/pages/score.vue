<template>
    <div class="score-page">
        <AppHeader />

        <section class="score-hero" id="top">
            <div class="score-hero-inner">
                <p class="score-kicker">SCORE DIAGNOSIS</p>
                <h1 class="score-title">
                    スコアが伸びない原因、<br />
                    ちゃんと言語化できていますか？
                </h1>
                <p class="score-lead">
                    「なんとなく」で終わらせているうちは、同じところで止まり続けます。
                    MemoLieは、崩れる原因をクラブ・シチュエーション別に記録して、次のラウンドに活かすアプリです。
                </p>

                <div class="score-chart" aria-hidden="true">
                    <svg viewBox="0 0 320 140" class="score-chart-svg">
                        <polyline
                            points="0,110 40,100 80,112 120,90 160,95 200,60 240,68 280,35 320,30"
                            fill="none"
                            stroke="#3a3a3c"
                            stroke-width="3"
                            stroke-dasharray="4 4"
                        />
                        <polyline
                            points="0,120 40,118 80,105 120,108 160,75 200,70 240,45 280,32 320,18"
                            fill="none"
                            stroke="var(--score-accent)"
                            stroke-width="4"
                        />
                        <circle cx="320" cy="18" r="6" fill="var(--score-accent)" />
                    </svg>
                    <div class="score-chart-labels">
                        <span>記録なし</span>
                        <span class="score-chart-labels-accent">記録あり</span>
                    </div>
                </div>

                <a
                    :href="appStoreUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="score-cta"
                    @click="trackClick"
                >
                    無料でスコアの記録を始める
                </a>
            </div>
        </section>

        <section class="score-diagnosis">
            <div class="score-section-inner">
                <p class="score-section-label">Self Check</p>
                <h2 class="score-section-title">
                    こんな心当たり、ありませんか？
                </h2>
                <div class="score-diagnosis-grid">
                    <div v-for="(item, i) in diagnosis" :key="i" class="score-diagnosis-card">
                        <div class="score-diagnosis-num">{{ String(i + 1).padStart(2, '0') }}</div>
                        <p>{{ item }}</p>
                    </div>
                </div>
                <p class="score-diagnosis-result">
                    3つ以上当てはまったら、「記録」が足りていないサインです。
                </p>
            </div>
        </section>

        <section class="score-solution">
            <div class="score-section-inner">
                <p class="score-section-label">Solution</p>
                <h2 class="score-section-title">
                    崩れる原因を、その場でクラブ別に残す
                </h2>
                <div class="score-solution-row">
                    <div class="score-solution-text">
                        <p>
                            MemoLieなら、ラウンド後の「あれ、なんで崩れたんだっけ」を無くせます。クラブ・シチュエーションごとに気づきを積み上げ、ラウンド前に見返すだけ。
                        </p>
                        <ul class="score-solution-list">
                            <li>クラブごとに「崩れる原因」を記録</li>
                            <li>ベストスイングと今のスイングを動画で比較</li>
                            <li>ラウンド・練習の費用と球数もあわせて管理</li>
                        </ul>
                    </div>
                    <div class="score-solution-visual">
                        <img
                            src="/assets/iphone-memolie-home.png"
                            alt="MemoLieのホーム画面"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { APP_CONFIG } from "../config";

const appStoreUrl = APP_CONFIG.APP_STORE_URL;

declare const gtag: (...args: unknown[]) => void;
function trackClick() {
    gtag("event", "click", {
        event_category: "cta",
        event_label: "score_hero_appstore",
    });
}

const diagnosis = [
    "ラウンド後に「今日は何が悪かったんだっけ」と思い出せない",
    "同じホール・同じ状況で、毎回同じミスを繰り返している",
    "レッスンで直したはずのことが、いつの間にか元に戻っている",
    "練習では打てるのに、コースに出ると急に不安になる",
];

useSeoMeta({
    title: "ゴルフのスコアが伸びない原因を記録で見つける | MemoLie",
    description:
        "スコアが伸びない原因は、記録していないから思い出せないだけかもしれません。MemoLie（メモリー）はクラブ・シチュエーション別に崩れる原因を記録できるゴルフメモアプリです。",
    ogTitle: "スコアが伸びない原因を記録で見つける | MemoLie",
    ogDescription:
        "「なんとなく」で終わらせず、崩れる原因をクラブ別に記録。次のラウンドで同じミスを繰り返さないためのゴルフメモアプリ。",
    ogUrl: "https://memolie.app/score",
    ogImage: "https://memolie.app/assets/icon.png",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/score" }],
});
</script>

<style scoped>
.score-page {
    --score-accent: #d0dc31;
}
.score-hero {
    background: #1e1e20;
    color: #f5f5f5;
    padding: 140px 24px 80px;
    text-align: center;
}
.score-hero-inner {
    max-width: 640px;
    margin: 0 auto;
}
.score-kicker {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.2em;
    color: var(--score-accent);
    margin-bottom: 16px;
}
.score-title {
    font-size: clamp(26px, 4.5vw, 42px);
    font-weight: 900;
    line-height: 1.4;
    margin-bottom: 20px;
}
.score-lead {
    font-size: 15px;
    color: #b7b7ba;
    line-height: 1.85;
    margin-bottom: 40px;
}
.score-chart {
    background: #2c2c2e;
    border-radius: 16px;
    padding: 24px 20px 16px;
    margin-bottom: 32px;
}
.score-chart-svg {
    width: 100%;
    height: auto;
    display: block;
}
.score-chart-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #9a9a9d;
    margin-top: 8px;
}
.score-chart-labels-accent {
    color: var(--score-accent);
    font-weight: 700;
}
.score-cta {
    display: inline-block;
    background: var(--score-accent);
    color: #111111;
    text-decoration: none;
    font-weight: 800;
    font-size: 15px;
    padding: 16px 32px;
    border-radius: 8px;
}
.score-section-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 88px 24px;
}
.score-section-label {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
    text-align: center;
}
.score-section-title {
    font-size: clamp(22px, 3.5vw, 32px);
    font-weight: 900;
    text-align: center;
    margin-bottom: 40px;
}
.score-diagnosis {
    background: var(--gray);
}
.score-diagnosis-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
@media (max-width: 600px) {
    .score-diagnosis-grid {
        grid-template-columns: 1fr;
    }
}
.score-diagnosis-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 22px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
}
.score-diagnosis-num {
    font-size: 20px;
    font-weight: 900;
    color: #d8dbb0;
    flex-shrink: 0;
}
.score-diagnosis-card p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--text);
}
.score-diagnosis-result {
    text-align: center;
    margin-top: 28px;
    font-size: 14px;
    font-weight: 700;
    color: var(--black);
}
.score-solution-row {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;
}
@media (max-width: 768px) {
    .score-solution-row {
        grid-template-columns: 1fr;
    }
}
.score-solution-text p {
    font-size: 15px;
    color: var(--text);
    line-height: 1.85;
    margin-bottom: 20px;
}
.score-solution-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.score-solution-list li {
    font-size: 14px;
    color: var(--black);
    font-weight: 700;
    padding-left: 20px;
    position: relative;
}
.score-solution-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--score-accent);
}
.score-solution-visual {
    display: flex;
    justify-content: center;
}
.score-solution-visual img {
    max-width: 220px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}
</style>
