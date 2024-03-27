// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/apollo",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  i18n: {
    locales: ["fr", "en", "de", "it"],
    defaultLocale: "fr",
    vueI18n: "./i18n.config.ts",
  },
});
