<template>
    <img
        class="phone-mock"
        :src="`/assets/mock/mock-${screen}.webp`"
        :alt="alt"
        width="900"
        height="1680"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : undefined"
        decoding="async"
    />
</template>

<script setup lang="ts">
defineProps<{ screen: string; alt: string; eager?: boolean }>();
</script>

<style scoped>
/* The image carries a baked shadow in a transparent margin (140px of a 1326px-wide
   device at 3x). Offsetting it makes this element's box match the phone itself. */
.phone-mock {
    display: block;
    width: 121.12%;
    max-width: none;
    height: auto;
    margin: -10.56% 0 -10.56% -10.56%;
    pointer-events: none;
    user-select: none;
}
</style>
