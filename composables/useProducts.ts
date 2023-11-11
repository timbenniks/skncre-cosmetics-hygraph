import type {
  ProductsQueryVariables,
} from "#gql";

export async function useProducts(properties: ProductsQueryVariables) {
  const { data: products } = await useAsyncData(
    `products-${properties.first}`,
    () => GqlProducts(<ProductsQueryVariables>properties),
    {
      transform: (result) => {
        if (result) {
          return result.products?.map((product) => {
            return product.node;
          });
        }
      },
    }
  );

  return products
}
