<template>
    <header
        class="site-header"
        :style="{
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        }"
    >
        <a href="#top" class="header-logo">
            <img
                src="/assets/icon.png"
                alt="MemoLie"
                width="40"
                height="40"
                loading="lazy"
            />
            <span class="header-logo-name">MemoLie</span>
        </a>
        <nav class="header-nav">
            <a href="#features">機能</a>
            <a href="#usecases">活用例</a>
            <a href="#pricing">料金</a>
            <a href="#howto">使い方</a>
            <a href="/blog" class="header-blog">ブログ</a>
            <a :href="appStoreUrl" target="_blank" rel="noopener noreferrer" class="header-cta">
                <svg class="header-cta-icon" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                無料ダウンロード
            </a>
        </nav>
        <a :href="appStoreUrl" target="_blank" rel="noopener noreferrer" class="header-cta-mobile">
            <svg class="header-cta-icon" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            無料ダウンロード
        </a>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { APP_CONFIG } from "../config";

const scrolled = ref(false);
const appStoreUrl = APP_CONFIG.APP_STORE_URL;

function handleScroll() {
    scrolled.value = window.scrollY > 40;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
