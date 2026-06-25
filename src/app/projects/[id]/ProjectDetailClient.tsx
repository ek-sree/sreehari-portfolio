"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProjectCover } from "@/components/ui/project-cover"
import type { Project } from "@/constants/project-data"

export default function ProjectDetailClient({ project }: { project: Project }) {
  // Toggle to show/hide the real screenshot gallery. When false, the layout
  // stays balanced (Key features fills the main column) — no empty space.
  const isPhotoVisible = false

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-medium text-foreground/80">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {project.year}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" /> View code
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="glass mt-12 overflow-hidden rounded-3xl p-2"
        >
          <div className="aspect-[2/1] w-full overflow-hidden rounded-2xl">
            <ProjectCover project={project} />
          </div>
        </motion.div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-3">
          {/* Main column */}
          <div className="space-y-10 lg:col-span-2">
            <section>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.details}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass flex gap-2.5 rounded-xl p-4 text-sm leading-relaxed text-foreground/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </section>

            {isPhotoVisible && project.images.length > 1 && (
              <section>
                <h2 className="font-display text-2xl font-bold">Screenshots</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.images.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="glass overflow-hidden rounded-2xl"
                    >
                      <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2.5">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      </div>
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={600}
                        height={360}
                        className="h-48 w-full object-cover object-top"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="glass rounded-2xl p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                <Layers className="h-4 w-4 text-primary" /> Tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.architecture && (
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold">Architecture</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.architecture.map((a) => (
                    <span
                      key={a}
                      className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold">Project links</h3>
              <div className="mt-4 space-y-2.5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Github className="h-4 w-4" /> Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
