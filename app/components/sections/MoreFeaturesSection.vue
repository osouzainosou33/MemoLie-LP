<template>
    <section class="section more" id="more-features">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">And more</p>
            <h2 class="section-title" data-aos="fade-up">
                練習の記録も、<br class="sp-only" />仲間との共有も。
            </h2>

            <div class="more-grid">
                <article
                    v-for="(card, index) in visualCards"
                    :key="card.title"
                    class="more-card"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                >
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
                <NuxtLink to="/features" class="more-link">すべての機能を見る →</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { FEATURE_ICONS } from "../../utils/featureIcons";

const visualCards = [
    {
        tag: "Log",
        title: "練習もラウンドも、記録が残る",
        body: "球数・金額・スコアをカレンダーに記録。月ごとの費用グラフも自動で見える。",
        screen: "log",
        alt: "練習とラウンドの記録カレンダー",
    },
    {
        tag: "Distance",
        title: "番手ごとの飛距離を一覧に",
        body: "ハーフ・平均・最高の3段階で記録。コースで迷ったら、この表を開くだけ。",
        screen: "distance",
        alt: "クラブ別飛距離の一覧表",
    },
    {
        tag: "Share",
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
.more {
    background: var(--gray);
}
.more-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;
}
.more-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 28px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.more-card-text {
    padding: 28px 28px 8px;
}
.more-card-tag {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6b7a00;
}
.more-card h3 {
    font-size: 19px;
    font-weight: 900;
    line-height: 1.4;
    margin: 6px 0 8px;
}
.more-card p {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text);
}
.more-card-stage {
    position: relative;
    margin-top: auto;
    height: 330px;
    background: linear-gradient(180deg, #fff 0%, #f1f5d6 100%);
}
.more-card-phone {
    position: absolute;
    width: 250px;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
}

.mini-grid {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 20px;
}
.mini-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 18px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
}
.mini-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: #f1f5d0;
    color: #5f6e00;
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
    font-size: 14.5px;
    font-weight: 900;
    margin-bottom: 4px;
}
.mini-card p {
    font-size: 12.5px;
    line-height: 1.65;
    color: var(--muted);
}

.more-link-wrap {
    text-align: center;
    margin-top: 36px;
}
.more-link {
    display: inline-block;
    font-size: 15px;
    font-weight: 800;
    color: var(--black);
    text-decoration: none;
    border: 2px solid var(--black);
    border-radius: 50px;
    padding: 12px 28px;
    transition: background 0.2s, color 0.2s;
}
.more-link:hover {
    background: var(--black);
    color: var(--yellow);
}

@media (max-width: 900px) {
    .more-grid {
        grid-template-columns: 1fr;
    }
    .more-card-stage {
        height: 300px;
    }
    .mini-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 520px) {
    .mini-grid {
        grid-template-columns: 1fr;
    }
}
</style>
