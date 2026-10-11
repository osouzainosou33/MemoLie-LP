// GA4 measurement for LP comparison.
// - page_view on every client-side navigation (gtag only sends the first one by itself)
// - app_store_click on any App Store link, tagged with the LP variant and CTA position
//   (pages set `definePageMeta({ lpVariant: "a" })`, links set `data-cta="hero"`).
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export default defineNuxtPlugin(() => {
    const router = useRouter();
    const variant = () => String(router.currentRoute.value.meta.lpVariant ?? "none");
    const send = (event: string, params: Record<string, unknown>) => window.gtag?.("event", event, params);

    let first = true;
    router.afterEach((to) => {
        if (first) {
            first = false;
            return;
        }
        nextTick(() =>
            send("page_view", {
                page_path: to.fullPath,
                page_location: window.location.href,
                page_title: document.title,
                lp_variant: variant(),
            }),
        );
    });

    document.addEventListener(
        "click",
        (e) => {
            const link = (e.target as Element | null)?.closest?.("a[href*='apps.apple.com']");
            if (!link) return;
            send("app_store_click", {
                lp_variant: variant(),
                cta_position: link.getAttribute("data-cta") ?? "other",
                page_path: router.currentRoute.value.path,
                transport_type: "beacon",
            });
        },
        { capture: true },
    );
});
