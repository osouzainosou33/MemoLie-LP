<template>
    <!-- ダウンロード：ライムの方眼に、大きな付箋を1枚 -->
    <section class="memo-section bg-lime cta" id="download">
        <div class="cta-card" data-aos="fade-up">
            <span class="tape" aria-hidden="true"></span>
            <img class="cta-memokun" src="/assets/memokun_fun.png" alt="" aria-hidden="true" loading="lazy" />
            <p class="memo-label">Download</p>
            <h2 class="memo-title">
                <span class="phrase">次のラウンドから、</span><br />
                <span class="phrase marker">迷ったらここへ。</span>
            </h2>
            <p class="memo-body cta-body">
                <span class="phrase">ダウンロードは無料。</span><span class="phrase">メモ機能は登録なしですぐ使えます。</span><br />
                <span class="phrase">「あのとき掴んだ感覚」を、</span><span class="phrase">もう忘れない。</span>
            </p>
            <div class="cta-actions">
                <AppStoreButton cta="bottom" label="App Storeで無料ダウンロード" />
                <span class="cta-trust">無料 ・ 登録不要 ・ iPhone / iPad</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cta {
    padding-top: 120px;
}
.cta-card {
    position: relative;
    max-width: 720px;
    margin: 0 auto;
    padding: 56px 40px 48px;
    text-align: center;
    background: var(--sticky-yellow);
    transform: rotate(-1deg);
    box-shadow: 0 22px 40px rgba(29, 29, 27, 0.18);
}
.cta-memokun {
    position: absolute;
    left: -64px;
    bottom: -40px;
    width: 120px;
    height: auto;
    transform: rotate(-10deg);
}
.cta-body {
    margin: 18px 0 28px;
}
.cta-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
}
.cta-trust {
    font-size: 13px;
    font-weight: 700;
    color: var(--ink-sub);
}
@media (max-width: 768px) {
    .cta {
        padding-top: 96px;
    }
    .cta-card {
        padding: 48px 22px 40px;
    }
    .cta-memokun {
        width: 80px;
        left: -10px;
        bottom: -36px;
    }
}
</style>
