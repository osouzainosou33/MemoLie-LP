<template>
    <section class="section problem">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Problem</p>
            <h2 class="section-title" data-aos="fade-up">こんな悩み、<br />ありませんか？</h2>
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
        iconSvg: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
        title: '練習の気づきが残らない',
        body: '「今日はグリップを変えたら良くなった」と思っても、コースに出るころには忘れている。',
    },
    {
        iconSvg: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
        title: 'メモがバラバラで使えない',
        body: 'ノートや普通のメモ帳に書いても、クラブ別・状況別に整理されていないから、必要なときに探せない。',
    },
    {
        iconSvg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        title: 'コース直前に確認できない',
        body: 'スタート前の5分、「今日の自分の注意点」をサッと見直したいのに、どこを見ればいいかわからない。',
    },
    {
        iconSvg: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
        title: '成長しているか実感できない',
        body: '練習量は増えているのに、スコアに反映されているのかわからない。変化の記録がどこにもない。',
    },
]
</script>
