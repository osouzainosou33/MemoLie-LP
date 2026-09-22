<template>
    <div>
        <AppHeader />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UseCasesSection />
        <FeaturesSection />
        <PricingSection />
        <HowToSection />
        <TargetSection />
        <PrivacySection />
        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";

useSeoMeta({
    title: "ゴルフメモアプリ MemoLie（メモリー）| ルーティーン・スイング動画・参考動画を記録して上達",
    description:
        "MemoLie（メモリー）は自分専用ゴルフメモアプリ。一回の打ちっぱなし・レッスンを無駄にしないために、ルーティーン・スイング動画・参考動画を記録。スイングのコツ・ルーティーンを記録。スイング動画のクラウド保存にも対応し、打ちっぱなしやシミュレーションゴルフの練習記録を一元管理。iPhone対応・登録不要で今すぐ使えます。",
    ogTitle: "ゴルフメモアプリ MemoLie（メモリー）| 「これだ！」をカタチに。",
    ogDescription:
        "無料のゴルフメモアプリ MemoLie。練習ノート感覚でスイングのコツ・飛距離・ラウンドメモを記録。スイング動画のクラウド保存対応。iPhone・登録不要で今すぐ使えます。",
    ogUrl: "https://memolie.app/",
    ogImage: "https://memolie.app/assets/icon.png",
    twitterTitle:
        "ゴルフメモアプリ MemoLie（メモリー）| 練習ノート・スイング動画を記録",
    twitterDescription:
        "無料のスイングフォームメモアプリ。スイングのコツ・動画をクラウド保存。登録不要で今すぐ使えるiPhone対応アプリ。",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/" }],
});

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
});
</script>
