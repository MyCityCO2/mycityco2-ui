import routes from '@/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        } else {
          resolve({ left: 0, top: 0, behavior: 'smooth' })
        }
      }, 300)
    })
  }
})

export default router
