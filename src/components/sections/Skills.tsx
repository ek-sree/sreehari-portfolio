"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import { skillGroups, marqueeTech, type Tech } from "@/constants/skills-technologies"

function Pill({ tech }: { tech: Tech }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/40">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
      />
      {tech.name}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech stack"
          title={
            <>
              Tools I build <span className="text-gradient">with</span>
            </>
          }
          subtitle="A modern, battle-tested stack for shipping full stack web and mobile products end to end."
        />

        {/* Infinite marquee */}
        <div className="mask-fade-x relative mt-14 flex flex-col gap-4">
          <div className="pause-on-hover flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-3 pr-3 [--marquee-duration:38s]">
              {marqueeTech.map((t, i) => (
                <Pill key={`a-${i}`} tech={t} />
              ))}
            </div>
            <div
              className="flex shrink-0 animate-marquee gap-3 pr-3 [--marquee-duration:38s]"
              aria-hidden
            >
              {marqueeTech.map((t, i) => (
                <Pill key={`b-${i}`} tech={t} />
              ))}
            </div>
          </div>

          <div className="pause-on-hover flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee-reverse gap-3 pr-3 [--marquee-duration:46s]">
              {[...marqueeTech].reverse().map((t, i) => (
                <Pill key={`c-${i}`} tech={t} />
              ))}
            </div>
            <div
              className="flex shrink-0 animate-marquee-reverse gap-3 pr-3 [--marquee-duration:46s]"
              aria-hidden
            >
              {[...marqueeTech].reverse().map((t, i) => (
                <Pill key={`d-${i}`} tech={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Categorized grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/85"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
