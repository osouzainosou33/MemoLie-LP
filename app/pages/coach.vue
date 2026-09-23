<template>
    <div>
        <AppHeader />

        <section class="section coach-hero" id="top">
            <div class="section-inner coach-hero-inner">
                <p class="section-label">Your Assistant Coach</p>
                <h1 class="section-title no-wrap-mobile">
                    あなたのスイングを教えるための、<br />
                    アシスタントコーチ。
                </h1>
                <p class="section-body no-wrap-mobile">
                    レッスンやラウンドで得た「これだ！」という気づきは、その日のうちに忘れてしまいます。MemoLieに残したメモ・動画・ルーティンは、次の練習前にあなた自身を思い出させてくれる、専属のアシスタントコーチになります。
                </p>
                <a
                    :href="appStoreUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary"
                    @click="trackClick"
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        />
                    </svg>
                    App Store で無料ダウンロード
                </a>
            </div>
        </section>

        <section class="section coach-problem">
            <div class="section-inner">
                <p class="section-label">Problem</p>
                <h2 class="section-title no-wrap-mobile">
                    コーチは、いつも隣にいてくれない。
                </h2>
                <p class="section-body no-wrap-mobile">
                    レッスンを受けた直後は覚えていても、1週間後には「何を直すんだったっけ？」と忘れてしまう。人間のコーチに毎回付いてもらうのは、時間もお金もかかります。
                </p>
            </div>
        </section>

        <section class="section coach-solution">
            <div class="section-inner">
                <p class="section-label">Solution</p>
                <h2 class="section-title no-wrap-mobile">
                    過去の自分が、次の練習前のコーチになる。
                </h2>
                <div class="coach-grid">
                    <div class="pain-card">
                        <div class="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M9 18V5l12-2v13"
                                /><circle cx="6" cy="18" r="3" /><circle
                                    cx="18"
                                    cy="16"
                                    r="3"
                                />
                            </svg>
                        </div>
                        <h3>クラブごとのメモ</h3>
                        <p>
                            クラブ・シチュエーション・アプローチ距離ごとに、意識するポイントやルーティンを記録。練習前に読み返せば、迷わず今日のテーマが決まります。
                        </p>
                    </div>
                    <div class="pain-card">
                        <div class="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <polygon points="23 7 16 12 23 17 23 7" /><rect
                                    x="1"
                                    y="5"
                                    width="15"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                />
                            </svg>
                        </div>
                        <h3>スイング動画の比較</h3>
                        <p>
                            ベストスイングと今日のスイングを並べて再生。感覚ではなく映像で、フォームのズレに気づけます。
                        </p>
                    </div>
                    <div class="pain-card">
                        <div class="card-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                /><circle cx="9" cy="7" r="4" /><path
                                    d="M23 21v-2a4 4 0 0 0-3-3.87"
                                /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3>友達と教え合う</h3>
                        <p>
                            自分のメモを友達に共有すれば、意識しているポイントをそのまま伝えられます。教わるだけでなく、教える側にも回れます。
                        </p>
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
        event_label: "coach_hero_appstore",
    });
}

useSeoMeta({
    title: "あなたのスイングを教えるアシスタントコーチ | MemoLie（メモリー）",
    description:
        "MemoLie（メモリー）は、レッスンやラウンドで得た気づきをメモ・動画・ルーティンとして記録し、次の練習前に思い出させてくれるアシスタントコーチアプリです。",
    ogTitle: "あなたのスイングを教えるアシスタントコーチ | MemoLie",
    ogDescription:
        "過去の自分の気づきが、次の練習前のコーチになる。ゴルフメモアプリ MemoLie のアシスタントコーチコンセプトを紹介します。",
    ogUrl: "https://memolie.app/coach",
    ogImage: "https://memolie.app/assets/icon.png",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/coach" }],
});
</script>

<style scoped>
.coach-hero {
    background: var(--yellow);
    text-align: center;
    padding-top: 140px;
}
.coach-hero-inner {
    max-width: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.coach-hero .btn-primary {
    margin-top: 8px;
}
.coach-problem {
    background: var(--gray);
    text-align: center;
}
.coach-problem .section-inner {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.coach-grid {
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
@media (max-width: 768px) {
    .coach-grid {
        grid-template-columns: 1fr;
    }
}
</style>
