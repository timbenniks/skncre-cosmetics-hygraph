export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (!config.public.pfOn) {
    return
  }

  return {
    provide: {
      pf: {
        providerId: "hygraph",
        page_content_model_id: config.public.hygraphPageContentModelId,
        pdp_content_model_id: config.public.hygraphPdpContentModelId,
        page_content_view_id: config.public.hygraphPageContentViewId,
        pdp_content_view_id: config.public.hygraphPdpContentViewId,
      }
    }
  };

})