<template>
    <div class="blog-container">
        <AppHeader />

        <main class="blog-main">
            <article class="blog-article">

                <!-- ヘッダー -->
                <header class="article-header">
                    <div class="article-tag">シミュレーションゴルフ</div>
                    <h1 class="article-title">
                        シミュレーション練習を記録する方法｜<br class="sp-br">上達につながるメモの残し方
                    </h1>
                    <p class="article-date">2026年5月2日</p>
                    <p class="article-lead">
                        シミュレーターで練習するとき、弾道データを眺めて「今日も打ったな」で終わっていませんか？<br><br>
                        データは出るのに、なぜか上達している感じがしない——。
                        その原因は「何を記録するか」が曖昧なままだからです。
                        この記事では、シミュレーション練習で記録すべきことと、続けやすいメモの残し方を解説します。
                    </p>
                </header>

                <!-- 目次 -->
                <nav class="table-of-contents">
                    <p class="toc-title">この記事でわかること</p>
                    <ul>
                        <li><a href="#what-to-record">シミュレーター練習で記録すべき3つのこと</a></li>
                        <li><a href="#how-to-record">続けやすいメモの残し方</a></li>
                        <li><a href="#use-memolie">MemoLieで練習記録を仕組み化する方法</a></li>
                    </ul>
                </nav>

                <!-- セクション1 -->
                <section id="what-to-record" class="article-section">
                    <h2 class="section-title">シミュレーター練習で記録すべき3つのこと</h2>

                    <p>
                        シミュレーターが表示するデータ（飛距離・弾道・スピン量など）は参考にはなりますが、
                        それだけを見ていても上達につながりにくいことがあります。
                        なぜなら、データは「結果」であって「原因」ではないからです。
                    </p>
                    <p>
                        上達するために記録すべきなのは、データよりも<strong>「そのときの体の感覚と気づき」</strong>です。
                        具体的には次の3つを残すようにしましょう。
                    </p>

                    <h3 class="subsection-title">1. その日のテーマと結果</h3>
                    <p>
                        「今日は何を確かめに来たか」と「実際どうだったか」をセットで残します。
                        テーマが明確だと、練習後の振り返りがしやすくなります。
                    </p>

                    <div class="example-box">
                        <p class="example-label">記録例</p>
                        <ul>
                            <li>テーマ：テイクバックをゆっくりにしたときの球筋を確認する</li>
                            <li>結果：左への引っかけが減った。ただしヘッドスピードが落ちて飛距離は5ヤード減</li>
                            <li>次回：テンポを保ちながら飛距離を落とさない方法を試す</li>
                        </ul>
                    </div>

                    <h3 class="subsection-title">2. 「これだ」と感じた瞬間の感覚</h3>
                    <p>
                        練習中に「あ、この感じだ」という瞬間がありますよね。
                        フェースがしっかり返った感触、体の回転がスムーズにいったとき、インパクトのタイミングがぴったり合った瞬間——。
                    </p>
                    <p>
                        この感覚は時間が経つと急速に薄れます。打席を出たらすぐにスマホに一言メモするだけで、
                        次の練習でその感覚を再現しようとするときの手がかりになります。
                    </p>

                    <div class="callout green">
                        <div class="callout-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9" fill="#B5CE3A" stroke="#4A5C0A" stroke-width="1"/>
                                <path d="M6 10L9 13L14 7.5" stroke="#1C1C1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="callout-text">
                            <strong>感覚メモの例</strong><br>
                            「右肘を体に近づけたまま下ろすと、インパクトが安定する感じがした」<br>
                            「バックスイングで左肩をしっかり回すと、飛距離が出やすい」
                        </div>
                    </div>

                    <h3 class="subsection-title">3. クラブ別の距離感と傾向</h3>
                    <p>
                        シミュレーターはクラブごとの飛距離データが積み上がりやすい環境です。
                        「7番アイアンは安定して140ヤード出るが、8番になると急に距離感がつかめない」といった
                        クラブごとの傾向を記録しておくと、コースやラウンド前の準備に役立ちます。
                    </p>
                    <p>
                        データが出るからこそ、その日の平均値や気になった傾向を
                        クラブ別にメモしておく習慣が、シミュレーター練習の強みを活かすことになります。
                    </p>

                    <div class="example-box">
                        <p class="example-label">記録例：クラブ別傾向</p>
                        <ul>
                            <li>7番アイアン：135〜145ヤード。右への球筋が多い（フェース開き気味）</li>
                            <li>ピッチングウェッジ：105〜115ヤード。距離は安定している</li>
                            <li>ドライバー：230〜250ヤード。左足体重にすると捕まりが良くなった</li>
                        </ul>
                    </div>
                </section>

                <!-- セクション2 -->
                <section id="how-to-record" class="article-section">
                    <h2 class="section-title">続けやすいメモの残し方</h2>

                    <p>
                        記録が大事だとわかっていても、続かないという声はよく聞きます。
                        練習後は疲れているし、「次回覚えているだろう」と思ってしまうものです。
                        続けやすくするためのコツを紹介します。
                    </p>

                    <h3 class="subsection-title">打席を出る前に書く</h3>
                    <p>
                        施設を出てから書こうとすると、ほぼ書かれません。
                        「打席を出る前に1分だけメモする」というルールを決めておくのが一番シンプルで効果的です。
                        クラブを片付けながら、思ったことをそのままスマホに入力するだけで十分です。
                    </p>

                    <h3 class="subsection-title">完璧に書こうとしない</h3>
                    <p>
                        長文で整理しようとすると続きません。
                        「右肘・体に近く」「テンポゆっくり・距離落ちた」といった断片的なメモで十分です。
                        後から読み返したときに「あのときの感覚だ」と思い出せる程度に書ければOKです。
                    </p>

                    <h3 class="subsection-title">次回の練習前に必ず開く</h3>
                    <p>
                        メモは書くだけでなく、<strong>読み返すことで初めて価値が出ます。</strong>
                        打席に入る前の2〜3分、前回のメモを確認する習慣をつけると、
                        練習が「続き」から始まるようになります。
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
                            <strong>続かない人のパターン</strong><br>
                            書くのは最初だけ → 読み返さない → メモの意味がなくなる → 書くのをやめる
                        </div>
                    </div>
                </section>

                <!-- セクション3 -->
                <section id="use-memolie" class="article-section">
                    <h2 class="section-title">MemoLieで練習記録を仕組み化する方法</h2>
                    <p>
                        汎用メモアプリでも記録はできますが、ゴルフのメモはクラブ別・場面別に性質が違うため、
                        後から見返すたびに整理し直す手間がかかります。
                    </p>
                    <p>
                        <strong>MemoLie（メモリー）</strong>は、シミュレーション練習での気づきを
                        クラブ別に整理して蓄積できるゴルフ専用メモアプリです。
                        「ドライバーの感覚」「7番アイアンの傾向」「アプローチの課題」を
                        それぞれの引き出しに入れておけるので、練習前に開くだけで前回の続きから始められます。
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
                                <p class="feature-desc">ドライバーからパターまでクラブ別に管理。シミュレーター練習での気づきをそのまま入れられます</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#B5CE3A"/>
                                    <rect x="12" y="3" width="7" height="7" rx="1.5" fill="#B5CE3A" opacity="0.5"/>
                                    <rect x="3" y="12" width="7" height="7" rx="1.5" fill="#B5CE3A" opacity="0.5"/>
                                    <rect x="12" y="12" width="7" height="7" rx="1.5" fill="#B5CE3A" opacity="0.3"/>
                                </svg>
                            </div>
                            <div>
                                <p class="feature-name">ベースフォームメモ</p>
                                <p class="feature-desc">グリップ・スタンス・テンポなど、自分のスイングの基準を記録。練習前の確認に使えます</p>
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
                                <p class="feature-desc">シミュレーターで出た課題と対策をセット記録。次の練習でそこから始められます</p>
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
                                <p class="feature-desc">メモの変更履歴がタイムラインで残ります。「1ヶ月前の自分はここが課題だった」と振り返れます</p>
                            </div>
                        </div>
                    </div>

                    <p>
                        練習が終わった直後、打席でサッと入力できるシンプルな設計なので、続けやすいのも特徴です。
                        登録不要・基本機能は無料。シミュレーター施設の中でもオフラインで使えます。
                    </p>
                </section>

                <!-- まとめ -->
                <section class="article-section">
                    <h2 class="section-title">まとめ</h2>
                    <p>シミュレーション練習で記録すべきことは3つです。</p>
                    <ol class="summary-list">
                        <li><strong>その日のテーマと結果</strong>——何を確かめて、どうだったかをセットで残す</li>
                        <li><strong>「これだ」と感じた瞬間の感覚</strong>——打席を出る前に一言メモする</li>
                        <li><strong>クラブ別の距離感と傾向</strong>——データを自分の言葉で解釈して記録する</li>
                    </ol>
                    <p>
                        シミュレーターはデータが豊富に出る分、「データを見る練習」になりがちです。
                        大切なのはデータの裏にある自分の感覚を記録して、次の練習に引き継ぐことです。
                    </p>
                    <p>
                        記録する習慣がつくと、同じ練習時間でも得られるものがぐっと変わってきます。
                    </p>
                </section>

                <!-- CTA -->
                <div class="article-cta">
                    <p class="cta-text">シミュレーター練習の気づきを、次回に引き継ぐ</p>
                    <p class="cta-sub">クラブ別メモ・ミスメモ・成長ログ。基本機能はすべて無料です。</p>
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
            <BlogRelatedArticles current-slug="simulation-golf-practice-record" />
        </main>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import BlogRelatedArticles from "~/components/BlogRelatedArticles.vue";

useHead({
    title: "シミュレーション練習を記録する方法｜上達につながるメモの残し方 | MemoLie",
    meta: [
        {
            name: "description",
            content:
                "シミュレーターで打つだけで終わっていませんか？弾道データではなく「感覚」と「気づき」を記録することで、練習が積み上がっていきます。続けやすいメモの残し方を解説します。",
        },
    ],
    link: [{ rel: "canonical", href: "https://memolie.app/blog/simulation-golf-practice-record" }],
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
