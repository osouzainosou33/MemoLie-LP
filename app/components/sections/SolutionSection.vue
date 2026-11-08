<template>
    <!-- 解決：散らばったメモが、1冊のノートにまとまる -->
    <section class="memo-section bg-lime solution">
        <div class="solution-page" data-aos="fade-up">
            <span class="solution-rings" aria-hidden="true"></span>
            <img class="solution-memokun" src="/assets/memokun_fun.png" alt="" aria-hidden="true" loading="lazy" />
            <p class="memo-label">Solution</p>
            <h2 class="memo-title">
                <span class="phrase">答えは、</span><br />
                <span class="phrase marker">過去の自分が</span><span class="phrase marker">知っている。</span>
            </h2>
            <p class="memo-body solution-body">
                <span class="phrase">練習やレッスンで掴んだコツを、</span><span class="phrase">クラブごとに整理して残す。</span><br />
                <span class="phrase">打つ前にサッと見返す。</span><span class="phrase">それだけで、コースでの迷いが減る。</span><br />
                <span class="phrase">MemoLieは、自分だけの</span><span class="phrase">「ゴルフの正解」を積み上げるアプリです。</span>
            </p>
        </div>
    </section>
</template>

<style scoped>
.solution-page {
    position: relative;
    max-width: 820px;
    margin: 0 auto;
    background: #fff;
    border-radius: 6px 18px 18px 6px;
    padding: 64px 56px 56px 88px;
    box-shadow: 6px 6px 0 var(--ink);
}
/* 左端のリング綴じ穴 */
.solution-rings {
    position: absolute;
    left: 26px;
    top: 28px;
    bottom: 28px;
    width: 18px;
    background: radial-gradient(circle at 9px 9px, var(--paper-deep) 7px, rgba(29, 29, 27, 0.35) 8px, transparent 9px) 0 0 / 18px 44px repeat-y;
}
.solution-memokun {
    position: absolute;
    right: -28px;
    top: -56px;
    width: 128px;
    height: auto;
    transform: rotate(10deg);
}
.solution-body {
    margin-top: 22px;
}
@media (max-width: 768px) {
    .solution-page {
        padding: 56px 24px 40px 52px;
    }
    .solution-rings {
        left: 16px;
    }
    .solution-memokun {
        width: 88px;
        right: -8px;
        top: -44px;
    }
}
</style>
