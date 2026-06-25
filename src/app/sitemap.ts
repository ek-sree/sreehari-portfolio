import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"
import { projects } from "@/constants/project-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ]
}
