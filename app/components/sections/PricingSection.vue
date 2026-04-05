<template>
    <section class="section pricing" id="pricing">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Plans</p>
            <h2 class="section-title" data-aos="fade-up">
                無料で始めて、<br />必要ならプレミアムへ
            </h2>
            <p class="section-body" data-aos="fade-up">
                メモ・飛距離・成長ログなどのコア機能はログインなしで利用できます。スイング動画のクラウド保存は Google ログイン後に利用でき、無料枠では最大 3 本まで保存できます。
            </p>
            <div class="pricing-grid" data-aos="fade-up">
                <div class="pricing-card pricing-card--highlight">
                    <span class="pricing-badge">Premium</span>
                    <h3 class="pricing-name">プレミアム</h3>
                    <p class="pricing-price">月額 ¥300（税別）</p>
                    <ul class="pricing-list">
                        <li>スイング動画の保存が無制限</li>
                        <li>月額・年額・買い切りから選択可能</li>
                        <li>いつでもストアから解約・管理</li>
                    </ul>
                    <p class="pricing-foot">
                        表示価格・課金サイクルは App Store の購入画面が正です（例：月額 ¥300、年額 ¥3,000、買い切り ¥9,800）。
                    </p>
                </div>
                <div class="pricing-card">
                    <h3 class="pricing-name">無料</h3>
                    <p class="pricing-price">¥0</p>
                    <ul class="pricing-list">
                        <li>クラブ・シチュエーション・フォームのメモ</li>
                        <li>成長ログ・ミス記録</li>
                        <li>動画のクラウド保存（最大 3 本・ログイン後）</li>
                    </ul>
                </div>
            </div>
            <p class="pricing-legal" data-aos="fade-up">
                サブスクリプションの自動更新、解約、返金は<a href="https://www.apple.com/legal/internet-services/itunes/jp/terms.html" target="_blank" rel="noopener noreferrer">Apple メディアサービス利用規約</a>および App Store の設定に従います。詳細は<NuxtLink to="/terms-of-service">利用規約</NuxtLink>・<NuxtLink to="/privacy-policy">プライバシーポリシー</NuxtLink>をご確認ください。
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
        grid-template-columns: 1fr;
    }
}

.pricing-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px 24px;
    position: relative;
}

.pricing-card--highlight {
    background: var(--white);
    border: 2px solid var(--black);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.pricing-badge {
    position: absolute;
    top: 16px;
    right: 20px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--yellow-dark);
}

.pricing-name {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 8px;
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
    max-width: 720px;
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
