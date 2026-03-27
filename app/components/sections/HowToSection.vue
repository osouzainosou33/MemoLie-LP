<template>
    <section class="section howto" id="howto">
        <div class="section-inner">
            <p class="section-label" style="text-align: center" data-aos="fade-up">
                How to Use
            </p>
            <h2 class="section-title" style="text-align: center" data-aos="fade-up">
                3ステップで<br />ゴルフ上達・スコアアップへ
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
                    <div class="step-screenshot">
                        <img :src="step.screenshot" :alt="step.title" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const steps = [
    {
        title: '練習後にメモ',
        body: '打ちっぱなしやラウンド後、気づいたことをその場でサッと記録。クラブ・状況別に整理されます。',
        screenshot: '/assets/screenshot_06.png',
    },
    {
        title: 'コース前に確認',
        body: 'スタートの5分前、今日意識すべきポイントをさっとチェック。自信を持ってティーグラウンドに立てます。',
        screenshot: '/assets/screenshot_01.png',
    },
    {
        title: '成長を振り返る',
        body: '修正の履歴がログとして残るので、自分の変化が見えます。「ドライバーが安定してきた」を実感できる。',
        screenshot: '/assets/screenshot_07.png',
    },
]
</script>
