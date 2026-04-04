<template>
    <section class="section usecases" id="usecases">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Use cases</p>
            <h2 class="section-title" data-aos="fade-up">
                こんな使い方を<br />されています
            </h2>
            <p class="section-lead" data-aos="fade-up">
                打ちっぱなしからラウンド前まで、気づきを「探す時間」を減らすために。
            </p>
            <ul class="use-list">
                <li
                    v-for="(line, index) in lines"
                    :key="index"
                    class="use-item"
                    data-aos="fade-up"
                    :data-aos-delay="index * 50"
                >
                    <span class="use-check" aria-hidden="true">✓</span>
                    <span class="use-text">{{ line }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const lines = [
    "打ちっぱなしで「ドライバーのコツ、これだ！」と感じた瞬間にすぐメモ",
    "スイング動画をメモと紐づけて保存——感覚と映像をセットで残す",
    "ラウンド前夜、クラブごとの注意点を30秒で見返す",
    "バンカー・アプローチのコツをシチュエーション別に保存",
    "ミスと対策をセットで記録し、「同じミス」が減っていく",
    "成長ログで1ヶ月前の自分と何が変わったか確認",
];
</script>

<style scoped>
.usecases {
    background: var(--white);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.section-lead {
    font-size: 15px;
    color: var(--text);
    line-height: 1.85;
    max-width: 520px;
    margin-bottom: 28px;
}

.use-list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.use-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-size: 15px;
    line-height: 1.75;
    color: var(--black);
}

.use-check {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--yellow);
    color: var(--black);
    font-size: 13px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
}

.use-text {
    padding-top: 2px;
}

@media (max-width: 600px) {
    .use-item {
        font-size: 14px;
    }
}
</style>
