<template>
    <section class="section howto" id="howto">
        <div class="section-inner">
            <p class="section-label" style="text-align: center" data-aos="fade-up">How to Use</p>
            <h2 class="section-title no-wrap-mobile" style="text-align: center" data-aos="fade-up">
                使い方は、<br />たったこれだけ。
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
        title: '気づいたら、すぐメモ',
        body: '練習場でもレッスン後でも。「これだ！」と思った瞬間に、クラブごとのチェックリストへ。',
    },
    {
        title: '打つ前に、サッと見返す',
        body: 'ラウンドのスタート前や、練習の1球目の前に。今日意識することが30秒で思い出せる。',
    },
    {
        title: '変化を、振り返る',
        body: 'メモを書き換えた履歴やカレンダーで、自分がどう変わってきたかが見える。',
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
