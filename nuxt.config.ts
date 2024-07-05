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
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },
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
        httpEndpoint:
          process.env.NUXT_API_URL ?? "http://localhost:8000/api/graphql",
        browserHttpEndpoint: "/api/graphql",
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },
  site: {
    url: process.env.NUXT_BASE_URL,
    name: "MyCityCO2",
    description:
      "A free and open-source tool for monitoring the carbon footprints of the 35,000 French cities, serving the fight against climate change.",
  },

  i18n: {
    baseUrl: process.env.NUXT_BASE_URL,
    lazy: true,
    langDir: "locales",
    defaultLocale: "fr-FR",
    locales: [
      {
        name: "FR",
        code: "fr-FR",
        file: "fr-FR.json",
        isCatchallLocale: true,
      },
      {
        name: "EN",
        code: "en-FR",
        file: "en-FR.json",
      },
      // {
      //   name: "FR",
      //   code: "fr-CH",
      //   file: "fr-CH.json",
      // },
      // {
      //   name: "EN",
      //   code: "en-CH",
      //   file: "en-CH.json",
      // },
      // {
      //   name: "DE",
      //   code: "de-CH",
      //   file: "de-CH.json",
      // },
      // {
      //   name: "IT",
      //   code: "it-CH",
      //   file: "it-CH.json",
      // },
    ],
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      Inter: "100..900",
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
