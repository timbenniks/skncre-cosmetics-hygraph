type Props = {
  slug: string
}

export async function useProductPage(properties: Props) {
  const { pdp } = await GqlProductPage({ slug: properties.slug });

  return pdp
}