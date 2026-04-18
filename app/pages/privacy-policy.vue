<template>
    <div class="privacy-policy-container">
        <AppHeader />

        <div class="privacy-content">
            <h1 class="privacy-title">プライバシーポリシー</h1>

            <section class="privacy-section">
                <p class="privacy-intro">
                    本アプリ（MemoLie）は、個人開発のゴルフスイングメモアプリです。あなたのデータプライバシーを最優先に考えています。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">1. 取得する情報</h2>
                <p>本アプリは、以下の情報を取得・保存します：</p>
                <div class="data-categories">
                    <div class="category">
                        <h3>【端末内に保存】</h3>
                        <ul>
                            <li>ユーザー名・プロフィール画像</li>
                            <li>クラブデータ・飛距離</li>
                            <li>スイングフォーム・フォームメモ</li>
                            <li>ミス記録と修正方法</li>
                            <li>シチュエーション別の対策</li>
                            <li>アプローチ距離データ</li>
                            <li>成長ログ</li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【クラウドに保存（任意・ログイン時のみ）】</h3>
                        <ul>
                            <li>メールアドレス（アカウント認証のため）</li>
                            <li>
                                Google アカウント情報（Google ログイン利用時）
                            </li>
                            <li>
                                スイング動画ファイル（Firebase Storage に保存）
                            </li>
                            <li>
                                動画に紐づくメタデータ（Cloud Firestore
                                に保存。保存日時・エンティティ種別・エンティティID・ストレージURL・再生時間等）
                            </li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【課金・決済】</h3>
                        <ul>
                            <li>
                                クレジットカード番号や銀行口座情報は、本アプリおよび開発者が取得・保存することはありません。決済は
                                Apple App Store または Google Play
                                が処理します。
                            </li>
                            <li>
                                購入の有効性確認のため、各プラットフォームが提供する範囲で取引に関する識別情報が端末とストア間でやり取りされる場合があります。
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">2. 利用目的</h2>
                <p>取得した情報は、以下の目的のためにのみ利用します：</p>
                <ul>
                    <li>アプリ機能の提供（表示・編集・保存・再表示）</li>
                    <li>アカウント認証およびログイン状態の維持</li>
                    <li>スイング動画のクラウド保存・再生・削除</li>
                    <li>
                        有料プラン（サブスクリプション・買い切り）の提供および利用に必要な範囲での確認
                    </li>
                </ul>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">3. 外部サービスの利用</h2>
                <p>本アプリは、次の外部サービスを利用します。</p>
                <h3 class="subsection-title">Google Firebase</h3>
                <p>
                    動画保存・アカウント管理のため、Google LLC の
                    Firebase（Firebase Authentication・Firebase Storage・Cloud
                    Firestore）を利用しています。Firebase に送信されるデータは
                    Google のプライバシーポリシーに基づき管理されます。
                </p>
                <h3 class="subsection-title">アプリ内課金</h3>
                <p>
                    有料プランの購入・更新・復元は、Apple Inc.（App
                    Store）または Google LLC（Google
                    Play）の決済システムを通じて行われます。各社のプライバシーポリシーおよび利用規約が適用されます。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">4. 課金情報の取扱い</h2>
                <p>
                    開発者は、利用者のクレジットカード番号等の決済手段そのものを保有しません。サブスクリプションの契約内容・更新・解約・返金は、ご利用の
                    App Store または Google Play
                    の設定および各ストアの規約に従ってください。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">5. 第三者提供</h2>
                <p>
                    本アプリは、法令に基づく場合を除き、利用者の個人情報を第三者へ提供・販売しません。Firebase
                    を通じてクラウドに保存されるデータも、当該サービス運営以外の目的には使用しません。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">6. 保存先</h2>
                <p>
                    <strong>メモ・設定データ：</strong
                    >端末内のローカルデータベース（SQLite）<br />
                    <strong>スイング動画・認証情報・動画メタデータ：</strong
                    >Google
                    Firebase（Authentication・Storage・Firestore。サーバー所在地は
                    Google のインフラに準じます）<br /><br />
                    動画のクラウド保存はログイン後のみ可能です。ログインしない場合、Firebase
                    へのデータ送信は行われません（メモ等のローカル機能はオフラインで利用できます）。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">7. データの削除</h2>
                <ul>
                    <li>
                        <strong>ローカルデータ：</strong
                        >アプリをアンインストールすると削除されます
                    </li>
                    <li>
                        <strong>クラウドデータ（動画・メタデータ）：</strong
                        >アプリ内の削除操作で Firebase から削除されます
                    </li>
                    <li>
                        <strong>アカウント削除：</strong
                        >お問い合わせよりご連絡ください
                    </li>
                </ul>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">8. セキュリティ</h2>
                <p>
                    クラウドに保存されるデータは Firebase
                    のセキュリティルールにより保護され、本人以外はアクセスできません。ローカルデータは端末のセキュリティ設定に準じます。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">9. お問い合わせ</h2>
                <p>
                    プライバシーポリシーについてのご質問・アカウント削除のご依頼は、設定画面の「お問い合わせ」からご連絡ください。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">10. 改定</h2>
                <p>
                    本ポリシーは、必要に応じて改定する場合があります。改定時は本アプリ内で通知します。
                </p>
            </section>

            <section class="privacy-section site-section">
                <h2 class="section-title">
                    11. 公式サイト（本ページのドメイン）について
                </h2>
                <p>
                    MemoLie の公式サイト（例:
                    memolie.app）では、サイトの利用状況の把握・改善のため、Google
                    LLC の Google
                    アナリティクス（アクセス解析）を利用する場合があります。Cookie
                    等により匿名に近い形でアクセス情報が収集されることがあります。詳細は
                    <a
                        href="https://policies.google.com/privacy?hl=ja"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Google のプライバシーポリシー</a
                    >
                    をご確認ください。ブラウザの設定で Cookie
                    を無効にできる場合があります。
                </p>
            </section>

            <div class="updated-at">最終更新日: 2026-04-04</div>
        </div>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

useHead({
    title: "プライバシーポリシー | MemoLie（メモリー）",
    meta: [
        {
            name: "description",
            content:
                "MemoLie（メモリー）のプライバシーポリシー。取得する情報、利用目的、第三者提供、データの取り扱いについてご説明します。",
        },
    ],
    link: [{ rel: "canonical", href: "https://memolie.app/privacy-policy" }],
});
</script>

<style scoped>
.privacy-policy-container {
    width: 100%;
}

.privacy-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 80px 20px;
}

.privacy-title {
    font-size: 48px;
    font-weight: 900;
    color: #111111;
    text-align: center;
    margin-bottom: 60px;
}

.privacy-intro {
    font-size: 16px;
    line-height: 1.8;
    color: #555555;
    text-align: center;
}

.privacy-section {
    margin-bottom: 50px;
}

.privacy-section:first-of-type {
    border-top: 1px solid #e4e7eb;
    padding-top: 40px;
}

.section-title {
    font-size: 22px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 16px;
}

.subsection-title {
    font-size: 16px;
    font-weight: 700;
    color: #111111;
    margin: 20px 0 10px;
}

.privacy-section p,
.privacy-section ul {
    font-size: 15px;
    line-height: 1.8;
    color: #555555;
    margin-bottom: 16px;
}

.privacy-section ul {
    margin-left: 20px;
}

.privacy-section li {
    margin-bottom: 8px;
}

.site-section a {
    color: #5c6b0a;
    text-decoration: underline;
}

.data-categories {
    margin-top: 20px;
}

.category {
    margin-bottom: 30px;
    padding: 20px;
    background: #f9fafb;
    border-radius: 6px;
}

.category h3 {
    font-size: 16px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 12px;
}

.category ul {
    margin-left: 20px;
}

.category li {
    font-size: 15px;
    color: #555555;
    margin-bottom: 6px;
}

.updated-at {
    text-align: right;
    font-size: 14px;
    color: #888888;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #e4e7eb;
}

@media (max-width: 768px) {
    .privacy-content {
        padding: 60px 16px;
    }

    .privacy-title {
        font-size: 32px;
        margin-bottom: 40px;
    }

    .section-title {
        font-size: 18px;
    }

    .privacy-section p,
    .privacy-section ul {
        font-size: 14px;
    }
}
</style>
