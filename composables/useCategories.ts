type Props = {
  first?: number
}

export async function useCategories(properties: Props) {
  const { categories } = await GqlCategories();


  // const { data: categories } = await useAsyncData(
  //   `categories-${properties.first || ''}`,
  //   () => GqlProducts(),
  //   {
  //     transform: (result) => {
  //       if (result) {
  //         return result.products?.map((product) => {
  //           return product.node;
  //         });
  //       }
  //     },
  //   }
  // );

  return categories
}