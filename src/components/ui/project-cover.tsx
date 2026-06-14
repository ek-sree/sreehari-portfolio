"use client"

import { cn } from "@/lib/utils"

// Per-project accent pairs — distinct but cohesive with the violet system
const THEMES: [string, string][] = [
  ["#7c5cff", "#d946ef"],
  ["#6366f1", "#22d3ee"],
  ["#8b5cf6", "#ec4899"],
  ["#3b82f6", "#8b5cf6"],
  ["#a855f7", "#6366f1"],
  ["#0ea5e9", "#7c5cff"],
  ["#fb7185", "#8b5cf6"],
]

interface CoverProject {
  id: number
  title: string
  category: string
  year: string
  live?: string
  github?: string
}

export function ProjectCover({
  project,
  className,
}: {
  project: CoverProject
  className?: string
}) {
  const [from, to] = THEMES[(project.id - 1) % THEMES.length]
  const initial = project.title.trim().charAt(0).toUpperCase()
  const host =
    (project.live || project.github || "")
      .replace(/^https?:\/\//, "")
      .replace(/[/?].*$/, "") || "preview.app"

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden bg-[#0b0a12]", className)}
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(110% 110% at 12% 0%, ${from}59, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${to}4d, transparent 55%)`,
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-30" />

      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-2 max-w-[60%] truncate rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">
          {host}
        </span>
      </div>

      {/* Watermark monogram */}
      <div
        className="pointer-events-none absolute -right-4 bottom-[-3rem] select-none font-display text-[13rem] font-bold leading-none opacity-[0.07]"
        style={{ color: "#fff" }}
      >
        {initial}
      </div>

      {/* Center brand mark */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <div
          className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/20 bg-white/10 font-display text-3xl font-bold text-white shadow-2xl backdrop-blur-md"
          style={{ boxShadow: `0 12px 40px -8px ${from}80` }}
        >
          {initial}
        </div>
        <div>
          <div className="font-display text-lg font-semibold text-white">
            {project.title}
          </div>
          <div className="mt-0.5 text-xs font-medium text-white/60">
            {project.category} · {project.year}
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute -bottom-12 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: `${to}40` }}
      />
    </div>
  )
}
