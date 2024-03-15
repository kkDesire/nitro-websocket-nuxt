// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  nitro: {
    experimental: {
      websocket: true
    }
  },

})