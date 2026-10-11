<template>
    <header
        class="site-header"
        :style="{
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        }"
    >
        <a :href="isHome ? '#top' : '/'" class="header-logo">
            <img
                src="/assets/icon.png"
                alt="MemoLie"
                width="40"
                height="40"
            />
            <span class="header-logo-name">MemoLie</span>
        </a>
        <nav class="header-nav">
            <NuxtLink to="/features">機能</NuxtLink>
            <a :href="navLink('#howto')">使い方</a>
            <a :href="navLink('#pricing')">料金</a>
            <a :href="navLink('#faq')">よくある質問</a>
            <a href="/coach">アシスタントコーチ</a>
            <a href="/blog" class="header-blog">ブログ</a>
            <a :href="appStoreUrl" target="_blank" rel="noopener noreferrer" class="header-cta" data-cta="header">
                <AppleIcon class="header-cta-icon" />
                無料ダウンロード
            </a>
        </nav>
        <a :href="appStoreUrl" target="_blank" rel="noopener noreferrer" class="header-cta-mobile" data-cta="header">
            <AppleIcon class="header-cta-icon" />
            無料ダウンロード
        </a>
    </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { APP_CONFIG } from "../config";
import AppleIcon from "./AppleIcon.vue";

const scrolled = ref(false);
const appStoreUrl = APP_CONFIG.APP_STORE_URL;
const route = useRoute();

// トップページかどうか
const isHome = computed(() => route.path === "/");

// トップページなら #hash のまま、他ページなら /#hash にする
function navLink(hash: string): string {
    return isHome.value ? hash : `/${hash}`;
}

function handleScroll() {
    scrolled.value = window.scrollY > 40;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
