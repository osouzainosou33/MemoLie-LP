<template>
    <!-- 料金：無料は罫線ノート、プレミアムはマーカーで囲んだページ -->
    <section class="memo-section bg-paper pricing" id="pricing">
        <div class="memo-inner">
            <div class="memo-center" data-aos="fade-up">
                <p class="memo-label">Plans</p>
                <h2 class="memo-title">
                    <span class="phrase">無料で始めて、</span><span class="phrase">必要ならプレミアムへ</span>
                </h2>
                <p class="memo-body pricing-lead">
                    <span class="phrase">チェックリストや練習の記録など、</span><span class="phrase">メインの機能はぜんぶ無料。</span><span class="phrase">動画をたくさん残したくなったら、</span><span class="phrase">プレミアムへ。</span>
                </p>
            </div>

            <div class="plans" data-aos="fade-up">
                <div class="plan plan--free ruled">
                    <h3 class="plan-name">無料</h3>
                    <p class="plan-price">¥0</p>
                    <ul class="plan-list">
                        <li>チェックリスト・ルーティーン</li>
                        <li>クラブ別の飛距離・アプローチ距離メモ</li>
                        <li>練習・ラウンドの記録、費用グラフ</li>
                        <li>友達とのメモ共有（Google ログイン後）</li>
                        <li>スイング動画の保存 <strong>5 本まで</strong>（Google ログイン後）</li>
                    </ul>
                </div>

                <div class="plan plan--premium">
                    <span class="plan-sticker" aria-hidden="true">年額は<br />初月無料</span>
                    <h3 class="plan-name">プレミアム</h3>
                    <div class="plan-options">
                        <div class="plan-option">
                            <p class="plan-option-title">月額プラン</p>
                            <p class="plan-price">¥300</p>
                            <p class="plan-note">1日あたり約10円</p>
                        </div>
                        <div class="plan-option plan-option--recommend">
                            <p class="plan-option-title">年額プラン</p>
                            <p class="plan-price">¥3,000</p>
                            <p class="plan-note">月あたり250円・1日あたり約8円</p>
                        </div>
                    </div>
                    <ul class="plan-list">
                        <li>無料プランのすべての機能</li>
                        <li>スイング動画の保存が<strong>最大 15 本</strong>に</li>
                        <li>アプリ内のバナー広告が非表示に</li>
                        <li>いつでもストアから解約・管理</li>
                    </ul>
                    <p class="plan-foot">表示価格・課金サイクルは App Store の購入画面が正です。</p>
                </div>
            </div>

            <p class="pricing-legal" data-aos="fade-up">
                サブスクリプションの自動更新、解約、返金は<a
                    href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Apple メディアサービス利用規約</a
                >および App Store の設定に従います。詳細は
                <NuxtLink to="/terms-of-service">利用規約</NuxtLink>・<NuxtLink to="/privacy-policy">プライバシーポリシー</NuxtLink>
                をご確認ください。
            </p>
        </div>
    </section>
</template>

<style scoped>
.pricing-lead {
    max-width: 640px;
    margin: 16px auto 0;
}
.plans {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 32px;
    margin-top: 56px;
    align-items: stretch;
}
.plan {
    position: relative;
    border-radius: 10px;
    padding: 32px 30px;
}
.plan--free {
    border: 2px solid rgba(29, 29, 27, 0.14);
    padding-left: 38px;
}
.plan--premium {
    background: #fff;
    border: 2.5px solid var(--ink);
    box-shadow: 6px 6px 0 var(--lime), 6px 6px 0 2.5px var(--ink);
}
.plan-name {
    font-size: 20px;
    font-weight: 900;
    color: var(--ink);
}
.plan-price {
    font-family: var(--font-logo);
    font-size: 40px;
    font-weight: 900;
    color: var(--ink);
    line-height: 1.3;
}
.plan--free .plan-price {
    margin: 4px 0 12px;
}
/* 付箋のステッカー */
.plan-sticker {
    position: absolute;
    top: -22px;
    right: 22px;
    background: var(--sticky-pink);
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 900;
    line-height: 1.35;
    color: var(--ink);
    text-align: center;
    transform: rotate(6deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}
.plan-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin: 18px 0 20px;
}
.plan-option {
    border: 2px solid rgba(29, 29, 27, 0.14);
    border-radius: 10px;
    padding: 16px;
    text-align: center;
    background: var(--paper);
}
.plan-option--recommend {
    border-color: var(--ink);
    background: var(--lime);
}
.plan-option .plan-price {
    font-size: 32px;
}
.plan-option-title {
    font-size: 13px;
    font-weight: 800;
    color: var(--ink);
}
.plan-note {
    font-size: 12px;
    color: var(--ink-sub);
    font-weight: 700;
}
.plan-option--recommend .plan-note {
    color: var(--ink);
}
.plan-list {
    list-style: none;
    display: grid;
    gap: 8px;
}
.plan-list li {
    position: relative;
    padding-left: 24px;
    font-size: 14px;
    line-height: 1.7;
    color: var(--ink);
}
.plan-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 14px;
    height: 14px;
    background: no-repeat center / contain
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 12.5l5 5L20 6' stroke='%232f8a3e' stroke-width='3.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
.plan-list strong {
    background: linear-gradient(transparent 60%, var(--lime) 60%);
}
.plan-foot {
    margin-top: 18px;
    padding-top: 14px;
    border-top: 2px dashed rgba(29, 29, 27, 0.14);
    font-size: 12px;
    color: var(--ink-sub);
}
.pricing-legal {
    margin-top: 28px;
    font-size: 12px;
    line-height: 1.8;
    color: var(--ink-sub);
    text-align: center;
}
.pricing-legal a {
    color: var(--ink);
    font-weight: 700;
}
@media (max-width: 900px) {
    .plans {
        grid-template-columns: 1fr;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
    }
}
@media (max-width: 420px) {
    .plan {
        padding: 28px 20px;
    }
    .plan-options {
        grid-template-columns: 1fr;
    }
}
</style>
