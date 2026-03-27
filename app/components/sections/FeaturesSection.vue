<template>
    <section class="section features" id="features">
        <div class="section-inner">
            <p class="section-label" data-aos="fade-up">Features</p>
            <h2 class="section-title" data-aos="fade-up">MemoLie でできること</h2>
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
                    <div class="tablet-frame">
                        <div class="tablet-screen">
                            <img :src="feature.screenshot" :alt="feature.tag" />
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
        tag: 'Base Form',
        title: 'ベースフォームを<br>丁寧に記録',
        body: 'グリップ・スタンス・アドレスなど、自分のスイングの基本を項目ごとに保存。迷ったときにいつでも原点に戻れます。',
        points: ['グリップ・スタンス・アドレスを個別管理', '自由記述でオリジナル項目を追加できる', '大切なポイントにお気に入り設定'],
        screenshot: '/assets/screenshot_06.png',
    },
    {
        tag: 'Club Memo',
        title: 'クラブ別に飛距離・<br>コツを整理',
        body: 'DR・3W・アイアン・ウェッジ別に、距離感やスイングのコツを管理。クラブ選びが確信を持ってできます。',
        points: ['MIN / AVG / MAX 飛距離を記録', 'クラブごとの注意点をメモできる', 'ホーム画面でクラブ一覧をすぐ確認'],
        screenshot: '/assets/screenshot_05.png',
    },
    {
        tag: 'Situation',
        title: 'シチュエーション別の<br>対策を保存',
        body: 'ラフ・バンカー・つま先上がりなど、苦手な状況ごとに対策をまとめておけます。コース直前の確認に最適。',
        points: ['よく遭遇するシチュエーションを登録', '状況ごとの対応方法をすぐ確認', 'ラウンド前のメンタル準備に活用'],
        screenshot: '/assets/screenshot_04.png',
    },
    {
        tag: 'Growth Log',
        title: '成長ログで<br>変化を実感',
        body: 'フォームを修正するたびに「変更ログ」が自動で記録されます。3ヶ月前との自分の違いが一目でわかります。',
        points: ['変更内容が自動でログに残る', '目標スコア・ベストスコアを設定', '自由メモで気づきをその場で記録'],
        screenshot: '/assets/screenshot_07.png',
    },
]
</script>
