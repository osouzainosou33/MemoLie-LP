<template>
    <section class="section features" id="features">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Features</p>
            <h2 class="section-title" data-aos="fade-up">
                ゴルフ練習メモアプリ MemoLie でできること
            </h2>
            <p class="features-lead" data-aos="fade-up">
                クラブ別メモ ／ シチュエーション別メモ ／ ベースフォームメモ ／ アプローチ距離メモ ／ ミスメモ ／ 成長ログ（タイムライン） ／ スイング動画保存
            </p>
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="feature-row"
                :class="{ reverse: index % 2 !== 0 }"
                data-aos="fade-up"
            >
                <div class="feature-text">
                    <span class="feature-tag">{{ feature.tag }}</span>
                    <h3 class="feature-title" v-html="feature.title"></h3>
                    <p class="feature-body">{{ feature.body }}</p>
                    <ul class="feature-points">
                        <li v-for="(point, i) in feature.points" :key="i">{{ point }}</li>
                    </ul>
                </div>
                <div class="feature-screenshot">
                    <div class="iphone-frame">
                        <div class="iphone-screen">
                            <img :src="feature.screenshot" :alt="feature.alt" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const features = [
    {
        tag: 'Swing Video',
        title: 'スイング動画を<br>クラブ・シチュに紐づけて保存',
        body: '練習の様子を動画で残し、いつでも見返せます。クラウド保存は Google ログイン後。無料で最大 3 本まで、プレミアムで無制限です。',
        points: ['各メモ画面からアップロード', '30 秒以内の動画に対応', 'プレミアムは月額・年額・買い切りから選択'],
        screenshot: '/assets/1.1driver.png',
        alt: 'MemoLie - スイング動画保存',
    },
    {
        tag: 'Base Form',
        title: 'ベースフォームを<br>丁寧に記録',
        body: 'グリップ・スタンス・アドレスなど、自分のスイングの基本を項目ごとに保存。迷ったときにいつでも原点に戻れます。',
        points: ['グリップ・スタンス・アドレスを個別管理', '自由記述でオリジナル項目を追加できる', '大切なポイントにお気に入り設定'],
        screenshot: '/assets/iphone-memolie-home.png',
        alt: 'MemoLie 実機 - ホーム（ベースフォーム・クラブ）',
    },
    {
        tag: 'Club Memo',
        title: 'クラブ別に飛距離・<br>コツを整理',
        body: 'DR・3W・アイアン・ウェッジ別に、距離感やスイングのコツを管理。クラブ選びが確信を持ってできます。',
        points: ['MIN / AVG / MAX 飛距離を記録', 'クラブごとの注意点をメモできる', 'ホーム画面でクラブ一覧をすぐ確認'],
        screenshot: '/assets/iphone-memolie-home-detail.png',
        alt: 'MemoLie 実機 - 飛距離・ミスメモ',
    },
    {
        tag: 'Situation',
        title: 'シチュエーション別の<br>対策を保存',
        body: 'ラフ・バンカー・つま先上がりなど、苦手な状況ごとに対策をまとめておけます。コース直前の確認に最適。',
        points: ['よく遭遇するシチュエーションを登録', '状況ごとの対応方法をすぐ確認', 'ラウンド前のメンタル準備に活用'],
        screenshot: '/assets/iphone-memolie-home-detail.png',
        alt: 'MemoLie 実機 - シチュエーション・アプローチ距離',
    },
    {
        tag: 'Growth Log',
        title: '成長ログで<br>変化を実感',
        body: 'フォームを修正するたびに「変更ログ」が自動で記録されます。3ヶ月前との自分の違いが一目でわかります。',
        points: ['変更内容が自動でログに残る', '目標スコア・ベストスコアを設定', '自由メモで気づきをその場で記録'],
        screenshot: '/assets/iphone-memolie-growth-log.png',
        alt: 'MemoLie 実機 - 成長ログ',
    },
]
</script>

<style scoped>
.features-lead {
    font-size: 14px;
    line-height: 1.85;
    color: var(--muted);
    font-weight: 700;
    max-width: 640px;
    margin: -4px 0 36px;
    letter-spacing: -0.01em;
}

@media (max-width: 600px) {
    .features-lead {
        font-size: 13px;
        margin-bottom: 28px;
    }
}
</style>
