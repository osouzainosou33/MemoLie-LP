<template>
    <section class="section pillars" id="features">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Why MemoLie</p>
            <h2 class="section-title" data-aos="fade-up">
                メモリーが<br class="sp-only" />できる、3つのこと
            </h2>

            <article
                v-for="(item, index) in pillars"
                :key="item.tag"
                class="feature-row pillar-row"
                :class="{ reverse: index % 2 !== 0 }"
                data-aos="fade-up"
            >
                <div class="feature-text">
                    <span class="pillar-num" aria-hidden="true">0{{ index + 1 }}</span>
                    <span class="feature-tag">{{ item.tag }}</span>
                    <h3 class="feature-title" v-html="item.title"></h3>
                    <p class="feature-body">{{ item.body }}</p>
                    <ul class="feature-points">
                        <li v-for="point in item.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
                <div class="pillar-visual">
                    <div class="pillar-phone">
                        <PhoneMock :screen="item.screen" :alt="item.alt" />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
const pillars = [
    {
        tag: "Checklist",
        title: "気づきを、<br>チェックリストで整理。",
        body: "クラブ・シチュエーション・アプローチ距離ごとに、意識するポイントをチェックリストで残せる。大事なものはハートで一番上に。迷ったときに見るのは、このリストだけでいい。",
        points: [
            "クラブ別・シチュエーション別・距離別に整理",
            "♥ をつけたポイントが一番上に並ぶ",
            "打つまでの手順は「ルーティーン」タブで管理",
        ],
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面。ハート付きのポイントが並ぶ",
    },
    {
        tag: "Video",
        title: "自分のスイングも、<br>お手本の動画も、ひとまとめ。",
        body: "自分のスイング動画と、参考にしたいYouTube・Instagram・TikTokを同じ画面に保存。「あの動画どこだっけ」が、もう起きない。",
        points: [
            "自分のスイング動画をクラウド保存（Google ログイン後）",
            "YouTube・Instagram・TikTok のリンクを保存",
            "メモ・自分の動画・お手本が1画面にそろう",
        ],
        screen: "club_top",
        alt: "ドライバーの詳細画面。スイング動画と参考動画、飛距離が並ぶ",
    },
    {
        tag: "Approach",
        title: "10ヤードごとに、<br>自分だけの基準を。",
        body: "10・20・30ヤード…と距離ごとに、振り幅やクラブ、構え方をメモ。「何ヤードをどう打つか」を、感覚じゃなく自分の言葉で残せる。",
        points: [
            "10ヤード刻みで、距離ごとにメモ",
            "クラブごとの飛距離（ハーフ・平均・最高）も記録",
            "距離は設定から追加・並べ替えできる",
        ],
        screen: "approach",
        alt: "アプローチ30ヤードの画面。距離ごとのメモが並ぶ",
    },
];
</script>

<style scoped>
.pillars {
    background: var(--white);
}
.pillar-row {
    position: relative;
}
.pillar-num {
    display: block;
    font-size: 64px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
    color: transparent;
    -webkit-text-stroke: 2px #c9d64a;
    margin-bottom: 10px;
}
.pillar-visual {
    position: relative;
    height: 560px;
    border-radius: 32px;
    overflow: hidden;
    background:
        radial-gradient(80% 60% at 50% 0%, rgba(255, 255, 255, 0.9), transparent 70%),
        linear-gradient(180deg, #eef3cf 0%, #dfe99a 100%);
}
.pillar-phone {
    position: absolute;
    width: 320px;
    left: 50%;
    top: 56px;
    transform: translateX(-50%);
}
@media (max-width: 768px) {
    .pillar-num {
        font-size: 48px;
    }
    .pillar-visual {
        height: 460px;
        border-radius: 24px;
    }
    .pillar-phone {
        width: min(270px, 70vw);
        top: 40px;
    }
}
</style>
