<template>
    <!-- 主な機能：ノートに貼ったスクリーンショットと、書き込みの付箋 -->
    <section class="memo-section bg-paper pillars" id="features">
        <div class="memo-inner">
            <div class="memo-center" data-aos="fade-up">
                <p class="memo-label">Core Features</p>
                <h2 class="memo-title">
                    <span class="phrase">打つ前に見返す。</span><span class="phrase">それだけでいい。</span>
                </h2>
            </div>

            <article
                v-for="(item, index) in pillars"
                :key="item.tag"
                class="pillar"
                :class="{ 'pillar--reverse': index % 2 !== 0 }"
                data-aos="fade-up"
            >
                <div class="pillar-text">
                    <p class="pillar-num"><span>0{{ index + 1 }}</span>{{ item.tag }}</p>
                    <h3 class="pillar-title" v-html="item.title"></h3>
                    <p class="memo-body">{{ item.body }}</p>
                    <ul class="pillar-points">
                        <li v-for="point in item.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
                <div class="pillar-visual">
                    <span class="tape tape--left" aria-hidden="true"></span>
                    <span class="tape tape--right" aria-hidden="true"></span>
                    <div class="pillar-phone">
                        <PhoneMock :screen="item.screen" :alt="item.alt" />
                    </div>
                    <p class="pillar-sticky" :style="{ background: item.sticky }">{{ item.note }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
const pillars = [
    {
        tag: "チェックリスト",
        title: "打つ前に見るリスト。<br>これだけで変わる。",
        body: "レッスンで教わったこと、自分で気づいたコツ。クラブごとのチェックリストに残しておけば、ラウンド前に30秒で思い出せる。",
        points: [
            "クラブ別・シチュエーション別・距離別に整理",
            "大事なポイントはハートで固定",
            "打つまでの手順は「ルーティーン」で管理",
        ],
        screen: "checklist",
        alt: "ドライバーのチェックリスト画面",
        note: "ティーグラウンドで30秒",
        sticky: "var(--sticky-yellow)",
    },
    {
        tag: "スイング動画",
        title: "ベストスイングと<br>お手本動画を、同じ場所に。",
        body: "自分の良かったスイングを保存して、いつでも見返せる。参考にしたいYouTubeやInstagramのリンクも一緒にまとめられる。",
        points: [
            "スイング動画をクラウドに保存（60秒まで）",
            "YouTube・Instagram・TikTokのリンクを保存",
            "クラブ・シチュエーションごとに整理",
        ],
        screen: "club_top",
        alt: "クラブ詳細画面。スイング動画と参考動画が並ぶ",
        note: "あの日の一打を、いつでも",
        sticky: "var(--sticky-green)",
    },
    {
        tag: "アプローチ",
        title: "距離ごとの打ち方を、<br>自分の言葉で残す。",
        body: "30ヤード、50ヤード、80ヤード。距離ごとに振り幅やクラブ、構え方を記録。感覚ではなく「自分の正解」を言語化できる。",
        points: [
            "10ヤード刻みで距離ごとにメモ",
            "クラブ別の飛距離も一覧で管理",
            "距離は自由に追加・並べ替え",
        ],
        screen: "approach",
        alt: "アプローチ30ヤードのメモ画面",
        note: "30y＝52°で腰から腰",
        sticky: "var(--sticky-pink)",
    },
];
</script>

<style scoped>
.pillar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    margin-top: 88px;
}
.pillar--reverse .pillar-text {
    order: 2;
}
.pillar-num {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 800;
    color: var(--green);
    margin-bottom: 14px;
}
/* 番号は手書きで丸を付けたような円 */
.pillar-num span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 44px;
    border: 2.5px solid var(--ink);
    border-radius: 52% 46% 55% 44% / 50% 54% 44% 50%;
    font-family: var(--font-logo);
    font-size: 18px;
    font-weight: 900;
    color: var(--ink);
    transform: rotate(-6deg);
}
.pillar-title {
    font-size: clamp(22px, 2.6vw, 30px);
    font-weight: 900;
    line-height: 1.4;
    color: var(--ink);
    margin-bottom: 16px;
}
.pillar-points {
    list-style: none;
    margin-top: 22px;
    display: grid;
    gap: 10px;
}
/* チェック済みのチェックボックス */
.pillar-points li {
    position: relative;
    padding-left: 32px;
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.6;
}
.pillar-points li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 20px;
    height: 20px;
    border: 2px solid var(--ink);
    border-radius: 5px;
    background: var(--lime) no-repeat center / 14px
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M5 12.5l4.5 4.5L19 7' stroke='%231d1d1b' stroke-width='3.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
/* スクリーンショットを貼った方眼の台紙 */
.pillar-visual {
    position: relative;
    height: 520px;
    border-radius: 10px;
    background-color: var(--paper-deep);
    background-image: var(--grid-bg);
    background-size: 24px 24px;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.tape--left {
    left: 18%;
    transform: translateX(-50%) rotate(-8deg);
}
.tape--right {
    left: 82%;
    transform: translateX(-50%) rotate(6deg);
}
.pillar-phone {
    width: 250px;
    margin-bottom: -1px;
    height: 470px;
    overflow: hidden;
}
.pillar-sticky {
    position: absolute;
    right: -14px;
    top: 56px;
    white-space: nowrap;
    padding: 14px 16px 16px;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.5;
    color: var(--ink);
    transform: rotate(5deg);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}
.pillar--reverse .pillar-sticky {
    right: auto;
    left: -14px;
    transform: rotate(-5deg);
}
@media (max-width: 900px) {
    .pillar {
        grid-template-columns: 1fr;
        gap: 36px;
        margin-top: 64px;
    }
    .pillar--reverse .pillar-text {
        order: 0;
    }
    .pillar-visual {
        height: 420px;
        max-width: 440px;
        width: 100%;
        margin: 0 auto;
    }
    .pillar-phone {
        width: 210px;
        height: 380px;
    }
    .pillar-sticky {
        right: -6px;
        top: 32px;
        font-size: 12px;
    }
    .pillar--reverse .pillar-sticky {
        left: -6px;
    }
}
</style>
