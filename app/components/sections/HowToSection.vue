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
                        <div class="iphone-frame">
                            <div class="iphone-screen">
                                <img :src="step.screenshot" :alt="step.alt" loading="lazy" />
                            </div>
                        </div>
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
        screenshot: '/assets/iphone-memolie-home-detail.png',
        alt: 'MemoLie 実機 - ホーム（記録・一覧）',
    },
    {
        title: 'コース前に確認',
        body: 'スタートの5分前、今日意識すべきポイントをさっとチェック。自信を持ってティーグラウンドに立てます。',
        screenshot: '/assets/iphone-memolie-home.png',
        alt: 'MemoLie 実機 - ホーム（スコア・クラブ）',
    },
    {
        title: '成長を振り返る',
        body: '修正の履歴がログとして残るので、自分の変化が見えます。「ドライバーが安定してきた」を実感できる。',
        screenshot: '/assets/iphone-memolie-growth-log.png',
        alt: 'MemoLie 実機 - 成長ログ',
    },
]
</script>
