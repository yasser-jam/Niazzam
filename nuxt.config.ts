// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/styles/main.scss"],

  modules: [
    "nuxt-icon-tw",
    "@nuxtjs/tailwindcss",
    "daisy-ui-kit/nuxt",
    "@nuxtjs/supabase",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  supabase: {
    redirect: false,
  },

  daisy: {
    prefix: "Da",
  },
});
