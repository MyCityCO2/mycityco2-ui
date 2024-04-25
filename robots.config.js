export default [
  { UserAgent: "*" },
  { BlankLine: true },
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },
]
