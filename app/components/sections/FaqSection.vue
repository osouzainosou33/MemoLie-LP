<template>
    <!-- よくある質問：インデックスタブ付きのカード -->
    <section class="memo-section bg-deep faq" id="faq">
        <div class="memo-inner faq-inner">
            <div class="memo-center" data-aos="fade-up">
                <p class="memo-label">FAQ</p>
                <h2 class="memo-title">よくある質問</h2>
            </div>
            <div class="faq-list">
                <details v-for="item in faqs" :key="item.q" class="faq-item" data-aos="fade-up">
                    <summary>
                        <span class="faq-q" aria-hidden="true">Q</span>
                        <span class="faq-question">{{ item.q }}</span>
                        <span class="faq-toggle" aria-hidden="true"></span>
                    </summary>
                    <p class="faq-answer">{{ item.a }}</p>
                </details>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const faqs = [
    {
        q: "無料で使えますか？",
        a: "はい。チェックリストやルーティーン、飛距離、練習・ラウンドの記録などの基本機能は無料で使えます。スイング動画のクラウド保存は無料で5本まで。プレミアムプラン（月額¥300／年額¥3,000）にすると15本まで保存でき、アプリ内の広告も表示されなくなります。",
    },
    {
        q: "会員登録やログインは必要ですか？",
        a: "メモの記録だけなら登録なしですぐ使えます。スイング動画のクラウド保存と、友達とのメモ共有を使うときだけ Google ログインが必要です。",
    },
    {
        q: "メモのデータはどこに保存されますか？",
        a: "メモは基本的にお使いの端末の中に保存されます。ログインしない限り、メモが外部のサーバーに送られることはありません。スイング動画はログイン後にクラウドへ保存されます。",
    },
    {
        q: "YouTube以外の動画も保存できますか？",
        a: "YouTube・Instagram・TikTok のリンクを、クラブ・シチュエーション・アプローチ距離ごとに保存できます。自分で撮ったスイング動画（60秒以内）もアップロードできます。",
    },
    {
        q: "友達とメモを共有するにはどうすればいいですか？",
        a: "画面右上の人型アイコンから「共有する」を押すと、あなた専用の共有コードが発行されます。そのコードを友達に送って入力してもらえば、お互いのメモを見られるようになります。気に入ったメモは自分のメモにコピーできます。",
    },
    {
        q: "対応している端末は？",
        a: "iPhone と iPad に対応しています。Android 版は現在準備中です。",
    },
    {
        q: "プレミアムプランの解約方法は？",
        a: "iPhone の「設定」→ ご自身の名前 →「サブスクリプション」から、いつでも解約できます。年額プランは初月無料で、無料期間中に解約すれば料金はかかりません。",
    },
];

useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            }),
        },
    ],
});
</script>

<style scoped>
.faq-inner {
    max-width: 760px;
}
.faq-list {
    margin-top: 48px;
    display: grid;
    gap: 14px;
}
.faq-item {
    background: #fff;
    border: 2px solid var(--ink);
    border-radius: 12px;
    box-shadow: 3px 3px 0 var(--ink);
    overflow: hidden;
}
.faq-item[open] {
    box-shadow: 3px 3px 0 var(--green);
}
.faq-item summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
}
.faq-item summary::-webkit-details-marker {
    display: none;
}
/* Q はインデックスタブ風 */
.faq-q {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    background: var(--lime);
    border: 2px solid var(--ink);
    border-radius: 8px;
    font-family: var(--font-logo);
    font-weight: 900;
    font-size: 15px;
    color: var(--ink);
    transform: rotate(-4deg);
}
.faq-question {
    flex: 1;
    font-size: 15px;
    font-weight: 800;
    color: var(--ink);
    line-height: 1.5;
}
.faq-toggle {
    position: relative;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}
.faq-toggle::before,
.faq-toggle::after {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 16px;
    height: 2.5px;
    border-radius: 2px;
    background: var(--ink);
    transition: transform 0.2s;
}
.faq-toggle::after {
    transform: rotate(90deg);
}
.faq-item[open] .faq-toggle::after {
    transform: rotate(0deg);
}
.faq-answer {
    margin: 0 20px;
    padding: 16px 0 20px 46px;
    border-top: 2px dashed rgba(29, 29, 27, 0.14);
    font-size: 14px;
    line-height: 1.9;
    color: var(--ink-sub);
}
@media (max-width: 480px) {
    .faq-answer {
        padding-left: 0;
    }
}
</style>
