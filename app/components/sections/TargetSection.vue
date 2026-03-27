<template>
    <section class="section target">
        <div class="section-inner">
            <div class="target-inner">
                <div>
                    <p class="section-label" data-aos="fade-up">こんな方に</p>
                    <h2 class="section-title" data-aos="fade-up">
                        ゴルフ上達を目指す、<br />あなたへ
                    </h2>
                    <div class="target-list">
                        <div
                            v-for="(item, index) in targetItems"
                            :key="index"
                            class="target-item"
                            data-aos="fade-right"
                            :data-aos-delay="index * 60"
                        >
                            <div class="target-check">✓</div>
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div class="target-visual" data-aos="zoom-in">
                    <img src="/assets/memokun.png" alt="メモくん" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const targetItems = [
    '100切りを目指して練習しているゴルファー',
    '練習はしているのにスコアが安定しない',
    'スイング改善中で、気づきを記録したい',
    'コース前に自分のフォームを確認したい',
    'GPSやスコア管理より「整理」がしたい',
]
</script>
