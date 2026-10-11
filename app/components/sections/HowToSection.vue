<template>
    <section class="section howto" id="howto">
        <div class="section-inner">
            <p class="section-label" style="text-align: center" data-aos="fade-up">How to Use</p>
            <h2 class="section-title no-wrap-mobile" style="text-align: center" data-aos="fade-up">
                使い方は、3ステップだけ。
            </h2>
            <div class="steps-grid">
                <div
                    v-for="(step, index) in steps"
                    :key="index"
                    class="step-card"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <div class="step-num-wrap">
                        <div class="step-num">{{ index + 1 }}</div>
                        <h3>{{ step.title }}</h3>
                    </div>
                    <p>{{ step.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const steps = [
    {
        title: '気づいたら、メモする',
        body: '練習場でもレッスン後でもOK。「これだ！」と思ったコツを、クラブごとのチェックリストに残す。',
    },
    {
        title: '打つ前に、見返す',
        body: 'ラウンドのスタート前に、MemoLie を開く。今日意識することが30秒で頭に入る。',
    },
    {
        title: '積み重ねが、スコアになる',
        body: '気づきが増えるほど、自分だけのゴルフノートが充実していく。迷いが減って、スコアが安定する。',
    },
]
</script>

<style scoped>
.howto {
    background: var(--white);
}
.howto .step-card {
    background: var(--gray);
    border-color: transparent;
}
</style>
