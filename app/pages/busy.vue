<template>
    <div class="busy-page">
        <AppHeader />

        <section class="busy-hero" id="top">
            <p class="busy-time">1日、3分。</p>
            <h1 class="busy-title">
                忙しくても、<br />
                上達する人はやっている。
            </h1>
            <p class="busy-lead">
                練習に行く時間はあっても、振り返る時間はない。
                MemoLieは、移動中や寝る前の3分で気づきを残せるゴルフメモアプリです。
            </p>
            <a
                :href="appStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="busy-cta"
                @click="trackClick"
            >
                今すぐ無料で始める
            </a>
            <p class="busy-note">登録不要・3分で使い始められます</p>
        </section>

        <section class="busy-compare">
            <div class="busy-compare-row">
                <div class="busy-compare-col busy-compare-before">
                    <p class="busy-compare-label">記録しない場合</p>
                    <ul>
                        <li>レッスン内容を1週間で忘れる</li>
                        <li>次の練習も同じところからスタート</li>
                        <li>週末にまとめて振り返ろうとして結局やらない</li>
                    </ul>
                </div>
                <div class="busy-compare-col busy-compare-after">
                    <p class="busy-compare-label">MemoLieを使う場合</p>
                    <ul>
                        <li>気づいた瞬間に3分でメモ</li>
                        <li>次の練習前にサッと見返すだけ</li>
                        <li>積み重ねが自然にできている</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="busy-feature">
            <div class="busy-feature-inner">
                <h2 class="busy-feature-title">機能はシンプルに、3つだけ</h2>
                <div class="busy-feature-list">
                    <div class="busy-feature-item">
                        <span class="busy-feature-num">01</span>
                        <span>クラブ別・シチュエーション別にメモ</span>
                    </div>
                    <div class="busy-feature-item">
                        <span class="busy-feature-num">02</span>
                        <span>スイング動画をベストスイングと比較</span>
                    </div>
                    <div class="busy-feature-item">
                        <span class="busy-feature-num">03</span>
                        <span>ラウンド前にクラブごとの注意点を確認</span>
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
        event_label: "busy_hero_appstore",
    });
}

useSeoMeta({
    title: "忙しい社会人ゴルファーのための3分メモアプリ | MemoLie",
    description:
        "練習に行く時間はあっても振り返る時間がない。MemoLie（メモリー）は移動中や寝る前の3分で気づきを残せる、忙しい社会人ゴルファー向けのゴルフメモアプリです。",
    ogTitle: "忙しい社会人ゴルファーのための3分メモアプリ | MemoLie",
    ogDescription:
        "1日3分。忙しくても上達する人はやっている記録の習慣を、MemoLieで。",
    ogUrl: "https://memolie.app/busy",
    ogImage: "https://memolie.app/assets/icon.png",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/busy" }],
});
</script>

<style scoped>
.busy-page {
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif;
}
.busy-hero {
    max-width: 560px;
    margin: 0 auto;
    padding: 160px 24px 64px;
    text-align: left;
}
.busy-time {
    font-size: 15px;
    font-weight: 900;
    color: var(--muted);
    letter-spacing: 0.05em;
    margin-bottom: 12px;
}
.busy-title {
    font-size: clamp(30px, 6vw, 48px);
    font-weight: 900;
    line-height: 1.35;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    color: var(--black);
}
.busy-lead {
    font-size: 15px;
    color: var(--text);
    line-height: 1.85;
    margin-bottom: 32px;
    max-width: 440px;
}
.busy-cta {
    display: inline-block;
    background: var(--black);
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    font-size: 16px;
    padding: 18px 36px;
    border-radius: 4px;
}
.busy-note {
    font-size: 12px;
    color: var(--muted);
    margin-top: 14px;
}
.busy-compare {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}
.busy-compare-row {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
@media (max-width: 700px) {
    .busy-compare-row {
        grid-template-columns: 1fr;
    }
}
.busy-compare-col {
    padding: 48px 32px;
}
.busy-compare-before {
    border-right: 1px solid var(--border);
}
@media (max-width: 700px) {
    .busy-compare-before {
        border-right: none;
        border-bottom: 1px solid var(--border);
    }
}
.busy-compare-after {
    background: #fbfbe8;
}
.busy-compare-label {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.08em;
    margin-bottom: 20px;
    color: var(--muted);
}
.busy-compare-after .busy-compare-label {
    color: var(--black);
}
.busy-compare-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
}
.busy-compare-col li {
    font-size: 14px;
    line-height: 1.7;
    color: var(--text);
    padding-left: 18px;
    position: relative;
}
.busy-compare-col li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: #c9c9cc;
}
.busy-compare-after li::before {
    content: "✓";
    color: var(--yellow-dark);
    font-weight: 900;
}
.busy-feature-inner {
    max-width: 560px;
    margin: 0 auto;
    padding: 88px 24px;
}
.busy-feature-title {
    font-size: clamp(20px, 3vw, 26px);
    font-weight: 900;
    margin-bottom: 32px;
}
.busy-feature-list {
    display: flex;
    flex-direction: column;
}
.busy-feature-item {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 18px 0;
    border-bottom: 1px solid var(--border);
    font-size: 15px;
    color: var(--black);
    font-weight: 700;
}
.busy-feature-num {
    font-size: 13px;
    font-weight: 900;
    color: var(--muted);
    flex-shrink: 0;
}
</style>
