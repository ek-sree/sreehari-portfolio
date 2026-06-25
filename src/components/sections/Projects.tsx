"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import SectionHeading from "@/components/ui/section-heading"
import { ProjectCover } from "@/components/ui/project-cover"
import { projects } from "@/constants/project-data"

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  const project = projects[current]

  const go = useCallback(
    (next: number) => {
      setDirection(next > current || (current === projects.length - 1 && next === 0) ? 1 : -1)
      setCurrent((next + projects.length) % projects.length)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % projects.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [autoPlay, next])

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Projects I&apos;m <span className="text-gradient">proud of</span>
            </>
          }
          subtitle="A selection of products and experiments — full stack apps, real-time systems, and more."
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="glass relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="grid gap-0 lg:grid-cols-2"
              >
                {/* Generated cover */}
                <div className="relative aspect-[16/11] overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
                  <ProjectCover project={project} />
                  {project.featured && (
                    <div className="absolute right-4 top-4 z-20">
                      <Badge className="gap-1 bg-primary text-primary-foreground shadow-glow-sm">
                        <Star className="h-3 w-3 fill-current" /> Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 md:p-9">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-mono">{project.year}</span>
                    <span className="font-mono">
                      {String(current + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {project.description}. {project.details.slice(0, 120)}…
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/85"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    <Link
                      href={`/projects/${project.id}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:-translate-y-0.5"
                    >
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Github className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project?.live && (
                      <a
                        href={project?.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
