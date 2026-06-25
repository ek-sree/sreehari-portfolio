import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0c0a",
    theme_color: "#0d0c0a",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      { src: "/s-icon.png", sizes: "any", type: "image/png", purpose: "any" },
    ],
  }
}
