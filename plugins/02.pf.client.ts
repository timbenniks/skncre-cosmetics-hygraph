import oversite from "@perfectiondev/oversite";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { $preview } = nuxtApp;

  if (!config.public.pfOn) {
    return
  }

  if (!$preview) {
    return
  }

  oversite.initialize({
    apiKey: config.public.pfAPI,
    subscription: config.public.pfSubscription,
    site: config.public.pfSite,
  });
});