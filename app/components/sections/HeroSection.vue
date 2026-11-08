<template>
    <section class="hero" id="top">
        <div class="hero-inner">
            <div class="hero-text" data-aos="fade-up" data-aos-duration="700">
                <div class="hero-badge">ゴルフ専用メモアプリ</div>
                <h1 class="hero-headline">
                    <span class="phrase">迷ったら、</span><br />
                    <span class="phrase marker">ここに戻れば</span><span class="phrase marker">いい。</span>
                </h1>
                <p class="hero-sub">
                    <span class="phrase">コーチの言葉、</span><span class="phrase">動画で見たコツ、</span><span class="phrase">練習場で掴んだ感覚。</span><br />
                    <span class="phrase">教わるほど増える情報を、</span><span class="phrase">自分だけの「帰る場所」に</span><span class="phrase">まとめるアプリです。</span>
                </p>
                <div class="hero-actions">
                    <AppStoreButton cta="hero" label="App Storeで無料ダウンロード" />
                    <div class="hero-trust">無料 ・ 登録不要 ・ iPhone / iPad</div>
                </div>
            </div>

            <div class="hero-visual" data-aos="fade-up" data-aos-duration="800" data-aos-delay="120">
                <!-- 付箋：教わったことが散らばっている状態を表す -->
                <div class="sticky sticky--yellow">
                    <small>コーチに言われたこと</small>
                    <span class="phrase">ボールは</span><span class="phrase">左かかと線上。</span><span class="phrase">ティーは高め</span>
                </div>
                <div class="sticky sticky--green">
                    <small>練習場で掴んだ感覚</small>
                    <span class="phrase">フィニッシュで</span><span class="phrase">3秒止まれたら</span><span class="phrase">合格</span>
                </div>
                <!-- 散らばったメモが、アプリの1画面にまとまる -->
                <div class="hero-device">
                    <PhoneMock screen="checklist" alt="ドライバーのチェックリスト画面" eager />
                </div>
                <img class="hero-memokun" src="/assets/memokun.png" alt="めもくん" width="160" height="160" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-visual {
    position: relative;
    height: 620px;
}
.hero-device {
    position: absolute;
    left: 56%;
    top: 0;
    width: 290px;
    transform: translateX(-50%) rotate(3deg);
    z-index: 1;
}
.sticky {
    position: absolute;
    z-index: 2;
    width: 180px;
    padding: 16px 16px 18px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.55;
    color: var(--ink);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}
.sticky small {
    display: block;
    font-size: 11px;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 6px;
}
.sticky--yellow {
    background: var(--sticky-yellow);
    left: -6%;
    top: 90px;
    transform: rotate(-6deg);
}
.sticky--green {
    background: var(--sticky-green);
    left: -2%;
    top: 340px;
    transform: rotate(4deg);
}
.hero-memokun {
    position: absolute;
    right: -2%;
    bottom: 20px;
    width: 150px;
    height: auto;
    z-index: 3;
    transform: rotate(8deg);
    animation: memokun-float 3.2s ease-in-out infinite;
}
@keyframes memokun-float {
    0%,
    100% {
        translate: 0 0;
    }
    50% {
        translate: 0 -10px;
    }
}
@media (prefers-reduced-motion: reduce) {
    .hero-memokun {
        animation: none;
    }
}

/* スマホ：端末の上部と付箋が1画面目の下端に見えるよう詰める */
@media (max-width: 900px) {
    .hero-visual {
        height: min(480px, 124vw);
        margin: 30px auto 0;
        width: 100%;
        max-width: 420px;
    }
    .hero-device {
        width: min(230px, 58vw);
        left: 58%;
    }
    .sticky {
        width: 140px;
        font-size: 12px;
        padding: 12px;
    }
    .sticky--yellow {
        left: -2%;
        top: 40px;
    }
    .sticky--green {
        left: 0;
        top: 250px;
    }
    .hero-memokun {
        width: 96px;
        right: -4%;
        bottom: 10px;
    }
}
</style>
