import { writeFile } from 'node:fs'
import builder from 'xmlbuilder'
import routes from './src/routes'

const generateSitemap = async () => {
  const root = {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      '@xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
      '@xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
      '@xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
      '@xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
    }
  }
  const urlset = builder.create(root)
  const strRoutes = routes
    .filter((route) => !route.meta?.sitemap?.hide && !route.meta?.sitemap?.dynamic)
    .map((route) => route.path)
  const date = new Date().toISOString()
  for (let route of strRoutes) {
    const url = urlset.ele('url')
    url.ele('loc', process.env.VITE_BASE_URL + route)
    url.ele('lastmod', date)
    url.ele('changefreq', 'daily')
    url.ele('priority', '1.0')
  }
  const xml = urlset.end()

  writeFile('dist/sitemap.xml', xml, (err) => {
    if (err) throw err
  })
}

export default () => {
  return {
    name: 'ons-sitemap-generator',
    apply: 'build',
    closeBundle: generateSitemap
  }
}
