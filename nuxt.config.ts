// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  nitro: {
    devProxy: {
      "/api/": {
        target: "http://localhost:8000/api/",
        changeOrigin: true,
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8000/api/graphql",
        browserHttpEndpoint: "/api/graphql",
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },
  site: {
    url: "https://mycityco2.org",
  },
  i18n: {
    baseUrl: "https://www.mycityco2.org",
    lazy: true,
    langDir: "locales",
    defaultLocale: "fr",
    locales: [
      {
        code: "fr",
        name: "FR",
        iso: "fr-FR",
        file: "fr-FR.json",
        isCatchallLocale: true,
      },
      {
        code: "en",
        name: "EN",
        iso: "en-FR",
        file: "en-FR.json",
      },
      {
        code: "fr",
        name: "FR",
        iso: "fr-CH",
        file: "fr-CH.json",
      },
      {
        code: "en",
        name: "EN",
        iso: "en-CH",
        file: "en-CH.json",
      },
      {
        code: "de",
        name: "DE",
        iso: "de-CH",
        file: "de-CH.json",
      },
      {
        code: "it",
        name: "IT",
        iso: "it-CH",
        file: "it-CH.json",
      },
    ],
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
  },
  colorMode: {
    classSuffix: "",
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
})
