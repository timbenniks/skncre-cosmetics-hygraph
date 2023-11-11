// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [700],
      Inter: [400],
    }
  }
})