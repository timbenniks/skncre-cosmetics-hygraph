import OH from "@perfectiondev/oversite-helpers";

export async function usePfHelpers() {
  const { $preview } = useNuxtApp();
  const config = useRuntimeConfig();

  class oversiteHelpers {
    static instances = new Map();

    static init = async (pageId: string) => {
      const helpers = oversiteHelpers.instances.get(pageId);

      if (helpers) await helpers.usePage(pageId);
      else {
        const result = await OH.init({
          apiKey: config.public.pfAPI,
          subscriptionId: config.public.pfSubscription,
          siteName: config.public.pfSite,
          // @ts-ignore
          pageId,
          preview: !!$preview,
        });
        await result.usePage(pageId);
        oversiteHelpers.instances.set(pageId, result);
      }
    };
    static section = { parts: (partsFn: any, sectionId: any) => (typeof partsFn === "function" ? partsFn(sectionId) : (selector: any, defaultClasses: any) => defaultClasses) };
  }

  return oversiteHelpers;
}