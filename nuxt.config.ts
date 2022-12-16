// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],

  tailwindcss: {
    cssPath: `~/assets/css/tailwind.css`,
    configPath: `tailwind.config.js`,
    viewer: true,
  },

  content: {},
});
