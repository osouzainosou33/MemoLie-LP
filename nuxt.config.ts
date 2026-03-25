// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-03-25",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "MemoLie - ゴルフスイングメモアプリ",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                {
                    name: "description",
                    content:
                        "スイング中に、「あれ、どうやって打つんだっけ？」を経験したあなたへ。",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap",
                },
            ],
        },
    },
});
