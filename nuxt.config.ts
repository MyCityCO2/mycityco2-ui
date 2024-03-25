// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    // Tailwind & co
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",

    // Pinia
    '@pinia/nuxt',

    // Forms
    '@vee-validate/nuxt',
  ]
})
