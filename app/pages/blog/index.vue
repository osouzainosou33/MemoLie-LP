<template>
    <div class="blog-container">
        <AppHeader />

        <main class="blog-main">
            <div class="blog-index">
                <header class="index-header">
                    <h1 class="index-title">ゴルフ上達のヒント</h1>
                    <p class="index-lead">スイングの気づきを記録して、練習を積み上げるためのコラム</p>
                </header>

                <ul class="article-list">
                    <li v-for="article in articles" :key="article.slug" class="article-card">
                        <a :href="`/blog/${article.slug}`" class="article-card-link">
                            <div class="article-tag">{{ article.tag }}</div>
                            <h2 class="article-card-title">{{ article.title }}</h2>
                            <p class="article-card-desc">{{ article.description }}</p>
                            <div class="article-card-footer">
                                <span class="article-card-date">{{ article.date }}</span>
                                <span class="article-card-more">続きを読む</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

useHead({
    title: "ゴルフ上達のヒント | MemoLie",
    meta: [
        {
            name: "description",
            content:
                "スイングの気づきを記録して練習を積み上げるためのコラム。シミュレーションゴルフや初心者向けのメモ術・ミス改善の方法など、ゴルファーの悩みに寄り添った記事を掲載しています。",
        },
    ],
    link: [{ rel: "canonical", href: "https://memolie.app/blog" }],
});

const articles = [
    {
        slug: "simulation-golf-practice-record",
        tag: "シミュレーションゴルフ",
        title: "シミュレーション練習を記録する方法｜上達につながるメモの残し方",
        description: "シミュレーターで打つだけで終わっていませんか？弾道データではなく「感覚」を記録する方法を解説します。",
        date: "2026年5月2日",
    },
    {
        slug: "simulation-golf-not-improving",
        tag: "シミュレーションゴルフ",
        title: "シミュレーションゴルフで上達しない人に共通する3つの原因",
        description: "毎回打っているのになかなかスコアが変わらない——その原因は記録にあります。伸び悩みを解消する習慣を解説します。",
        date: "2026年5月2日",
    },
    {
        slug: "golf-miss-cause-record",
        tag: "ミス改善",
        title: "ゴルフのミス原因を記録する方法｜繰り返さないための3ステップ",
        description: "「また同じミスをした」を防ぐには、ミス・原因・対策の3点セットで記録することが大切です。",
        date: "2026年5月2日",
    },
    {
        slug: "driving-range-record-app",
        tag: "練習記録",
        title: "打ちっぱなしの記録に使えるアプリ｜練習を確実に次につなげる方法",
        description: "打ちっぱなしで感じた気づきをどう記録するか。次のラウンドに活かすための練習記録術を紹介します。",
        date: "2026年4月19日",
    },
    {
        slug: "golf-swing-memo",
        tag: "スイングメモ術",
        title: "ゴルフスイングのメモの残し方｜上達する人が実践している3つのコツ",
        description: "レッスンで「なるほど」と思っても、コースに出ると頭が真っ白に。コースで使えるメモの残し方を解説します。",
        date: "2026年4月10日",
    },
];
</script>

<style scoped>
.blog-container {
    width: 100%;
}

.blog-main {
    padding: 100px 20px 80px;
    background: #fff;
}

.blog-index {
    max-width: 760px;
    margin: 0 auto;
}

/* インデックスヘッダー */
.index-header {
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e4e7eb;
}

.index-title {
    font-size: 30px;
    font-weight: 900;
    color: #1C1C1E;
    margin-bottom: 10px;
}

.index-lead {
    font-size: 15px;
    color: #666;
    line-height: 1.7;
}

/* 記事リスト */
.article-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.article-card {
    border: 1px solid #e4e7eb;
    border-radius: 14px;
    overflow: hidden;
    transition: box-shadow 0.2s, border-color 0.2s;
}

.article-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: #B5CE3A;
}

.article-card-link {
    display: block;
    padding: 24px;
    text-decoration: none;
    color: inherit;
}

.article-tag {
    display: inline-block;
    background: #B5CE3A;
    color: #1C1C1E;
    font-size: 11px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 20px;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
}

.article-card-title {
    font-size: 18px;
    font-weight: 900;
    color: #1C1C1E;
    line-height: 1.5;
    margin-bottom: 10px;
}

.article-card-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
    margin-bottom: 16px;
}

.article-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.article-card-date {
    font-size: 12px;
    color: #999;
}

.article-card-more {
    font-size: 13px;
    font-weight: 800;
    color: #3D5A00;
}

/* レスポンシブ */
@media (max-width: 768px) {
    .blog-main {
        padding: 88px 16px 60px;
    }

    .index-title {
        font-size: 24px;
    }

    .article-card-title {
        font-size: 16px;
    }
}
</style>
