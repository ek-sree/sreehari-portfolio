import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/constants/project-data"
import { siteConfig } from "@/lib/seo"
import ProjectDetailClient from "./ProjectDetailClient"

type Params = Promise<{ id: string }>

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return { title: "Project not found" }
  }

  const title = `${project.title} — ${project.category} Project`
  const description = `${project.description}. Built by ${siteConfig.name} using ${project.technologies
    .slice(0, 6)
    .join(", ")}.`
  const path = `/projects/${project.id}`

  return {
    title,
    description,
    keywords: [project.title, ...project.technologies, `${siteConfig.name} projects`],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      siteName: `${siteConfig.name} — Portfolio`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number(id))

  if (!project) notFound()

  const path = `${siteConfig.url}/projects/${project.id}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "@id": `${path}#project`,
        name: project.title,
        description: project.description,
        url: path,
        codeRepository: project.github,
        dateCreated: String(project.year),
        keywords: project.technologies.join(", "),
        programmingLanguage: project.technologies,
        author: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: path,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  )
}
