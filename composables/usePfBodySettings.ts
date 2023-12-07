export async function usePfBodySettings(pageId: string, type: 'page' | 'pdp', entryId: number | string) {
  const config = useRuntimeConfig();
  const pfSettings = {
    pageId: pageId,
    providerId: "hygraph",
    content_model_id: type === 'page' ? config.public.hygraphPageContentModelId : config.public.hygraphPdpContentModelId,
    content_view_id: type === 'page' ? config.public.hygraphPageContentViewId : config.public.hygraphPdpContentViewId,
    entry_id: entryId,
  };

  useHead({
    bodyAttrs: {
      "data-pf": JSON.stringify(pfSettings),
    },
  });
}