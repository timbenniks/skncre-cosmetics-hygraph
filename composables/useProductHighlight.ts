type Props = {
  entityId: number
}

export async function useProductHighlight(properties: Props) {
  const { productById } = await GqlProductHighlight({ entityId: properties.entityId });

  return productById
}