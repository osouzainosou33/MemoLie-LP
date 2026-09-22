// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-03-25",
    devtools: { enabled: true },
    modules: ["@nuxt/image"],
    components: {
        dirs: [{ path: "~/components", pathPrefix: false }],
    },
    image: {
        quality: 80,
        format: ["webp"],
        provider: "ipx",
    },
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: { lang: "ja" },
            title: "ゴルフメモアプリ MemoLie（メモリー）| 練習ノート・スイング動画・飛距離を記録して上達",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                {
                    name: "description",
                    content:
                        "MemoLie（メモリー）は無料のゴルフメモアプリ。練習ノート感覚でスイングのコツ・クラブ別飛距離・ラウンドメモを記録。スイング動画のクラウド保存にも対応し、打ちっぱなしやシミュレーションゴルフの練習記録を一元管理。iPhone対応・登録不要で今すぐ使えます。",
                },
                {
                    name: "keywords",
                    content:
                        "ゴルフメモ アプリ,ゴルフメモアプリ,ゴルフ練習記録,ゴルフ練習ノート アプリ,ゴルフ ラウンドメモ アプリ,スイングメモ,スイング動画,クラブ飛距離管理,ゴルフノートアプリ,ゴルフ上達,打ちっぱなし記録,ゴルフ練習日記,iPhone ゴルフアプリ,無料ゴルフアプリ,ゴルフ練習記録アプリ",
                },
                // OGP
                {
                    property: "og:title",
                    content: "ゴルフメモアプリ MemoLie（メモリー）| 練習ノート・スイング動画・飛距離を記録",
                },
                {
                    property: "og:description",
                    content:
                        "無料のゴルフメモアプリ MemoLie。練習ノート感覚でスイングのコツ・飛距離・ラウンドメモを記録。スイング動画のクラウド保存対応。iPhone・登録不要で今すぐ使えます。",
                },
                { property: "og:type", content: "website" },
                { property: "og:locale", content: "ja_JP" },
                { property: "og:url", content: "https://memolie.app" },
                {
                    property: "og:image",
                    content: "https://memolie.app/assets/icon.png",
                },
                // Twitter Card
                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:title",
                    content: "ゴルフメモアプリ MemoLie（メモリー）| 練習ノート・スイング動画を記録",
                },
                {
                    name: "twitter:description",
                    content:
                        "無料のゴルフメモアプリ。スイングのコツ・飛距離・動画をクラウド保存。登録不要で今すぐ使えるiPhone対応アプリ。",
                },
                {
                    name: "twitter:image",
                    content: "https://memolie.app/assets/icon.png",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                {
                    rel: "preload",
                    as: "style",
                    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap",
                    onload: "this.onload=null;this.rel='stylesheet'",
                },
            ],
            noscript: [
                {
                    innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap">',
                },
            ],
            script: [
                // Google Analytics
                {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-264LWRKMP9",
                    async: true,
                },
                {
                    innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-264LWRKMP9');`,
                },
                {
                    type: "application/ld+json",
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "MemoLie（メモリー）",
                        alternateName: "ゴルフメモアプリ MemoLie",
                        operatingSystem: "iOS",
                        applicationCategory: "SportsApplication",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "JPY",
                            description: "ダウンロード無料。アプリ内課金でプレミアムプラン（動画無制限等）を提供。",
                        },
                        description:
                            "アマチュアゴルファーのための無料ゴルフメモアプリ。スイングのコツ・クラブ別飛距離・ラウンドメモの記録に加え、スイング動画のクラウド保存に対応。練習ノート感覚で使えるiPhoneアプリ。",
                        url: "https://memolie.app",
                        downloadUrl:
                            "https://apps.apple.com/jp/app/memolie/id6760087461",
                        screenshot: "https://memolie.app/assets/icon.png",
                        featureList: "スイングメモ, クラブ別飛距離記録, スイング動画クラウド保存, ラウンドメモ, シチュエーション別対策",
                    }),
                },
            ],
        },
    },
});
