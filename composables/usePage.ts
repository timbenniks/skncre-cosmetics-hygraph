import type { Stage } from "#gql/default";

type Props = {
  slug: string,
  type: 'pdp' | 'page'
}

export async function usePage(properties: Props) {
  const { $preview } = useNuxtApp();
  const stage = $preview ? "DRAFT" as Stage : "PUBLISHED" as Stage

  let result: any;

  if (properties.type === 'page') {
    const { page } = await GqlPage({
      slug: properties.slug, stage
    });

    result = page;
  }

  if (properties.type === 'pdp') {
    const { pdp } = await GqlPdp({
      slug: properties.slug, stage
    });

    result = pdp;
  }


  if (!result) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  }

  return result
}