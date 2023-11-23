import type { Stage } from "#gql/default";

type Props = {
  slug: string
}

export async function usePage(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" as Stage : "PUBLISHED" as Stage

  const { page } = await GqlPage({
    slug: properties.slug, stage
  });

  if (!page) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return page
}