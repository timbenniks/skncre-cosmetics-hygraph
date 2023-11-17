// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image'],

  routeRules: {
    '/*': { isr: true },
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
  }
})