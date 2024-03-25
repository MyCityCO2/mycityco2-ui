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
    locales: ["fr", "en"],
    defaultLocale: "fr",
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
