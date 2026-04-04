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
            title: "ゴルフ練習メモアプリ MemoLie（メモリー）| スイング・飛距離・コツを記録して上達",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                {
                    name: "description",
                    content:
                        "MemoLie（メモリー）はアマチュアゴルファーのためのゴルフ練習メモアプリ。スイングのコツ・クラブ別飛距離・シチュエーション別対策を記録し、スイング動画のクラウド保存にも対応。メモは登録不要で基本無料。プレミアムで動画無制限。iPhone対応。",
                },
                {
                    name: "keywords",
                    content:
                        "ゴルフメモアプリ,ゴルフ練習記録,スイングメモ,スイング動画,クラブ飛距離管理,ゴルフノートアプリ,ゴルフ上達,打ちっぱなし記録,ゴルフ練習日記,iPhone ゴルフアプリ,無料ゴルフアプリ,ゴルフサブスク",
                },
                // OGP
                {
                    property: "og:title",
                    content: "ゴルフ練習メモアプリ MemoLie（メモリー）| スイング・飛距離・コツを記録して上達",
                },
                {
                    property: "og:description",
                    content:
                        "MemoLie（メモリー）はアマチュアゴルファーのためのゴルフ練習メモアプリ。スイングメモ・飛距離・動画のクラウド保存。メモは登録不要で基本無料、プレミアムで動画無制限。",
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
                    content: "ゴルフ練習メモアプリ MemoLie（メモリー）",
                },
                {
                    name: "twitter:description",
                    content:
                        "スイングメモ・飛距離・動画のクラウド保存。メモは登録不要で基本無料。プレミアムで動画無制限のiPhoneゴルフアプリ。",
                },
                {
                    name: "twitter:image",
                    content: "https://memolie.app/assets/icon.png",
                },
            ],
            link: [
                { rel: "canonical", href: "https://memolie.app" },
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
                        operatingSystem: "iOS",
                        applicationCategory: "SportsApplication",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                            priceCurrency: "JPY",
                            description: "ダウンロード無料。アプリ内課金でプレミアムプラン（動画無制限等）を提供。",
                        },
                        description:
                            "アマチュアゴルファーのためのゴルフ練習メモアプリ。スイングのコツ・クラブ別飛距離・シチュエーション別対策の記録に加え、スイング動画のクラウド保存に対応。",
                        url: "https://memolie.app",
                        downloadUrl:
                            "https://apps.apple.com/jp/app/memolie/id6760087461",
                    }),
                },
            ],
        },
    },
});
