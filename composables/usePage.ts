type Props = {
  slug: string
}

export async function usePage(properties: Props) {
  const { page } = await GqlPage({ slug: properties.slug });

  return page
}