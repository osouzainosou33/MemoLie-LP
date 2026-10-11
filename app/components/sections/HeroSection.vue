<template>
    <section class="hero" id="top">
        <div class="hero-inner">
            <div class="hero-text" data-aos="fade-right" data-aos-duration="800">
                <div class="hero-badge">Golf Memo App</div>
                <h1 class="hero-headline">
                    ゴルフの<br />
                    <span class="accent">「忘れたくない」</span>を、<br />
                    ぜんぶここに。
                </h1>
                <p class="hero-sub">
                    レッスンのコツ、ベストスイング、アプローチの打ち方。<br class="pc-only" />
                    クラブごとにまとめて、打つ前にサッと見返せる。
                </p>
                <div class="hero-actions">
                    <AppStoreButton cta="hero" />
                    <div class="hero-trust">無料ではじめる ・ 登録不要 ・ iPhone / iPad</div>
                </div>
            </div>

            <div class="hero-visual" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
                <div class="hero-device hero-device--back">
                    <PhoneMock screen="checklist" alt="ドライバーのチェックリスト画面" />
                </div>
                <div class="hero-device hero-device--front">
                    <PhoneMock screen="home" alt="MemoLieのホーム画面" eager />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-sub {
    margin-bottom: 28px;
}
.hero-trust {
    font-size: 12.5px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.62);
}

.hero-visual {
    position: relative;
    height: 640px;
    display: block;
}
.hero-device {
    position: absolute;
}
.hero-device--front {
    width: 330px;
    left: 50%;
    top: 0;
    transform: translateX(-38%);
    z-index: 2;
}
.hero-device--back {
    width: 290px;
    left: 50%;
    top: 70px;
    transform: translateX(-98%) rotate(-6deg);
    z-index: 1;
    opacity: 0.96;
}

@media (max-width: 1100px) {
    .hero-device--front {
        width: 290px;
    }
    .hero-device--back {
        width: 250px;
    }
    .hero-visual {
        height: 580px;
    }
}
@media (max-width: 900px) {
    .hero-visual {
        height: auto;
        margin-top: 36px;
        display: flex;
        justify-content: center;
    }
    .hero-device {
        position: relative;
    }
    .hero-device--front {
        width: min(300px, 72vw);
        left: auto;
        transform: none;
    }
    .hero-device--back {
        display: none;
    }
}
</style>
