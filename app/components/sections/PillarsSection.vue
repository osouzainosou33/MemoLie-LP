<template>
    <section class="section pillars" id="features">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Core Features</p>
            <h2 class="section-title" data-aos="fade-up">
                打つ前に見返す。<br class="sp-only" />それだけでいい。
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
        title: "打つ前に見るリスト。<br>これだけで変わる。",
        body: "レッスンで教わったこと、自分で気づいたコツ。クラブごとのチェックリストに残しておけば、ラウンド前に30秒で思い出せる。",
        points: [
            "クラブ別・シチュエーション別・距離別に整理",
            "大事なポイントはハートで固定",
            "打つまでの手順は「ルーティーン」で管理",
        ],
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面",
    },
    {
        tag: "Video",
        title: "ベストスイングと<br>お手本動画を、同じ場所に。",
        body: "自分の良かったスイングを保存して、いつでも見返せる。参考にしたいYouTubeやInstagramのリンクも一緒にまとめられる。",
        points: [
            "スイング動画をクラウドに保存",
            "YouTube・Instagram・TikTokのリンクを保存",
            "ベストスイングと今のスイングを比較再生",
        ],
        screen: "club_top",
        alt: "クラブ詳細画面。スイング動画と参考動画が並ぶ",
    },
    {
        tag: "Approach",
        title: "距離ごとの打ち方を、<br>自分の言葉で残す。",
        body: "30ヤード、50ヤード、80ヤード。距離ごとに振り幅やクラブ、構え方を記録。感覚ではなく「自分の正解」を言語化できる。",
        points: [
            "10ヤード刻みで距離ごとにメモ",
            "クラブ別の飛距離も一覧で管理",
            "距離は自由に追加・並べ替え",
        ],
        screen: "approach",
        alt: "アプローチ30ヤードのメモ画面",
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
