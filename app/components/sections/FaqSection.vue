<template>
    <section class="section faq" id="faq">
        <div class="section-inner faq-inner">
            <p class="section-label" data-aos="fade-up">FAQ</p>
            <h2 class="section-title" data-aos="fade-up">よくある質問</h2>
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
.faq {
    background: var(--white);
}
.faq-inner {
    max-width: 760px;
}
.faq .section-label,
.faq .section-title {
    text-align: center;
}
.faq-list {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.faq-item {
    border: 1px solid var(--border);
    border-radius: 16px;
    background: var(--white);
    transition: border-color 0.2s, box-shadow 0.2s;
}
.faq-item[open] {
    border-color: #c9d64a;
    box-shadow: 0 8px 24px rgba(80, 100, 0, 0.08);
}
.faq-item summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    font-size: 15.5px;
    font-weight: 800;
}
.faq-item summary::-webkit-details-marker {
    display: none;
}
.faq-q {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--yellow);
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 900;
    flex-shrink: 0;
}
.faq-question {
    flex: 1;
}
.faq-toggle {
    width: 14px;
    height: 14px;
    position: relative;
    flex-shrink: 0;
}
.faq-toggle::before,
.faq-toggle::after {
    content: "";
    position: absolute;
    background: var(--black);
    border-radius: 2px;
    top: 50%;
    left: 0;
    width: 14px;
    height: 2px;
    transform: translateY(-50%);
    transition: transform 0.2s;
}
.faq-toggle::after {
    transform: translateY(-50%) rotate(90deg);
}
.faq-item[open] .faq-toggle::after {
    transform: translateY(-50%) rotate(0deg);
}
.faq-answer {
    padding: 0 20px 20px 62px;
    font-size: 14.5px;
    line-height: 1.85;
    color: var(--text);
}
@media (max-width: 600px) {
    .faq-item summary {
        font-size: 14.5px;
        padding: 16px;
    }
    .faq-answer {
        padding: 0 16px 18px;
    }
}
</style>
