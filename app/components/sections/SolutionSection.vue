<template>
    <section class="solution-banner">
        <img
            class="memokun-center"
            src="/assets/memokun_fun.png"
            alt="メモくん"
            loading="lazy"
            data-aos="zoom-in"
        />
        <p class="section-label" data-aos="fade-up">Solution</p>
        <h2 class="section-title" data-aos="fade-up">
            気づきを、<br />次のスコアに変える
        </h2>
        <p class="section-body" data-aos="fade-up">
            自分だけのゴルフ攻略書をスマホの中に。MemoLie（メモリー）は「気づき」を蓄積して、スコアに変えるゴルフ専用メモアプリです。スコア管理より大切な「なぜ」と「どう直すか」を、クラブ別・シチュエーション別に残せます。
        </p>
        <div class="solution-cta" data-aos="fade-up">
            <a
                href="https://apps.apple.com/jp/app/memolie/id6760087461"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary"
                @click="trackClick"
            >
                <svg viewBox="0 0 24 24">
                    <path
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                </svg>
                App Store で無料ダウンロード
            </a>
            <span class="solution-note">iPhone対応 ・ 基本無料 ・ メモは登録不要</span>
        </div>
    </section>
</template>

<script setup lang="ts">
declare const gtag: (...args: unknown[]) => void;
function trackClick() {
    gtag("event", "click", { event_category: "cta", event_label: "solution_appstore" });
}
</script>

<style scoped>
.solution-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 32px;
}

.solution-note {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
}
</style>
