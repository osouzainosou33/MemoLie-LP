<template>
    <!-- 悩み：机の上に散らばった、走り書きのメモ -->
    <section class="memo-section bg-deep problem">
        <div class="memo-inner">
            <div class="problem-intro memo-center" data-aos="fade-up">
                <img src="/assets/memokun_worry.png" alt="" aria-hidden="true" loading="lazy" class="problem-memokun" />
                <p class="memo-label">Problem</p>
                <h2 class="memo-title">
                    <span class="phrase">練習してるのに、</span><br />
                    <span class="phrase">なぜか上手くならない。</span>
                </h2>
            </div>
            <div class="problem-grid">
                <article
                    v-for="(item, index) in problems"
                    :key="index"
                    class="problem-note ruled"
                    :style="{ '--tilt': item.tilt }"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                >
                    <span class="tape" aria-hidden="true"></span>
                    <p class="problem-num">あるある {{ index + 1 }}</p>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.body }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const problems = [
    {
        title: "教わったコツ、1週間後に覚えてる？",
        body: "レッスンや動画で「これだ！」と思っても、次の練習では忘れてる。同じことを何度も教わって、時間もお金も消えていく。",
        tilt: "-1.5deg",
    },
    {
        title: "練習場で打てたのに、コースでは打てない",
        body: "フラットな練習場では打てる。でもコースに出ると「あれ、どう打つんだっけ」。状況ごとの正解が、頭から消えてる。",
        tilt: "1deg",
    },
    {
        title: "情報が多すぎて、何を信じればいいか迷う",
        body: "YouTube、コーチ、ゴルフ仲間。みんな言うことが違う。自分に合ってるのがどれか分からなくなる。",
        tilt: "-0.6deg",
    },
];
</script>

<style scoped>
.problem-memokun {
    width: 104px;
    height: auto;
    margin: 0 auto 8px;
    display: block;
}
.problem-grid {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}
.problem-note {
    position: relative;
    padding: 32px 24px 28px 34px;
    border-radius: 4px;
    transform: rotate(var(--tilt));
    box-shadow: 0 14px 28px rgba(29, 29, 27, 0.1);
}
.problem-num {
    font-size: 12px;
    font-weight: 800;
    color: #c8463c;
    letter-spacing: 0.06em;
}
.problem-note h3 {
    font-size: 17px;
    font-weight: 900;
    line-height: 1.5;
    color: var(--ink);
    margin: 6px 0 10px;
}
.problem-note p:last-child {
    font-size: 14px;
    line-height: 1.85;
    color: var(--ink-sub);
}
@media (max-width: 900px) {
    .problem-grid {
        grid-template-columns: 1fr;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
        gap: 32px;
    }
}
</style>
