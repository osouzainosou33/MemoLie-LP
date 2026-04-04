<template>
    <section class="privacy">
        <div class="privacy-inner">
            <p class="section-label light" data-aos="fade-up">Privacy First</p>
            <h2 class="section-title" data-aos="fade-up">
                あなたのプライバシーを<br />しっかり守ります
            </h2>
            <p class="section-body" data-aos="fade-up">
                メモ・飛距離・成長ログはログインなしで利用できます。動画のクラウド保存は任意の Google ログイン後に利用でき、無料枠とプレミアムプランを用意しています。
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
        title: 'メモはログイン不要',
        body: 'クラブ・シチュエーション・フォームの記録は、メール登録なしでそのまま使えます。',
    },
    {
        iconSvg: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
        title: '動画はログイン後にクラウドへ',
        body: 'スイング動画は任意で Google ログイン後にアップロード。無料枠とプレミアムで上限が異なります。',
    },
    {
        iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        title: 'メモは基本オフライン',
        body: 'ログインしないかぎり、メモデータが外部サーバーに送られることはありません。',
    },
    {
        iconSvg: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        title: 'メモは端末内に保存',
        body: 'メインの記録は SQLite に保存。課金は App Store 経由で、カード情報をアプリが受け取ることはありません。',
    },
]
</script>
