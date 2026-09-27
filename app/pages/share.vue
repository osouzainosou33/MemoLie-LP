<template>
    <div class="share-page">
        <AppHeader />

        <section class="share-hero" id="top">
            <div class="share-hero-inner">
                <div class="share-avatars" aria-hidden="true">
                    <span class="share-avatar" style="--i: 0">友</span>
                    <span class="share-avatar" style="--i: 1">達</span>
                    <span class="share-avatar" style="--i: 2">仲</span>
                    <span class="share-avatar" style="--i: 3">間</span>
                </div>
                <h1 class="share-title">
                    その気づき、<br />
                    友達にも教えてあげよう。
                </h1>
                <p class="share-lead">
                    自分のメモを共有すれば、意識しているポイントをそのまま伝えられる。
                    一人で溜め込むより、教え合うほうがゴルフは楽しい。
                </p>
                <a
                    :href="appStoreUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="share-cta"
                    @click="trackClick"
                >
                    友達と一緒に無料で始める
                </a>
            </div>
        </section>

        <section class="share-flow">
            <div class="share-section-inner">
                <p class="share-section-label">How it works</p>
                <h2 class="share-section-title">共有はコード1つだけ</h2>
                <div class="share-flow-row">
                    <div v-for="(step, i) in steps" :key="i" class="share-flow-step">
                        <div class="share-flow-icon">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                v-html="step.icon"
                            ></svg>
                        </div>
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.body }}</p>
                        <div v-if="i < steps.length - 1" class="share-flow-arrow" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="share-voice">
            <div class="share-section-inner">
                <p class="share-section-label">Why it matters</p>
                <h2 class="share-section-title">
                    教えることは、一番の復習になる
                </h2>
                <div class="share-voice-grid">
                    <div class="share-voice-card">
                        <p class="share-voice-quote">
                            「意識しているポイントを人に説明しようとすると、自分の中で整理される」
                        </p>
                    </div>
                    <div class="share-voice-card">
                        <p class="share-voice-quote">
                            「友達のメモを見ると、自分が気づいていなかった視点がもらえる」
                        </p>
                    </div>
                    <div class="share-voice-card">
                        <p class="share-voice-quote">
                            「一緒に練習に行く前に、お互いのメモを見返すのが習慣になった」
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
        event_label: "share_hero_appstore",
    });
}

const steps = [
    {
        icon: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="7" r="4"/>',
        title: "共有コードを発行",
        body: "アプリ内で1タップ。あなた専用の6桁コードが発行されます。",
    },
    {
        icon: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>',
        title: "友達に送る",
        body: "コードを送るだけ。相手はコードを入力すればすぐに見られます。",
    },
    {
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        title: "教え合う",
        body: "お互いの意識しているポイントを見比べて、気づきを交換できます。",
    },
];

useSeoMeta({
    title: "友達とゴルフのメモを共有できるアプリ | MemoLie",
    description:
        "MemoLie（メモリー）は、クラブ別・シチュエーション別のメモを友達と共有できるゴルフアプリ。共有コード1つで、意識しているポイントを教え合えます。",
    ogTitle: "友達とゴルフのメモを共有できるアプリ | MemoLie",
    ogDescription:
        "一人で溜め込むより、教え合うほうがゴルフは楽しい。友達とメモを共有できるゴルフメモアプリ MemoLie。",
    ogUrl: "https://memolie.app/share",
    ogImage: "https://memolie.app/assets/icon.png",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/share" }],
});
</script>

<style scoped>
.share-hero {
    background: linear-gradient(180deg, #fff8e8 0%, #ffffff 100%);
    padding: 140px 24px 80px;
    text-align: center;
}
.share-hero-inner {
    max-width: 620px;
    margin: 0 auto;
}
.share-avatars {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
}
.share-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--yellow);
    color: #111111;
    font-weight: 900;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    margin-left: -14px;
}
.share-avatar:first-child {
    margin-left: 0;
}
.share-title {
    font-size: clamp(26px, 4.5vw, 40px);
    font-weight: 900;
    line-height: 1.4;
    margin-bottom: 20px;
    color: var(--black);
}
.share-lead {
    font-size: 15px;
    color: var(--text);
    line-height: 1.85;
    margin-bottom: 36px;
}
.share-cta {
    display: inline-block;
    background: var(--black);
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    font-size: 15px;
    padding: 16px 32px;
    border-radius: 50px;
}
.share-section-inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 88px 24px;
}
.share-section-label {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
    text-align: center;
}
.share-section-title {
    font-size: clamp(22px, 3.5vw, 32px);
    font-weight: 900;
    text-align: center;
    margin-bottom: 48px;
}
.share-flow-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}
@media (max-width: 768px) {
    .share-flow-row {
        flex-direction: column;
    }
}
.share-flow-step {
    flex: 1;
    text-align: center;
    position: relative;
    padding: 0 12px;
}
.share-flow-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--yellow);
    color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
}
.share-flow-icon svg {
    width: 26px;
    height: 26px;
}
.share-flow-step h3 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 8px;
    color: var(--black);
}
.share-flow-step p {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.7;
}
.share-flow-arrow {
    display: none;
}
@media (min-width: 769px) {
    .share-flow-arrow {
        display: block;
        position: absolute;
        top: 16px;
        right: -12px;
        color: #d8dbb0;
    }
    .share-flow-arrow svg {
        width: 20px;
        height: 20px;
    }
}
.share-voice {
    background: var(--gray);
}
.share-voice-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
@media (max-width: 768px) {
    .share-voice-grid {
        grid-template-columns: 1fr;
    }
}
.share-voice-card {
    background: var(--white);
    border-radius: 16px;
    padding: 24px;
    position: relative;
}
.share-voice-quote {
    font-size: 14px;
    color: var(--text);
    line-height: 1.8;
    font-style: italic;
}
</style>
