<template>
    <section class="related-articles">
        <h2 class="related-title">あなたにおすすめの記事</h2>
        <div class="related-grid">
            <a
                v-for="article in relatedArticles"
                :key="article.slug"
                :href="`/blog/${article.slug}`"
                class="related-card"
            >
                <span class="related-tag">{{ article.tag }}</span>
                <p class="related-card-title">{{ article.title }}</p>
                <span class="related-date">{{ article.date }}</span>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ currentSlug: string }>();

const ALL_ARTICLES = [
    {
        slug: 'golf-swing-memo',
        title: 'ゴルフスイングのメモの残し方｜上達する人が実践している3つのコツ',
        tag: 'スイングメモ術',
        date: '2026年4月10日',
    },
    {
        slug: 'driving-range-record-app',
        title: '打ちっぱなしの記録に使えるアプリ｜練習を確実に次につなげる方法',
        tag: '打ちっぱなし活用術',
        date: '2026年4月19日',
    },
    {
        slug: 'golf-miss-cause-record',
        title: 'ゴルフのミス原因を記録する方法｜繰り返さないための3ステップ',
        tag: 'ミス撲滅',
        date: '2026年5月2日',
    },
    {
        slug: 'simulation-golf-not-improving',
        title: 'シミュレーションゴルフで上達しない人に共通する3つの原因',
        tag: 'シミュレーションゴルフ',
        date: '2026年5月2日',
    },
    {
        slug: 'simulation-golf-practice-record',
        title: 'シミュレーション練習を記録する方法｜上達につながるメモの残し方',
        tag: 'シミュレーションゴルフ',
        date: '2026年5月2日',
    },
    {
        slug: 'golf-coach-advice-forget',
        title: 'ゴルフのコーチに言われたことを忘れる人へ｜記録で差をつける方法',
        tag: 'レッスン活用術',
        date: '2026年5月4日',
    },
    {
        slug: 'simulation-golf-no-effect',
        title: 'シミュレーションゴルフに効果がないと感じたら確認したい3つのこと',
        tag: 'シミュレーションゴルフ',
        date: '2026年5月6日',
    },
];

const relatedArticles = computed(() => {
    const others = ALL_ARTICLES.filter(a => a.slug !== props.currentSlug);
    // currentSlugの隣接記事を優先しつつ3件返す
    return others.slice(0, 3);
});
</script>

<style scoped>
.related-articles {
    margin-top: 64px;
    padding-top: 48px;
    border-top: 2px solid #e4e7eb;
}

.related-title {
    font-size: 18px;
    font-weight: 900;
    color: #1C1C1E;
    margin-bottom: 24px;
}

.related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.related-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #F9FAFB;
    border: 1px solid #e8e8ea;
    border-radius: 12px;
    padding: 20px 16px;
    text-decoration: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.related-card:hover {
    border-color: #B5CE3A;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.related-tag {
    display: inline-block;
    background: #B5CE3A;
    color: #1C1C1E;
    font-size: 11px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 0.4px;
    width: fit-content;
}

.related-card-title {
    font-size: 14px;
    font-weight: 700;
    color: #1C1C1E;
    line-height: 1.6;
    flex: 1;
}

.related-date {
    font-size: 12px;
    color: #999;
}

@media (max-width: 768px) {
    .related-grid {
        grid-template-columns: 1fr;
    }
}
</style>
