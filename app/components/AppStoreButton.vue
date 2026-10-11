<template>
    <a
        :href="APP_CONFIG.APP_STORE_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
        :class="{ 'btn-primary--light': light }"
        :data-cta="cta"
    >
        <AppleIcon />
        {{ label }}
    </a>
</template>

<script setup lang="ts">
import { APP_CONFIG } from "../config";
import AppleIcon from "./AppleIcon.vue";

withDefaults(defineProps<{ cta: string; label?: string; light?: boolean }>(), {
    label: "App Store で無料ダウンロード",
    light: false,
});
</script>

<style scoped>
.btn-primary--light {
    background: var(--yellow);
    color: var(--black);
}
.btn-primary--light :deep(svg) {
    fill: var(--black);
}
</style>
