<template>
    <div class="terms-container">
        <AppHeader />

        <div class="terms-content">
            <h1 class="terms-title">利用規約</h1>
            <p class="updated-at-top">最終更新日: 2026-04-04</p>

            <section class="terms-section">
                <h2 class="section-title">1. 適用</h2>
                <p>
                    本規約は、モバイルアプリ「MemoLie」（以下「本アプリ」）の利用条件を定めるものです。本アプリを利用する前に本規約をお読みいただき、同意のうえご利用ください。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">2. サービス内容</h2>
                <p>
                    本アプリは、ゴルフのスイング・クラブ・シチュエーション等に関するメモや記録を支援する機能を提供します。機能の詳細・提供範囲は、アプリのバージョンおよびストアの表示に従います。開発者は、機能の追加・変更・終了を行うことがあります。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">3. アカウント</h2>
                <p>
                    ログインは任意です。メモ等の主要機能はログインなしで利用できます。動画のクラウド保存等の機能を利用する場合、Google アカウント等による認証が必要になることがあります。アカウント情報の管理は利用者の責任とし、第三者への譲渡・貸与は禁止します。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">4. 有料プラン（プレミアム）</h2>
                <p>
                    本アプリは、無料で利用できる範囲と、App Store または Google Play 経由で購入する有料プラン（サブスクリプションおよび買い切り。以下「有料プラン」）を提供する場合があります。
                </p>
                <p>
                    有料プランの内容・価格・課金サイクルは、購入画面および各ストアの表示が優先します。サブスクリプションは、解約手続きを行わない限り、各ストアの規約に従い自動更新される場合があります。更新・解約・請求の停止は、ご利用の App Store または Google Play のアカウント設定から行ってください。
                </p>
                <p>
                    購入の取消・返金については、Apple または Google の定める条件に従います。開発者が個別に返金を保証するものではありません。機種変更や OS の再インストール後は、各ストアの「購入の復元」等の機能をご利用ください。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">5. 禁止事項</h2>
                <p>利用者は、以下を行ってはなりません。</p>
                <ul>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>第三者（他の利用者を含む）の権利を侵害する行為</li>
                    <li>本アプリや関連システムへの不正アクセス、改ざん、リバースエンジニアリング（法令で認められる範囲を除く）</li>
                    <li>本アプリを通じて取得した情報の、法令に反する収集・公開・販売</li>
                    <li>その他、開発者が不適切と判断する行為</li>
                </ul>
            </section>

            <section class="terms-section">
                <h2 class="section-title">6. 知的財産</h2>
                <p>
                    本アプリに関する著作権・商標その他の知的財産権は、開発者または正当な権利者に帰属します。本規約に基づく利用許諾は、本アプリの非独占的な利用に限られ、ソースコードやデザイン資産の譲渡を意味しません。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">7. 免責</h2>
                <p>
                    本アプリは現状有姿で提供されます。記録内容やアドバイス性の情報の正確性・完全性・有用性について、開発者は保証しません。ゴルフの技術・安全・競技結果等についての責任は利用者に帰します。
                </p>
                <p>
                    通信環境、端末の状態、第三者サービス（Firebase、ストア決済等）の障害により生じた損害について、開発者に故意または重過失がある場合を除き、責任を負いかねます。消費者契約法その他の強行法規が適用される場合は、その範囲で無効とされる条項は無効とします。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">8. 規約の変更・サービスの終了</h2>
                <p>
                    開発者は、必要に応じて本規約を変更できます。重要な変更がある場合は、アプリ内表示等の合理的な方法で周知します。本アプリの提供を終了する場合も同様です。
                </p>
            </section>

            <section class="terms-section">
                <h2 class="section-title">9. 準拠法・管轄</h2>
                <p>
                    本規約は日本法を準拠法とします。本アプリに関する紛争については、開発者の所在地を管轄する裁判所を第一審の合意管轄とします（消費者契約法その他の強行法規により別段の定めがある場合はその限りではありません）。
                </p>
            </section>

            <div class="updated-at">
                最終更新日: 2026-04-04
            </div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<style scoped>
.terms-container {
    width: 100%;
}

.terms-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 20px;
}

.terms-title {
    font-size: 48px;
    font-weight: 900;
    color: #111111;
    text-align: center;
    margin-bottom: 12px;
}

.updated-at-top {
    text-align: center;
    font-size: 14px;
    color: #888888;
    margin-bottom: 48px;
}

.terms-section {
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e4e7eb;
}

.terms-section:last-of-type {
    border-bottom: none;
}

.section-title {
    font-size: 22px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 16px;
}

.terms-section p,
.terms-section ul {
    font-size: 15px;
    line-height: 1.8;
    color: #555555;
    margin-bottom: 16px;
}

.terms-section ul {
    margin-left: 20px;
}

.terms-section li {
    margin-bottom: 8px;
}

.updated-at {
    text-align: right;
    font-size: 14px;
    color: #888888;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #e4e7eb;
}

@media (max-width: 768px) {
    .terms-content {
        padding: 60px 16px;
    }

    .terms-title {
        font-size: 32px;
    }

    .section-title {
        font-size: 18px;
    }

    .terms-section p,
    .terms-section ul {
        font-size: 14px;
    }
}
</style>
