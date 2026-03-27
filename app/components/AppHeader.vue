<template>
    <header
        class="site-header"
        :style="{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }"
    >
        <a href="#top" class="header-logo">
            <img src="/assets/icon.png" alt="MemoLie" />
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function handleScroll() {
    scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
