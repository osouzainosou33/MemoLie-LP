<template>
    <div class="support-page">
        <AppHeader />

        <main>
            <div class="card">
                <h2>お問い合わせ</h2>
                <div class="label">問い合わせ窓口</div>
                <div class="value">osouzainosou33@gmail.com</div>
                <hr class="divider" />
                <div class="label">対応時間</div>
                <p>平日 10:00 - 18:00（目安）</p>
                <a
                    class="mail-link"
                    href="mailto:osouzainosou33@gmail.com?subject=MemoLie%20お問い合わせ"
                    >メールで問い合わせる</a
                >
            </div>

            <div class="card">
                <h2>よくある質問</h2>
                <p><strong>Q. データはどこに保存されますか？</strong></p>
                <p>
                    A.
                    メモ・クラブ設定などの主要データは端末内（SQLite）に保存されます。ログインしてスイング動画をクラウド保存した場合、動画とそのメタデータは
                    Firebase
                    上に保存されます。ログインしない限り、メモデータが外部に送信されることはありません。
                </p>
                <hr class="divider" />
                <p>
                    <strong
                        >Q. アプリを削除するとデータはどうなりますか？</strong
                    >
                </p>
                <p>
                    A.
                    端末内のデータはアプリ削除で消去されます。クラウドに保存した動画はアプリ内から削除するか、アカウント削除のご依頼で消去できます。詳細はプライバシーポリシーをご確認ください。
                </p>
                <hr class="divider" />
                <p>
                    <strong>Q. 動画や課金について教えてください。</strong>
                </p>
                <p>
                    A.
                    動画のクラウド保存はログイン後にご利用いただけます。無料枠の上限を超える保存などは、App
                    Store
                    からプレミアムプランをご購入ください。解約・返金は各ストアの規約に従います。
                </p>
            </div>

            <div class="card">
                <h2>アプリについて</h2>
                <p>
                    MemoLie
                    は、ゴルフの練習メモをクラブ別・シチュエーション別に整理できるメモアプリです。練習の気づきをその場で記録し、コースに向かう前に素早く確認できます。
                </p>
            </div>

            <div class="card">
                <h2>法的情報</h2>
                <p>
                    <NuxtLink
                        to="/privacy-policy"
                        style="color: #111111; font-weight: 700"
                        >プライバシーポリシー</NuxtLink
                    >
                </p>
                <p style="margin-top: 10px">
                    <NuxtLink
                        to="/terms-of-service"
                        style="color: #111111; font-weight: 700"
                        >利用規約</NuxtLink
                    >
                </p>
            </div>
        </main>

        <footer>&copy; 2026 MemoLie</footer>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "MemoLie - サポート",
});
</script>

<style scoped>
.support-page {
    font-family:
        -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic",
        sans-serif;
    background: #f7f7f8;
    color: #111111;
    min-height: 100vh;
    padding: 80px 0px 20px;
}

header {
    background: #d4e44a;
    padding: 24px 20px 20px;
}

header h1 {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

header p {
    font-size: 14px;
    color: #444;
    margin-top: 4px;
}

main {
    max-width: 640px;
    margin: 0 auto;
    padding: 24px 16px 60px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card {
    background: #ffffff;
    border: 1px solid #e4e7eb;
    border-radius: 12px;
    padding: 20px;
}

.card h2 {
    font-size: 16px;
    font-weight: 800;
    color: #111111;
    margin-bottom: 12px;
}

.card p {
    font-size: 14px;
    line-height: 1.7;
    color: #333333;
}

.label {
    font-size: 12px;
    font-weight: 700;
    color: #6a6f77;
    margin-bottom: 4px;
}

.value {
    font-size: 15px;
    font-weight: 800;
    color: #111111;
}

a.mail-link {
    display: inline-block;
    margin-top: 12px;
    background: #111111;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    padding: 11px 20px;
    border-radius: 10px;
}

a.mail-link:hover {
    opacity: 0.85;
}

.divider {
    border: none;
    border-top: 1px solid #eceef1;
    margin: 14px 0;
}

footer {
    text-align: center;
    font-size: 12px;
    color: #9ca3af;
    padding: 20px 16px;
}
</style>
