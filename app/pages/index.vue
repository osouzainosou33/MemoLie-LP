<template>
    <div>
        <AppHeader />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PillarsSection />
        <MoreFeaturesSection />
        <HowToSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
definePageMeta({ lpVariant: "a" });
import AOS from "aos";
import "aos/dist/aos.css";

useSeoMeta({
    title: "MemoLie（メモリー）| ゴルフの「忘れたくない」をぜんぶここに",
    description:
        "レッスンのコツ、ベストスイング、距離ごとの打ち方。MemoLieはクラブ別にメモを整理して、打つ前にサッと見返せるゴルフ専用メモアプリ。無料・登録不要・iPhone対応。",
    ogTitle: "MemoLie | ゴルフの「忘れたくない」をぜんぶここに",
    ogDescription:
        "練習で掴んだコツをクラブ別に整理。打つ前にサッと見返すだけで、コースでの迷いがなくなる。無料・登録不要のゴルフメモアプリ。",
    ogUrl: "https://memolie.app/",
    ogImage: "https://memolie.app/assets/icon.png",
    twitterTitle: "MemoLie | ゴルフの「忘れたくない」をぜんぶここに",
    twitterDescription:
        "レッスンのコツ、スイング動画、距離別メモ。ぜんぶクラブごとに整理して打つ前に見返せるゴルフ専用アプリ。無料・登録不要。",
});

useHead({
    link: [{ rel: "canonical", href: "https://memolie.app/" }],
});

onMounted(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
});
</script>
