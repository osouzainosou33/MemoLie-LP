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
                <h2 class="section-title no-wrap-mobile">
                    自分のフォームが、<br />迷子になっていませんか？
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
        title: '教わるほど、フォームが迷子になる',
        body: 'コーチ・仲間・YouTube。いろんな人から教わるほど「結局どれが自分に合っているの？」と混乱してしまう。引き算できずに、フォームが崩れていく。',
    },
    {
        iconSvg: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="m8 21 4-4 4 4"/><path d="M10 13 8 9l-4 4"/><path d="m14 13 2-4 4 4"/>',
        title: 'YouTube で「わかった」でも、すぐ忘れる',
        body: '動画を見て「これだ！」と思っても、次の練習では頭から消えている。体で確かめる前に、情報が上書きされてしまう。',
    },
    {
        iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>',
        title: 'ライが変わると、途端に迷子になる',
        body: '打ちっぱなしでは打てる。でもコースでラフやバンカーに入ると、どこを狙えばいいか判断できなくなる。状況別のイメージが、頭に蓄積されていない。',
    },
    {
        iconSvg: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
        title: '練習に行くだけで、満足している',
        body: 'シミュレーターや打ちっぱなしに週1で通っている。でも何を改善するか決めずに球を打ち続けている。練習の「目的」が毎回リセットされている。',
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
