<template>
    <section class="section pricing" id="pricing">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Plans</p>
            <h2 class="section-title" data-aos="fade-up">
                無料で始めて、<br />必要ならプレミアムへ
            </h2>
            <p class="section-body" data-aos="fade-up">
                メモ・飛距離・成長ログなどのコア機能はログインなしで利用できます。
            </p>
            <div class="pricing-plans-comparison" data-aos="fade-up">
                <div class="pricing-card pricing-card--free">
                    <h3 class="pricing-card-title">無料</h3>
                    <p class="pricing-card-note">スイング動画のクラウド保存</p>
                    <p class="pricing-card-highlight">最大 3 本まで</p>
                    <p class="pricing-card-subtext">（Google ログイン後）</p>
                </div>
                <div class="pricing-premium" data-aos="fade-up">
                    <h3 class="pricing-premium-title">プレミアム</h3>
                    <div class="pricing-plans-grid">
                        <div class="pricing-card pricing-card--premium">
                            <p class="pricing-plan-title">月額プラン</p>
                            <p class="pricing-plan-price">¥300</p>
                            <p class="pricing-plan-note">1日あたり約10円</p>
                        </div>
                        <div class="pricing-card pricing-card--premium">
                            <p class="pricing-plan-title">年額プラン</p>
                            <p class="pricing-plan-price">¥3,000</p>
                            <p class="pricing-plan-note">1日あたり約8円</p>
                        </div>
                    </div>
                    <ul class="pricing-list pricing-list--premium">
                        <li>スイング動画の保存が無制限</li>
                        <li>いつでもストアから解約・管理</li>
                    </ul>
                    <p class="pricing-foot pricing-foot--premium">
                        表示価格・課金サイクルは App Store の購入画面が正です。
                    </p>
                </div>
            </div>
            <p class="pricing-legal" data-aos="fade-up">
                サブスクリプションの自動更新、解約、返金は<a
                    href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Apple メディアサービス利用規約</a
                >および App Store の設定に従います。詳細は
                <NuxtLink to="/terms-of-service">利用規約</NuxtLink>・<NuxtLink
                    to="/privacy-policy"
                    >プライバシーポリシー</NuxtLink
                >
                をご確認ください。
            </p>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.pricing {
    background: var(--black);
}

.pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 40px;
    max-width: 100%;
}

@media (max-width: 768px) {
    .pricing-grid {
        grid-template-columns: 1fr !important;
    }
    .pricing-plans-comparison {
        grid-template-columns: 1fr !important;
        grid-template-rows: auto auto !important;
    }
    .pricing-premium {
        order: 1;
    }
    .pricing-card--free {
        order: 2;
    }
}

.pricing-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px 24px;
    position: relative;
}

.pricing-plans-comparison {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
    margin-top: 40px;
}

.pricing-card--free {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pricing-card-title {
    font-size: 20px;
    font-weight: 900;
    color: var(--white);
    margin-bottom: 16px;
}

.pricing-card-note {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
    line-height: 1.5;
}

.pricing-card-highlight {
    font-size: 24px;
    font-weight: 900;
    color: var(--white);
    margin-bottom: 4px;
}

.pricing-card-subtext {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
}

.pricing-premium {
    background: var(--white);
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 40px 32px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.pricing-premium-title {
    font-size: 24px;
    font-weight: 900;
    color: var(--black);
    margin-bottom: 32px;
    text-align: center;
}

.pricing-plans-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
}

.pricing-card--premium {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 20px 16px;
    text-align: center;
}

.pricing-plan-title {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pricing-plan-price {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
    color: var(--black);
}

.pricing-plan-note {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 1.5;
}

.pricing-list--premium {
    color: var(--black);
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 15px;
    line-height: 1.8;
}

.pricing-list--premium li {
    margin-bottom: 12px;
}

.pricing-list--premium li::before {
    background: var(--yellow);
}

.pricing-foot--premium {
    color: rgba(0, 0, 0, 0.45);
    border-top: none;
    padding-top: 0;
}

.pricing-price {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
}

.pricing-price-note {
    font-size: 14px;
    font-weight: 700;
    color: var(--muted);
    margin-bottom: 20px;
}

.pricing-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: var(--text);
    line-height: 1.75;
}

.pricing-list li {
    padding-left: 22px;
    position: relative;
    margin-bottom: 10px;
}

.pricing-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--yellow);
}

.pricing-foot {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    font-size: 12px;
    line-height: 1.65;
    color: var(--muted);
}

.pricing-legal {
    margin-top: 32px;
    max-width: 1000px;
    font-size: 12px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.6);
}

.pricing-legal a {
    color: var(--white);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;
}

.pricing :deep(.section-label) {
    color: var(--yellow);
}

.pricing :deep(.section-title) {
    color: var(--white);
}

.pricing :deep(.section-body) {
    color: rgba(255, 255, 255, 0.8);
}
</style>
