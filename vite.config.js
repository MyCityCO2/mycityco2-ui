import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import robotsPlugin from './robotsPlugin'
import sitemapPlugin from './sitemapPlugin'

process.env = {
  ...process.env,
  VITE_BASE_URL: 'https://www.mycityco2.org'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), robotsPlugin(), sitemapPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
