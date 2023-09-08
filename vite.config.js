import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import robotsPlugin from './robotsPlugin'
import sitemapPlugin from './sitemapPlugin'

process.env = {
  ...process.env,
  VITE_BASE_URL: 'https://www.mycityco2.org'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    robotsPlugin(),
    sitemapPlugin(),
    VitePWA({
      registerType: 'prompt',
      devOptions: {
        enabled: true
      },
      workbox: {
        sourcemap: true
      },
      manifest: {
        name: 'MyCityCo2',
        short_name: 'MyCityCo2',
        description: 'MyCityCo2 web application',
        theme_color: '#47b9a3',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
