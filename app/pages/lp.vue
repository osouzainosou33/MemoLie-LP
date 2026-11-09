<template>
    <div class="lp-page">
        <AppHeader />

        <section class="lp-hero" id="top">
            <div class="lp-hero-inner">
                <p class="lp-kicker">MemoLie</p>
                <h1 class="lp-title">{{ content.title }}</h1>
                <p class="lp-lead">{{ content.lead }}</p>
                <ul class="lp-points">
                    <li v-for="(point, i) in content.points" :key="i">{{ point }}</li>
                </ul>
                <a
                    :href="appStoreUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="lp-cta"
                    @click="trackConversion"
                >
                    {{ content.cta }}
                </a>
                <p class="lp-note">iPhone対応 ・ 基本無料 ・ 登録不要</p>
            </div>
        </section>

        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirebaseApp, getFirebaseRemoteConfig } from "../firebase";
import { APP_CONFIG } from "../config";

const appStoreUrl = APP_CONFIG.APP_STORE_URL;

type Variant = "score" | "share" | "busy";

const variants: Record<Variant, { title: string; lead: string; points: string[]; cta: string }> = {
    score: {
        title: "スコアが伸びない原因、\nちゃんと言語化できていますか？",
        lead: "「なんとなく」で終わらせているうちは、同じところで止まり続けます。崩れる原因をクラブ別に記録するだけで、次のラウンドが変わります。",
        points: [
            "クラブごとに「崩れる原因」を記録",
            "ベストスイングと今のスイングを動画で比較",
            "ラウンド前に見返すだけで準備完了",
        ],
        cta: "無料でスコアの記録を始める",
    },
    share: {
        title: "その気づき、\n友達にも教えてあげよう。",
        lead: "自分のメモを共有すれば、意識しているポイントをそのまま伝えられる。一人で溜め込むより、教え合うほうがゴルフは楽しい。",
        points: [
            "共有コード1つで友達にメモを共有",
            "友達の気づきを自分のメモに追加できる",
            "教え合うことが一番の復習になる",
        ],
        cta: "友達と一緒に無料で始める",
    },
    busy: {
        title: "忙しくても、\n上達する人はやっている。",
        lead: "練習に行く時間はあっても、振り返る時間はない。移動中や寝る前の3分で気づきを残せます。",
        points: [
            "気づいた瞬間に3分でメモ",
            "次の練習前にサッと見返すだけ",
            "積み重ねが自然にできる",
        ],
        cta: "今すぐ無料で始める",
    },
};

const variant = ref<Variant>("score");
const content = computed(() => variants[variant.value]);

declare const gtag: (...args: unknown[]) => void;

function trackConversion() {
    gtag("event", "click", {
        event_category: "cta",
        event_label: `lp_experiment_${variant.value}_appstore`,
    });
    try {
        logEvent(getAnalytics(getFirebaseApp()), "select_content", {
            content_type: "lp_variant_conversion",
            item_id: variant.value,
        });
    } catch {
        // Analytics未初期化でも計測以外の動作に影響させない
    }
}

onMounted(async () => {
    try {
        const remoteConfig = getFirebaseRemoteConfig();
        await fetchAndActivate(remoteConfig);
        const value = getValue(remoteConfig, "pain_point_variant").asString();
        if (value === "score" || value === "share" || value === "busy") {
            variant.value = value;
        }
        logEvent(getAnalytics(getFirebaseApp()), "select_content", {
            content_type: "lp_variant_exposure",
            item_id: variant.value,
        });
    } catch (e) {
        console.error("[lp] Remote Config fetch failed:", e);
    }
});

useSeoMeta({
    title: "MemoLie（メモリー）| ゴルフ専用メモアプリ",
    description: "クラブ別・シチュエーション別にメモとスイング動画を記録するゴルフ専用アプリ MemoLie。",
});
</script>

<style scoped>
.lp-hero {
    background: var(--yellow);
    padding: 140px 24px 88px;
    text-align: center;
}
.lp-hero-inner {
    max-width: 620px;
    margin: 0 auto;
}
.lp-kicker {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 16px;
}
.lp-title {
    font-size: clamp(26px, 4.5vw, 40px);
    font-weight: 900;
    line-height: 1.45;
    margin-bottom: 20px;
    white-space: pre-line;
}
.lp-lead {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.72);
    line-height: 1.85;
    margin-bottom: 28px;
}
.lp-points {
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    margin-bottom: 36px;
}
.lp-points li {
    font-size: 14px;
    font-weight: 700;
    color: var(--black);
    padding-left: 22px;
    position: relative;
}
.lp-points li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--black);
}
.lp-cta {
    display: inline-block;
    background: var(--black);
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    font-size: 16px;
    padding: 18px 36px;
    border-radius: 50px;
}
.lp-note {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.55);
    margin-top: 16px;
}
</style>
