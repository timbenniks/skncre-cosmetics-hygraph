export async function useOgtags(page: any) {
  const { $preview } = useNuxtApp();

  return useSeoMeta({
    title: `${$preview ? "⚡️ " : ""} SCNCRE ${page?.title}`,
    ogTitle: page?.title,
    description: page?.description,
    ogDescription: page?.description,
    ogImage: page?.image.secure_url ? page?.image.secure_url.replace(
      `v${page?.image.version}`,
      "q_auto,f_auto,w_1280"
    ) : "",
    ogSiteName: "SCNCRE - Hygraph cosmetics demo",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterDescription: page?.description,
  });
}