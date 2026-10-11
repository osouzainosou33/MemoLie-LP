<template>
    <section class="section problem">
        <div class="section-inner">
            <div class="problem-intro" data-aos="fade-up">
                <img
                    src="/assets/memokun_worry.png"
                    alt="悩むメモくん"
                    loading="lazy"
                    class="memokun-worry"
                />
                <p class="section-label">Problem</p>
                <h2 class="section-title">
                    自分のフォーム、<br />迷子になってない？
                </h2>
            </div>
            <div class="problem-grid">
                <div
                    v-for="(item, index) in problems"
                    :key="index"
                    class="pain-card"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                >
                    <div class="card-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            v-html="item.iconSvg"
                        ></svg>
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const problems = [
    {
        iconSvg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        title: '教わるほど、迷子になる',
        body: 'コーチ、友達、YouTube。いろんな人に教わるほど「結局どれが自分に合ってるの？」ってなる。',
    },
    {
        iconSvg: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="m8 21 4-4 4 4"/><path d="M10 13 8 9l-4 4"/><path d="m14 13 2-4 4 4"/>',
        title: '「これだ！」が、次の練習で消えてる',
        body: '動画を見て分かった気になっても、1週間後にはほとんど覚えてない。気づきが上書きされていく。',
    },
    {
        iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
        title: '練習場で打てても、コースで打てない',
        body: 'ライも距離も毎回バラバラ。状況ごとの「自分の正解」が、手元に残っていない。',
    },
]
</script>

<style scoped>
.problem {
    background: #1e1e20;
}

.problem-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 44px;
}

.memokun-worry {
    width: 100px;
    height: auto;
    margin-bottom: 16px;
}

.section-label {
    color: #e05555;
}

.section-title {
    color: #ffffff;
}

@media (min-width: 769px) {
    .problem-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.pain-card {
    background: #2c2c2e;
    border-color: #3a3a3c;
}

.card-icon {
    background: #7f1d1d;
    color: #fca5a5;
}

.pain-card h3 {
    color: #f5f5f5;
}

.pain-card p {
    color: #9ca3af;
}
</style>
