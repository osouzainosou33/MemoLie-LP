<template>
    <section class="privacy">
        <div class="privacy-inner">
            <p class="section-label light" data-aos="fade-up">Privacy First</p>
            <h2 class="section-title" data-aos="fade-up">
                データはすべて<br />あなたの端末の中に
            </h2>
            <p class="section-body" data-aos="fade-up">
                アカウント登録なし。インターネット送信なし。
            </p>
            <div class="privacy-grid">
                <div
                    v-for="(card, index) in privacyCards"
                    :key="index"
                    class="privacy-card"
                    data-aos="fade-up"
                    :data-aos-delay="index * 80"
                >
                    <div class="privacy-card-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            v-html="card.iconSvg"
                        ></svg>
                    </div>
                    <h3>{{ card.title }}</h3>
                    <p>{{ card.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const privacyCards = [
    {
        iconSvg: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        title: 'アカウント不要',
        body: 'メールアドレスもパスワードも必要ありません。ダウンロードしてすぐ使えます。',
    },
    {
        iconSvg: '<line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
        title: '完全オフライン動作',
        body: 'インターネット接続なしで全機能が使えます。コースのどこでも安心。',
    },
    {
        iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        title: '外部送信なし',
        body: '入力したデータが外部に送られることは一切ありません。完全にプライベートな空間です。',
    },
    {
        iconSvg: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        title: '端末内に安全保存',
        body: 'すべてのデータはデバイス内のSQLiteに保存。アプリを消せばデータも完全に削除できます。',
    },
]
</script>
