<template>
    <div class="blog-container">
        <AppHeader />

        <main class="blog-main">
            <article class="blog-article">

                <!-- ヘッダー -->
                <header class="article-header">
                    <div class="article-tag">打ちっぱなし活用術</div>
                    <h1 class="article-title">
                        打ちっぱなしの記録に使えるアプリ｜<br class="sp-br">練習を確実に次につなげる方法
                    </h1>
                    <p class="article-date">2026年4月19日</p>
                    <p class="article-lead">
                        打ちっぱなしで「今日はいい感じだった」「ドライバーのコツがわかった」——でも翌週の練習では、
                        その感覚がどこかへ消えている。そんな経験はありませんか？<br><br>
                        打ちっぱなしでの気づきを次の練習・ラウンドに活かすには「記録」が必要です。
                        この記事では、スマホアプリを使って打ちっぱなしの記録を仕組み化する方法を解説します。
                    </p>
                </header>

                <!-- 目次 -->
                <nav class="table-of-contents">
                    <p class="toc-title">この記事でわかること</p>
                    <ul>
                        <li><a href="#what-to-record">打ちっぱなしで記録すべき3つのこと</a></li>
                        <li><a href="#how-to-choose">記録アプリを選ぶときのポイント</a></li>
                        <li><a href="#how-to-use">MemoLieを使った具体的な記録フロー</a></li>
                    </ul>
                </nav>

                <!-- セクション1 -->
                <section id="what-to-record" class="article-section">
                    <h2 class="section-title">打ちっぱなしで記録すべき3つのこと</h2>
                    <p>
                        多くのゴルファーは、打ちっぱなしの後に何も記録しません。「覚えているから大丈夫」と思うのですが、
                        1週間後には7割近くを忘れているというのが人間の記憶の特性です。
                    </p>
                    <p>
                        では何を残せばいいか。打ちっぱなしで記録すべきことは、大きく3つに絞られます。
                    </p>

                    <h3 class="subsection-title">① クラブ別のスイングのコツ</h3>
                    <p>
                        その日気づいた「ドライバーはテイクバックを遅くする」「6番アイアンは少し左足寄りに構える」
                        といったコツは、クラブごとに記録します。クラブが変われば意識すべきことも変わるため、
                        クラブ単位で整理しておかないと、必要なときに探し出せません。
                    </p>
                    <div class="example-box">
                        <p class="example-label">記録例：ドライバー（その日気づいたこと）</p>
                        <ul>
                            <li>グリップを軽く握ると振り切れる感覚がある</li>
                            <li>右肩が前に出ると引っかかるので注意</li>
                            <li>ティーを高めにすると当たりが安定した</li>
                        </ul>
                    </div>

                    <h3 class="subsection-title">② ミスの原因と対策</h3>
                    <p>
                        「今日は右に曲がってばかりだった」で終わらせてはいけません。
                        ミスを記録するなら、必ず原因と対策をセットで残します。
                    </p>
                    <p>
                        「右に出る → 原因：ダウンスイングでクラブが外から入っている → 対策：右肘を体に近づける意識」
                        という形式で残しておくと、次回同じミスが出たときに即座に対処できます。
                    </p>

                    <div class="callout">
                        <div class="callout-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L18.66 17H1.34L10 2Z" stroke="#D97706" stroke-width="1.5" stroke-linejoin="round" fill="#FEF3C7"/>
                                <path d="M10 8V11" stroke="#D97706" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="10" cy="13.5" r="0.75" fill="#D97706"/>
                            </svg>
                        </div>
                        <div class="callout-text">
                            <strong>ミスメモの鉄則</strong><br>
                            【ミス】〇〇 → 【原因】△△ → 【対策】□□<br>
                            ミスだけを記録して終わるのが「記録しても上達しない人」のパターンです。
                        </div>
                    </div>

                    <h3 class="subsection-title">③ スイング動画（比較用）</h3>
                    <p>
                        感覚と実際の動きはズレていることがほとんどです。「手首を返している感覚はない」のに
                        動画で見ると思いっきり返っていた——こういうことは練習の現場でよく起きます。
                    </p>
                    <p>
                        スイング動画を定期的に撮影し、メモと一緒に保存しておくことで、
                        感覚と映像を照合しながら上達できます。動画単体では「何を意識していたか」が残らないため、
                        <strong>メモと動画をセットで保存することが重要</strong>です。
                    </p>
                </section>

                <!-- セクション2 -->
                <section id="how-to-choose" class="article-section">
                    <h2 class="section-title">記録アプリを選ぶときの3つのポイント</h2>
                    <p>
                        打ちっぱなしの記録には、普通のメモアプリよりも「ゴルフに特化した構造」を持つアプリが向いています。
                        汎用メモアプリでも記録自体はできますが、後から探しにくく、続けにくいのが難点です。
                    </p>

                    <h3 class="subsection-title">クラブ別に整理できるか</h3>
                    <p>
                        ドライバー・アイアン・ウェッジ・パターで気をつけることはまったく異なります。
                        クラブ別に分類する仕組みがないアプリでは、情報が混在してしまい、
                        必要なときに必要な情報を取り出せません。
                    </p>

                    <h3 class="subsection-title">動画と一緒に保存できるか</h3>
                    <p>
                        メモだけでは感覚が曖昧になります。動画と紐づけて保存できることで、
                        「あのときのスイング」を後から正確に振り返れます。
                        動画は外部アプリに保存して、メモは別のアプリ——という分離した状態では継続しにくいです。
                    </p>

                    <h3 class="subsection-title">ラウンド前にすぐ見返せるか</h3>
                    <p>
                        記録の目的は「コースで活かすこと」です。ラウンド前日の夜や、コース到着直後に、
                        クラブ別のポイントを30秒で確認できる構造になっているかどうかが、
                        実際の上達に直結します。
                    </p>

                    <div class="callout green">
                        <div class="callout-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9" fill="#B5CE3A" stroke="#4A5C0A" stroke-width="1"/>
                                <path d="M6 10L9 13L14 7.5" stroke="#1C1C1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="callout-text">
                            <strong>選ぶときの確認ポイント</strong><br>
                            クラブ別に整理できる ／ 動画と一緒に保存できる ／ ラウンド前に素早く確認できる<br>
                            この3つが揃っているアプリが、打ちっぱなしの記録に最も向いています。
                        </div>
                    </div>
                </section>

                <!-- セクション3 -->
                <section id="how-to-use" class="article-section">
                    <h2 class="section-title">MemoLieを使った具体的な記録フロー</h2>
                    <p>
                        <strong>MemoLie（メモリー）</strong>は、打ちっぱなしの気づきをクラブ別・シチュエーション別に記録する
                        ゴルフ専用メモアプリです。「クラブ別に整理・動画保存・すぐに見返せる」という3条件を
                        最初から満たした設計になっています。
                    </p>

                    <h3 class="subsection-title">打ちっぱなし中：その場でメモ</h3>
                    <p>
                        「これだ」と感じた瞬間にスマホを取り出してメモします。クラブを選ぶとそのクラブ専用の
                        入力画面が開くので、「どこに書けばいい？」と迷わずに済みます。
                        打ちっぱなし中でも、30秒あれば記録できます。
                    </p>

                    <h3 class="subsection-title">練習後：スイング動画を紐づける</h3>
                    <p>
                        その日撮影したスイング動画をメモと一緒に保存します。後から見返したときに、
                        「このメモを書いたときのスイングはこれ」と映像で確認できるので、
                        感覚のズレを客観的に把握できます。
                    </p>

                    <h3 class="subsection-title">ラウンド前日：30秒で確認</h3>
                    <p>
                        コースに出る前夜、クラブ別のメモをさっと確認します。「ドライバーは右肩を注意」
                        「7番アイアンはフィニッシュを意識」——こうした確認が、翌日の本番に直結します。
                    </p>

                    <div class="feature-list">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="14" width="8" height="6" rx="2" fill="#B5CE3A"/>
                                    <line x1="6" y1="14" x2="6" y2="3" stroke="#1C1C1E" stroke-width="1.8" stroke-linecap="round"/>
                                    <line x1="6" y1="3" x2="18" y2="6" stroke="#1C1C1E" stroke-width="1.8" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div>
                                <p class="feature-name">クラブ別メモ</p>
                                <p class="feature-desc">ドライバーからパターまで、クラブごとにスイングのコツを管理。必要な情報をすぐ引き出せます</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="16" height="14" rx="2" fill="#B5CE3A" stroke="#4A5C0A" stroke-width="1"/>
                                    <circle cx="11" cy="10" r="3" fill="#1C1C1E"/>
                                    <line x1="11" y1="17" x2="11" y2="19" stroke="#1C1C1E" stroke-width="1.5" stroke-linecap="round"/>
                                    <line x1="7" y1="19" x2="15" y2="19" stroke="#1C1C1E" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div>
                                <p class="feature-name">スイング動画保存</p>
                                <p class="feature-desc">メモと動画をセットで保存。感覚と映像を照合しながら上達できます</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 3L20 19H2L11 3Z" fill="#FEF3C7" stroke="#D97706" stroke-width="1.2" stroke-linejoin="round"/>
                                    <path d="M11 9V13" stroke="#D97706" stroke-width="1.6" stroke-linecap="round"/>
                                    <circle cx="11" cy="15.5" r="0.8" fill="#D97706"/>
                                </svg>
                            </div>
                            <div>
                                <p class="feature-name">ミスメモ</p>
                                <p class="feature-desc">ミスと原因・対策をセットで記録。同じ失敗を繰り返さない仕組みを作れます</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="2,16 8,10 13,14 20,6" stroke="#B5CE3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    <polyline points="15,6 20,6 20,11" stroke="#B5CE3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                </svg>
                            </div>
                            <div>
                                <p class="feature-name">成長ログ</p>
                                <p class="feature-desc">メモの変更履歴がタイムラインで確認できます。1ヶ月前の自分と何が変わったか一目瞭然</p>
                            </div>
                        </div>
                    </div>

                    <p>
                        登録不要・基本無料で使い始められます。打ちっぱなしの帰り道でダウンロードして、
                        次の練習から記録を始めてみてください。
                    </p>
                </section>

                <!-- まとめ -->
                <section class="article-section">
                    <h2 class="section-title">まとめ</h2>
                    <p>打ちっぱなしの記録を「上達に活かせる形」で残すには、次の3点が重要です。</p>
                    <ol class="summary-list">
                        <li><strong>クラブ別にスイングのコツを記録する</strong>——必要な情報をすぐ引き出せる</li>
                        <li><strong>ミスは原因・対策とセットで残す</strong>——同じ失敗を繰り返さない</li>
                        <li><strong>スイング動画をメモと一緒に保存する</strong>——感覚と映像を照合できる</li>
                    </ol>
                    <p>
                        汎用のメモアプリでは、この3つを継続するのは難しいです。
                        ゴルフ専用の構造を持つアプリを使うことで、記録が習慣になり、
                        練習が確実に次へつながっていきます。
                    </p>
                </section>

                <!-- CTA -->
                <div class="article-cta">
                    <p class="cta-text">打ちっぱなしの気づきを、次のラウンドへ</p>
                    <p class="cta-sub">クラブ別・スイング動画・ミスメモ。すべて無料で使えます。</p>
                    <a
                        href="https://apps.apple.com/jp/app/memolie/id6760087461"
                        class="cta-btn"
                        target="_blank"
                        rel="noopener"
                    >
                        App Storeで無料ダウンロード
                    </a>
                    <p class="cta-note">iPhone / iPad対応・登録不要</p>
                </div>

            </article>
            <BlogRelatedArticles current-slug="driving-range-record-app" />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import BlogRelatedArticles from "~/components/BlogRelatedArticles.vue";

useHead({
    title: "打ちっぱなしの記録に使えるアプリ｜練習を確実に次につなげる方法 | MemoLie",
    meta: [
        {
            name: "description",
            content:
                "打ちっぱなしで気づいたことをどう記録する？クラブ別メモ・スイング動画・ミス対策をセットで残せるゴルフ専用アプリの使い方を解説します。",
        },
    ],
    link: [{ rel: "canonical", href: "https://memolie.app/blog/driving-range-record-app" }],
});
</script>

<style scoped>
.blog-container {
    width: 100%;
}

.blog-main {
    padding: 100px 20px 80px;
    background: #fff;
}

.blog-article {
    max-width: 760px;
    margin: 0 auto;
}

/* ヘッダー */
.article-header {
    margin-bottom: 40px;
    border-bottom: 1px solid #e4e7eb;
    padding-bottom: 32px;
}

.article-tag {
    display: inline-block;
    background: #B5CE3A;
    color: #1C1C1E;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
}

.article-title {
    font-size: 32px;
    font-weight: 900;
    color: #1C1C1E;
    line-height: 1.4;
    margin-bottom: 12px;
}

.article-date {
    font-size: 13px;
    color: #999;
    margin-bottom: 24px;
}

.article-lead {
    font-size: 16px;
    line-height: 1.9;
    color: #444;
}

/* 目次 */
.table-of-contents {
    background: #F5F7F0;
    border-left: 4px solid #B5CE3A;
    border-radius: 0 8px 8px 0;
    padding: 20px 24px;
    margin-bottom: 48px;
}

.toc-title {
    font-size: 13px;
    font-weight: 800;
    color: #4A5C0A;
    margin-bottom: 12px;
    letter-spacing: 1px;
}

.table-of-contents ul {
    list-style: none;
    padding: 0;
}

.table-of-contents li {
    margin-bottom: 8px;
}

.table-of-contents a {
    font-size: 14px;
    color: #3D5A00;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
}

.table-of-contents a:hover {
    border-bottom-color: #B5CE3A;
}

/* セクション */
.article-section {
    margin-bottom: 56px;
}

.section-title {
    font-size: 22px;
    font-weight: 900;
    color: #1C1C1E;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #B5CE3A;
}

.subsection-title {
    font-size: 17px;
    font-weight: 800;
    color: #1C1C1E;
    margin: 32px 0 14px;
}

.article-section p {
    font-size: 16px;
    line-height: 1.9;
    color: #444;
    margin-bottom: 16px;
}

/* コールアウト */
.callout {
    display: flex;
    gap: 14px;
    background: #FFF8F0;
    border: 1px solid #FFD8A8;
    border-radius: 10px;
    padding: 16px 20px;
    margin: 24px 0;
}

.callout.green {
    background: #F5F7F0;
    border-color: #B5CE3A;
}

.callout-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.callout-text {
    font-size: 14px;
    line-height: 1.8;
    color: #444;
}

/* 例示ボックス */
.example-box {
    background: #F9FAFB;
    border-left: 4px solid #B5CE3A;
    border-radius: 0 8px 8px 0;
    padding: 16px 20px;
    margin: 16px 0 28px;
}

.example-label {
    font-size: 12px;
    font-weight: 800;
    color: #4A5C0A;
    margin-bottom: 10px !important;
    letter-spacing: 0.5px;
}

.example-box ul {
    list-style: disc;
    padding-left: 20px;
}

.example-box li {
    font-size: 14px;
    line-height: 1.8;
    color: #444;
    margin-bottom: 4px;
}

/* 機能リスト */
.feature-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 32px;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: #F9FAFB;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #e8e8ea;
}

.feature-icon {
    width: 44px;
    height: 44px;
    background: #F0F4DA;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.feature-name {
    font-size: 15px;
    font-weight: 800;
    color: #1C1C1E;
    margin-bottom: 4px !important;
}

.feature-desc {
    font-size: 13px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 0 !important;
}

/* まとめリスト */
.summary-list {
    padding-left: 24px;
    margin: 16px 0 24px;
}

.summary-list li {
    font-size: 16px;
    line-height: 1.9;
    color: #444;
    margin-bottom: 8px;
}

/* CTA */
.article-cta {
    background: #1C1C1E;
    border-radius: 16px;
    padding: 40px 32px;
    text-align: center;
    margin-top: 48px;
}

.cta-text {
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 8px;
}

.cta-sub {
    font-size: 14px;
    color: #9E9E9E;
    margin-bottom: 24px;
}

.cta-btn {
    display: inline-block;
    background: #B5CE3A;
    color: #1C1C1E;
    font-size: 16px;
    font-weight: 800;
    padding: 16px 32px;
    border-radius: 50px;
    text-decoration: none;
    transition: opacity 0.2s;
}

.cta-btn:hover {
    opacity: 0.85;
}

.cta-note {
    font-size: 12px;
    color: #666;
    margin-top: 12px;
}

/* レスポンシブ */
@media (max-width: 768px) {
    .blog-main {
        padding: 88px 16px 60px;
    }

    .article-title {
        font-size: 24px;
    }

    .section-title {
        font-size: 19px;
    }

    .article-cta {
        padding: 28px 20px;
    }

    .cta-btn {
        font-size: 15px;
        padding: 14px 24px;
    }

    .sp-br {
        display: none;
    }
}
</style>
