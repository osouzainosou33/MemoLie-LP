<template>
    <div class="blog-app-cta">
        <p class="blog-app-cta-text">{{ text }}</p>
        <p class="blog-app-cta-sub">{{ sub }}</p>
        <a
            href="https://apps.apple.com/jp/app/memolie/id6760087461"
            class="blog-app-cta-btn"
            target="_blank"
            rel="noopener"
        >
            App Storeで無料ダウンロード
        </a>
        <p class="blog-app-cta-note">iPhone対応・基本無料・登録不要</p>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        text?: string;
        sub?: string;
    }>(),
    {
        text: "学んだこと、忘れないうちにメモしませんか",
        sub: "MemoLie（メモリー）は、ゴルフの気づきをクラブ別・シチュエーション別に残せる専用メモアプリです。",
    },
);
</script>

<style scoped>
.blog-app-cta {
    margin: 48px 0 8px;
    padding: 36px 28px;
    background: #f5f7f0;
    border: 1px solid #e4e7eb;
    border-radius: 20px;
    text-align: center;
}
.blog-app-cta-text {
    font-size: 20px;
    font-weight: 900;
    color: #111111;
    margin-bottom: 8px;
    line-height: 1.5;
}
.blog-app-cta-sub {
    font-size: 14px;
    color: #555555;
    line-height: 1.8;
    margin-bottom: 20px;
}
.blog-app-cta-btn {
    display: inline-block;
    background: #111111;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    padding: 14px 30px;
    border-radius: 50px;
    transition:
        transform 0.2s,
        opacity 0.2s;
}
.blog-app-cta-btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}
.blog-app-cta-note {
    font-size: 12px;
    color: #9e9e9e;
    font-weight: 700;
    margin-top: 12px;
}
@media (max-width: 768px) {
    .blog-app-cta {
        padding: 28px 20px;
    }
    .blog-app-cta-text {
        font-size: 17px;
    }
}
</style>
