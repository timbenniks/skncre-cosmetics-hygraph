// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
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
    providers: {
      hygraph: {
        name: 'hygraph',
        provider: '~/providers/hygraph.ts',
        options: {
          baseurl: "https://media.graphassets.com"
        }
      }
    }
  }
})