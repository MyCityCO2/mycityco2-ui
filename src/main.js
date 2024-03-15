import { createGtm } from '@gtm-support/vue-gtm'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import { createApp, h, provide } from 'vue'
import { apolloClient } from './apollo'
import './assets/main.css'
import { number } from './directives'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import fr from './locales/FR/fr.json'

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
  .use(createPinia())
  .use(
    createI18n({
      legacy: false,
      locale: 'fr',
      messages: {
        fr
      }
    })
  )
  .use(router)
  .use(
    createGtm({
      id: import.meta.env.VITE_GTM,
      defer: true,
      compatibility: false,
      debug: true,
      enabled: import.meta.env.PROD ? true : false,
      vueRouter: router
    })
  )
  .directive('number', number)
  .mount('#app')
