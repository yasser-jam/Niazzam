// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/styles/main.scss'
  ],

  modules: ['nuxt-icon-tw', '@nuxtjs/tailwindcss', 'daisy-ui-kit/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  daisy: {
    prefix: 'Da'
  }
})
