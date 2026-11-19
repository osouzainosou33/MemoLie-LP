<template>
    <div class="privacy-policy-container">
        <AppHeader />

        <div class="privacy-content">
            <h1 class="privacy-title">プライバシーポリシー</h1>

            <section class="privacy-section">
                <p class="privacy-intro">
                    本アプリ（MemoLie）は、ゴルフのスイングや練習内容を記録するメモアプリです。メモの内容は原則として端末内に保存し、クラウドへ送る情報は必要な範囲に限っています。本ポリシーでは、取得する情報とその使い方を説明します。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">1. 取得する情報</h2>
                <div class="data-categories">
                    <div class="category">
                        <h3>【端末内に保存（外部には送信しません）】</h3>
                        <ul>
                            <li>ユーザー名・プロフィール画像</li>
                            <li>クラブ・飛距離、スイングフォーム、シチュエーション別の対策、アプローチ距離などのメモ</li>
                            <li>成長ログ、練習・ラウンドの記録と予定</li>
                            <li>練習前の通知の設定（通知は端末内で予約し、サーバーを経由しません）</li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【クラウドに保存（ログインして機能を使う場合のみ）】</h3>
                        <ul>
                            <li>メールアドレス（アカウント認証のため）</li>
                            <li>Google アカウントの表示名等（Google ログイン利用時）</li>
                            <li>スイング動画ファイルと、そのメタデータ（保存日時・どのメモに紐づくか・再生時間等）</li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【メモの共有機能を使う場合のみ】</h3>
                        <ul>
                            <li>
                                共有コードを発行すると、表示名と、クラブ・シチュエーション・アプローチ・基本フォームのチェック項目、スイングの手順、登録した YouTube リンクの写しがクラウドに保存されます。共有コードを知っている人はこの内容を閲覧できます。
                            </li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【広告に関する情報】</h3>
                        <ul>
                            <li>
                                無料でご利用の場合、Google AdMob による広告を表示します。広告配信のため、端末の情報や広告の表示・タップの状況が Google に送信されます。
                            </li>
                            <li>広告識別子（IDFA）は、トラッキングの許可（下記5）をいただいた場合にのみ利用されます。</li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【アプリの利用状況（匿名）】</h3>
                        <ul>
                            <li>
                                アプリの改善のため、起動、メモの保存、動画の追加、有料プラン画面の表示、購入の結果、予定の追加といった操作の発生を記録します。
                            </li>
                            <li>
                                記録には、インストールごとに作る匿名の識別子、アプリのバージョン、OS の種類を付けます。メールアドレス・ログインID・メモの内容は含みません。
                            </li>
                        </ul>
                    </div>
                    <div class="category">
                        <h3>【課金・決済】</h3>
                        <ul>
                            <li>
                                クレジットカード番号や銀行口座情報を、本アプリおよび開発者が取得・保存することはありません。決済は Apple の App Store が処理します。
                            </li>
                            <li>購入の有効性確認のため、取引に関する識別情報が端末と App Store の間でやり取りされる場合があります。</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">2. 利用目的</h2>
                <p>取得した情報は、次の目的にのみ利用します。</p>
                <ul>
                    <li>アプリ機能の提供（表示・編集・保存・再表示・通知）</li>
                    <li>アカウント認証とログイン状態の維持</li>
                    <li>スイング動画のクラウド保存・再生・削除</li>
                    <li>メモの共有機能の提供</li>
                    <li>有料プラン（サブスクリプション）の提供と、利用資格の確認</li>
                    <li>無料でご利用の方への広告の表示</li>
                    <li>利用状況の集計による、アプリの品質向上と新機能の検討</li>
                </ul>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">3. 外部サービスの利用</h2>
                <p>
                    本アプリは、次の外部サービスを利用します。各サービスに送られた情報は、それぞれの事業者のプライバシーポリシーに基づいて管理されます。
                </p>
                <h3 class="subsection-title">Google Firebase（Google LLC）</h3>
                <p>
                    アカウント管理・動画保存・共有機能・利用状況の記録のため、Firebase Authentication・Firebase Storage・Cloud Firestore を利用しています。
                </p>
                <h3 class="subsection-title">Google AdMob（Google LLC）</h3>
                <p>
                    無料でご利用の方への広告表示に利用しています。詳細は
                    <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Google の広告に関するポリシー</a>
                    をご確認ください。
                </p>
                <h3 class="subsection-title">App Store（Apple Inc.）</h3>
                <p>有料プランの購入・更新・復元、およびアプリの評価のお願いの表示は、Apple の仕組みを通じて行われます。</p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">4. 課金情報の取扱い</h2>
                <p>
                    有料プランは月額または年額の自動更新サブスクリプションです。開発者は、クレジットカード番号等の決済手段そのものを保有しません。契約内容の確認・解約・返金は、App Store のアカウント設定および Apple の規約に従ってください。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">5. トラッキングと広告の設定</h2>
                <p>
                    iPhone・iPad では、初回起動時などに「App からのトラッキング要求」を表示します。許可した場合のみ、広告識別子を使ってお客様に合わせた広告が表示されます。許可しない場合は、広告識別子を使わない広告が表示されます。
                </p>
                <p>
                    選択は、端末の「設定」→「プライバシーとセキュリティ」→「トラッキング」からいつでも変更できます。有料プランでは広告は表示されません。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">6. 第三者提供</h2>
                <p>
                    開発者は、法令に基づく場合を除き、利用者の個人情報を第三者へ提供・販売しません。上記3の外部サービスへの送信は、本アプリの機能を提供するために必要な範囲に限ります。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">7. 保存先</h2>
                <p>
                    <strong>メモ・設定・予定：</strong>端末内のデータベース（SQLite）および端末内ストレージ<br />
                    <strong>スイング動画・認証情報・動画のメタデータ・共有したメモ・匿名の利用状況：</strong>Google Firebase（サーバーの所在地は Google のインフラに準じます）<br /><br />
                    ログインしない場合、メモ・動画・アカウントに関する情報は Firebase に送信されません（メモ等の主要機能はオフラインでも利用できます）。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">8. データの削除</h2>
                <ul>
                    <li><strong>端末内のデータ：</strong>アプリを削除すると消去されます</li>
                    <li><strong>動画：</strong>アプリ内の削除操作でクラウドからも削除されます</li>
                    <li><strong>アカウント：</strong>アプリのマイページ「アカウントを削除」から削除できます</li>
                    <li>
                        アカウント削除後に残る動画や共有したメモ、匿名の利用状況の削除をご希望の場合は、お問い合わせからご連絡ください。確認のうえ削除します
                    </li>
                </ul>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">9. セキュリティ</h2>
                <p>
                    クラウドの動画とアカウント情報は Firebase のセキュリティルールで保護され、本人以外はアクセスできません。共有したメモは、共有コードを知っている人が閲覧できます。匿名の利用状況は、アプリから読み出せない設定にしています。端末内のデータは端末のセキュリティ設定に準じます。
                </p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">10. お問い合わせ</h2>
                <p>本ポリシーに関するご質問やデータ削除のご依頼は、アプリの設定画面の「お問い合わせ」からご連絡ください。</p>
            </section>

            <section class="privacy-section">
                <h2 class="section-title">11. 改定</h2>
                <p>本ポリシーは、必要に応じて改定することがあります。重要な変更は、本アプリまたは本サイトでお知らせします。</p>
            </section>

            <section class="privacy-section site-section">
                <h2 class="section-title">
                    12. 公式サイト（本ページのドメイン）について
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

            <div class="updated-at">最終更新日: 2026-11-20</div>
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
