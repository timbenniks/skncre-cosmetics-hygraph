type Props = {
  entityId: number
}

export async function useProduct(properties: Props) {
  const { productById } = await GqlProduct({ entityId: Number(properties.entityId) });

  return productById
}