/**
 * ブログ記事ページ用のSEO/OGP設定。
 *
 * nuxt.config.ts の og:title/og:description/og:url/twitter:* はトップページ固定値のため、
 * 何も上書きしないと全記事がSNSシェア時にトップページと同じカードで表示されてしまう。
 * このcomposableで記事ごとに正しく上書きする。
 */
export function useArticleSeo(options: {
    title: string; // <title>タグに使う完全な文字列（例:"○○ | MemoLie"）
    ogTitle: string; // OGP用の短いタイトル（サイト名なし）
    description: string;
    path: string; // 例: "/blog/golf-fore"
    image?: string; // 省略時はデフォルトのアプリアイコンを使用
}) {
    const { title, ogTitle, description, path, image } = options;
    const url = `https://memolie.app${path}`;
    const ogImage = image ?? "https://memolie.app/assets/icon.png";

    useHead({
        title,
        meta: [
            { name: "description", content: description },
            { property: "og:title", content: ogTitle },
            { property: "og:description", content: description },
            { property: "og:type", content: "article" },
            { property: "og:url", content: url },
            { property: "og:image", content: ogImage },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: ogTitle },
            { name: "twitter:description", content: description },
            { name: "twitter:image", content: ogImage },
        ],
        link: [{ rel: "canonical", href: url }],
    });
}
