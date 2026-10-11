<template>
    <section class="hero" id="top">
        <div class="hero-inner">
            <div class="hero-text" data-aos="fade-right" data-aos-duration="800">
                <div class="hero-badge">ゴルフ専用メモアプリ</div>
                <h1 class="hero-headline">
                    そのレッスン、<br />
                    ちゃんと<span class="accent">覚えてる？</span>
                </h1>
                <p class="hero-sub">
                    打ちっぱなしでは打てるのに、コースでは打てない。<br class="pc-only" />
                    それ、気づきを“置き忘れてる”だけかも。
                </p>
                <p class="hero-sub hero-sub--strong">
                    <strong>MemoLie（メモリー）</strong>は、チェックリスト・スイング動画・参考YouTubeを
                    クラブごとにまとめておける、自分だけのゴルフノート。
                </p>
                <div class="hero-actions">
                    <AppStoreButton cta="hero" />
                    <div class="hero-trust">iPhone対応 ・ 基本無料 ・ メモは登録不要</div>
                </div>
            </div>

            <div class="hero-visual" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
                <div class="hero-device hero-device--back">
                    <PhoneMock screen="checklist" alt="ドライバーのチェックリスト画面" />
                </div>
                <div class="hero-device hero-device--front">
                    <PhoneMock screen="home" alt="MemoLieのホーム画面。目標スコアとベストスコア、ベースフォームのメモが並ぶ" eager />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-sub {
    margin-bottom: 14px;
}
.hero-sub--strong {
    color: rgba(0, 0, 0, 0.78);
    margin-bottom: 32px;
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
