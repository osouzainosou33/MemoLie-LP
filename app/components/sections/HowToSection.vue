<template>
    <!-- 使い方：点線の矢印でつながる3ステップ -->
    <section class="memo-section bg-grid howto" id="howto">
        <div class="memo-inner">
            <div class="memo-center" data-aos="fade-up">
                <p class="memo-label">How to Use</p>
                <h2 class="memo-title">使い方は、<span class="marker">3ステップ</span>だけ。</h2>
            </div>
            <ol class="steps">
                <li
                    v-for="(step, index) in steps"
                    :key="index"
                    class="step"
                    data-aos="fade-up"
                    :data-aos-delay="index * 100"
                >
                    <span class="step-num" aria-hidden="true">{{ index + 1 }}</span>
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.body }}</p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
const steps = [
    {
        title: "気づいたら、メモする",
        body: "練習場でもレッスン後でもOK。「これだ！」と思ったコツを、クラブごとのチェックリストに残す。",
    },
    {
        title: "打つ前に、見返す",
        body: "ラウンドのスタート前に、MemoLieを開く。今日意識することが30秒で頭に入る。",
    },
    {
        title: "積み重ねが、自信になる",
        body: "気づきが増えるほど、自分だけのゴルフノートが充実していく。迷ったときに戻れる場所ができる。",
    },
];
</script>

<style scoped>
.steps {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 56px;
    margin-top: 64px;
    counter-reset: step;
}
.step {
    position: relative;
    background: #fff;
    border: 2px solid var(--ink);
    border-radius: var(--radius);
    padding: 40px 26px 28px;
    box-shadow: 5px 5px 0 var(--ink);
}
/* カードの間を点線の矢印でつなぐ */
.step:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -48px;
    top: 50%;
    width: 40px;
    height: 14px;
    background: no-repeat center / contain
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 14'%3E%3Cpath d='M1 7h32' stroke='%231d1d1b' stroke-width='2.4' stroke-dasharray='4 4'/%3E%3Cpath d='M30 2l7 5-7 5' stroke='%231d1d1b' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
/* 手書きで丸を付けた番号 */
.step-num {
    position: absolute;
    top: -26px;
    left: 22px;
    width: 52px;
    height: 48px;
    display: grid;
    place-items: center;
    background: var(--lime);
    border: 2.5px solid var(--ink);
    border-radius: 52% 46% 55% 44% / 50% 54% 44% 50%;
    font-family: var(--font-logo);
    font-size: 22px;
    font-weight: 900;
    color: var(--ink);
    transform: rotate(-6deg);
}
.step h3 {
    font-size: 18px;
    font-weight: 900;
    color: var(--ink);
    margin-bottom: 10px;
}
.step p {
    font-size: 14px;
    line-height: 1.85;
    color: var(--ink-sub);
}
@media (max-width: 900px) {
    .steps {
        grid-template-columns: 1fr;
        max-width: 460px;
        margin-left: auto;
        margin-right: auto;
        gap: 60px;
    }
    .step:not(:last-child)::after {
        right: auto;
        left: 50%;
        top: auto;
        bottom: -44px;
        transform: translateX(-50%) rotate(90deg);
    }
}
</style>
