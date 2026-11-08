<template>
    <!-- その他の機能：テープで留めたカードと、インデックスカード -->
    <section class="memo-section bg-deep more" id="more-features">
        <div class="memo-inner">
            <div class="memo-center" data-aos="fade-up">
                <p class="memo-label">And More</p>
                <h2 class="memo-title">
                    <span class="phrase">練習の記録も、</span><span class="phrase">仲間との共有も。</span>
                </h2>
            </div>

            <div class="more-grid">
                <article
                    v-for="(card, index) in visualCards"
                    :key="card.title"
                    class="more-card"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                >
                    <span class="tape" aria-hidden="true"></span>
                    <div class="more-card-text">
                        <span class="more-card-tag">{{ card.tag }}</span>
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.body }}</p>
                    </div>
                    <div class="more-card-stage">
                        <div class="more-card-phone">
                            <PhoneMock :screen="card.screen" :alt="card.alt" />
                        </div>
                    </div>
                </article>
            </div>

            <ul class="mini-grid">
                <li v-for="item in miniCards" :key="item.title" class="mini-card" data-aos="fade-up">
                    <span class="mini-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" v-html="item.icon"></svg>
                    </span>
                    <div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.body }}</p>
                    </div>
                </li>
            </ul>

            <div class="more-link-wrap" data-aos="fade-up">
                <NuxtLink to="/features" class="more-link">すべての機能を見る</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { FEATURE_ICONS } from "../../utils/featureIcons";

const visualCards = [
    {
        tag: "記録",
        title: "練習もラウンドも、記録が残る",
        body: "球数・金額・スコアをカレンダーに記録。月ごとの費用グラフも自動で見える。",
        screen: "log",
        alt: "練習とラウンドの記録カレンダー",
    },
    {
        tag: "飛距離",
        title: "番手ごとの飛距離を一覧に",
        body: "ハーフ・平均・最高の3段階で記録。コースで迷ったら、この表を開くだけ。",
        screen: "distance",
        alt: "クラブ別飛距離の一覧表",
    },
    {
        tag: "共有",
        title: "ゴルフ仲間と、メモを共有",
        body: "共有コードを送るだけで、友達のメモが見られる。いいコツは自分のメモにコピーできる。",
        screen: "friend",
        alt: "友達のメモを閲覧している画面",
    },
];

const miniCards = [
    { icon: FEATURE_ICONS.baseForm, title: "ベースフォーム", body: "崩れたときに戻る原点。スタンスやグリップを記録。" },
    { icon: FEATURE_ICONS.situation, title: "シチュエーション別", body: "バンカー、ラフ、つま先上がり。状況ごとの対処法。" },
    { icon: FEATURE_ICONS.mistake, title: "よくあるミス", body: "ミスのパターンと対策をセットで記録。" },
    { icon: FEATURE_ICONS.history, title: "メモの履歴", body: "メモの変遷が自動で残る。自分の成長が見える。" },
];
</script>

<style scoped>
.more-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-top: 56px;
}
.more-card {
    position: relative;
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 14px 28px rgba(29, 29, 27, 0.08);
}
.more-card:nth-child(2) {
    transform: rotate(0.8deg);
}
.more-card:nth-child(3) {
    transform: rotate(-0.6deg);
}
.more-card-text {
    padding: 30px 26px 8px;
}
.more-card-tag {
    display: inline-block;
    font-size: 12px;
    font-weight: 800;
    color: var(--green);
    border-bottom: 2px solid var(--lime);
}
.more-card h3 {
    font-size: 19px;
    font-weight: 900;
    line-height: 1.4;
    color: var(--ink);
    margin: 10px 0 8px;
}
.more-card p {
    font-size: 14px;
    line-height: 1.8;
    color: var(--ink-sub);
}
.more-card-stage {
    position: relative;
    margin: 18px 14px 0;
    height: 300px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;
    background-color: var(--paper);
    background-image: var(--grid-bg);
    background-size: 22px 22px;
}
.more-card-phone {
    position: absolute;
    width: 230px;
    left: 50%;
    top: 26px;
    transform: translateX(-50%);
}
/* インデックスカード：左端に色の見出しタブ */
.mini-grid {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    margin-top: 40px;
}
/* 机に貼った付箋：色と傾きを1枚ずつ変え、右下が少しめくれた立体感を出す
   （AOS が transform を上書きするため、傾きは rotate プロパティで指定） */
.mini-card {
    position: relative;
    background: var(--sticky-yellow);
    padding: 26px 18px 22px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
    rotate: -1.6deg;
    box-shadow: 0 1px 1px rgba(29, 29, 27, 0.06), 0 10px 18px -6px rgba(29, 29, 27, 0.22);
    transition: rotate 0.2s ease, translate 0.2s ease;
}
.mini-card:nth-child(2) {
    background: var(--sticky-green);
    rotate: 1.2deg;
}
.mini-card:nth-child(3) {
    background: var(--sticky-pink);
    rotate: -0.8deg;
}
.mini-card:nth-child(4) {
    background: #d9ecff;
    rotate: 1.6deg;
}
.mini-card:hover {
    rotate: 0deg;
    translate: 0 -3px;
}
/* 上辺のマスキングテープ */
.mini-card::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 64px;
    height: 20px;
    transform: translateX(-50%) rotate(-3deg);
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 1px 2px rgba(29, 29, 27, 0.08);
}
/* 右下のめくれ */
.mini-card::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.85) 50%, var(--paper-deep) 50%);
    box-shadow: -2px -2px 4px rgba(29, 29, 27, 0.08);
}
.mini-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    color: var(--ink);
    display: grid;
    place-items: center;
    flex-shrink: 0;
}
.mini-icon svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.mini-card h3 {
    font-size: 15px;
    font-weight: 900;
    color: var(--ink);
    margin-bottom: 4px;
}
.mini-card p {
    font-size: 13px;
    line-height: 1.7;
    color: var(--ink-sub);
}
.more-link-wrap {
    text-align: center;
    margin-top: 44px;
}
.more-link {
    display: inline-block;
    padding: 14px 30px;
    border: 2px solid var(--ink);
    border-radius: var(--radius);
    background: #fff;
    color: var(--ink);
    font-weight: 800;
    font-size: 15px;
    text-decoration: none;
    box-shadow: 4px 4px 0 var(--ink);
    transition: transform 0.15s, box-shadow 0.15s;
}
.more-link:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--ink);
}
@media (max-width: 1000px) {
    .mini-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 900px) {
    .more-grid {
        grid-template-columns: 1fr;
        max-width: 440px;
        margin-left: auto;
        margin-right: auto;
        gap: 36px;
    }
}
@media (max-width: 560px) {
    .mini-grid {
        grid-template-columns: 1fr;
    }
}
</style>
