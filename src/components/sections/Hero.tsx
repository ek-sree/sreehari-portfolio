"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { ArrowDownRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { SparklesCore } from "@/components/ui/sparkles"

// 3D sphere is heavy + browser-only — load it lazily so it never blocks first paint
const HeroSphere = dynamic(() => import("@/components/ui/hero-sphere"), {
  ssr: false,
  loading: () => null,
})

const ROLES = ["Full Stack Developer", "MERN Specialist", "React Native Dev", "Problem Solver"]

const SOCIALS = [
  { icon: Github, href: "https://github.com/ek-sree?tab=repositories", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sreehari-ek/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:eksreehari05@gmail.com", label: "Email" },
]

const STATS = [
  { value: "2+", label: "Years experience" },
  { value: "7+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
]

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return isDesktop
}

export default function Hero() {
  const isDesktop = useIsDesktop()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2400)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Particles — desktop only, behind content */}
      {isDesktop && (
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <SparklesCore
            id="hero-particles"
            background="transparent"
            minSize={0.4}
            maxSize={1.1}
            particleDensity={45}
            speed={0.6}
            className="h-full w-full"
            particleColor="#a78bfa"
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Sreehari <span className="text-gradient">E K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 flex h-8 items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="relative inline-block overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-foreground"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build beautiful, fast, and scalable web &amp; mobile applications —
            from polished React frontends to robust Node.js backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Get in touch
            </button>

            <div className="ml-1 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-6 rounded-full bg-primary/20 blur-[80px]" />
          <div className="relative h-full w-full">
            <HeroSphere />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="text-xs">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-primary"
          />
        </span>
      </motion.div>
    </section>
  )
}
