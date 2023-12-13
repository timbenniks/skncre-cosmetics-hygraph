import { optimizeHygraphImage } from '../providers/hygraph'

export async function useOgtags(page: any) {
  const { $preview } = useNuxtApp();

  return useSeoMeta({
    title: `${$preview ? "⚡️ " : ""}SCNCRE ${page?.title}`,
    ogTitle: page?.title,
    description: page?.description,
    ogDescription: page?.description,
    ogImage: optimizeHygraphImage('https://media.graphassets.com', page?.ogImage.url, { width: 1280, height: 720, fit: "crop", format: "jpg" }),
    ogSiteName: "SCNCRE - Hygraph cosmetics demo",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterDescription: page?.description,
  });
}