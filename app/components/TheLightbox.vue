<template>
    <Transition name="fade">
        <div v-if="open" class="lightbox" @click="$emit('close')">
            <button class="lightbox-close" @click.stop="$emit('close')">✕</button>
            <img class="lightbox-img" :src="src" alt="" />
        </div>
    </Transition>
</template>

<script setup lang="ts">
defineProps<{ open: boolean; src: string }>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
