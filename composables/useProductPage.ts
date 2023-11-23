import type { Stage } from "#gql/default";

type Props = {
  slug: string
}

export async function useProductPage(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" as Stage : "PUBLISHED" as Stage

  const { pdp } = await GqlProductPage({
    slug: properties.slug, stage
  })

  return pdp
}