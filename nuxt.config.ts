// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image'],

  routeRules: {
    '/': { isr: true },
    '/pdp/*': { isr: true },
  },

  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [700],
      Inter: [400],
    }
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dwfcofnrd/image/upload/'
    }
  },

  runtimeConfig: {
    public: {
      hygraphProjectId: process.env.NUXT_HYGRAPH_PROJECT_ID,
      hygraphEnvironment: process.env.NUXT_HYGRAPH_ENV,
      hygraphPageContentModelId: process.env.NUXT_HYGRAPH_PAGE_CONTENT_MODEL_ID,
      hygraphPageContentViewId: process.env.NUXT_HYGRAPH_PAGE_CONTENT_VIEW_ID,
      hygraphPdpContentModelId: process.env.NUXT_HYGRAPH_PDP_CONTENT_MODEL_ID,
      hygraphPdpContentViewId: process.env.NUXT_HYGRAPH_PDP_CONTENT_VIEW_ID,
      pfAPI: process.env.PF_API,
      pfSubscription: process.env.PF_SUBSCRIPTION,
      pfSite: process.env.PF_SITE,
    }
  },
})