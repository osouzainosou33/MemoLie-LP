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
                    <p class="target-manifesto" data-aos="fade-up">
                        上達する人は、気づきを記録している。<br />
                        上達しない人は、毎回ゼロから始めている。
                    </p>
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
    "打ちっぱなしの気づきを、次のラウンドまで持ち越したい人",
    "同じミスを繰り返さず、対策を積み重ねたい人",
    "スイング動画とメモをセットで残したい人",
    "ラウンド前にクラブ別の注意点をサッと確認したい人",
    "成長の変化をログで振り返りたい人",
]
</script>

<style scoped>
.target-manifesto {
    margin-top: 32px;
    font-size: clamp(15px, 2.2vw, 18px);
    font-weight: 800;
    line-height: 1.75;
    color: var(--black);
    letter-spacing: -0.02em;
    border-left: 4px solid var(--yellow);
    padding: 12px 0 12px 18px;
    max-width: 520px;
}
</style>
