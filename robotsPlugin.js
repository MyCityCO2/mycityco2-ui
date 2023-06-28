import robotstxt from "generate-robotstxt"
import { writeFile } from "node:fs"
import routes from "./src/routes"

const generateRobots = async () => {
  const content = await robotstxt({
    policy: [
      {
        userAgent: "*",
        allow: "/",
        disallow: routes
          .filter((route) => route.meta?.robots?.disallow)
          .map((route) => route.path + "/"),
      },
    ],
    sitemap: process.env.VITE_BASE_URL + "/sitemap.xml",
    host: process.env.VITE_BASE_URL,
  })

  writeFile("dist/robots.txt", content, (err) => {
    if (err) throw err
  })
}

export default () => {
  return {
    name: "ons-robots-generator",
    apply: "build",
    closeBundle: generateRobots,
  }
}
