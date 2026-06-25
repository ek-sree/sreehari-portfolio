"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

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

const SPECS = [
  { label: "Role", value: "Full Stack Engineer" },
  { label: "Based in", value: "Kerala, India" },
  { label: "Focus", value: "Web · Mobile · APIs" },
  { label: "Stack", value: "MERN · Next · RN" },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const openAssistant = () => window.dispatchEvent(new Event("open-assistant"))

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.25fr_0.75fr]">
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
            className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Hi, I&apos;m Sreehari{" "}
            <span className="italic text-primary">E K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 flex h-8 items-center gap-3 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            <span className="h-px w-8 bg-primary" aria-hidden />
            <span className="relative inline-block overflow-hidden">
              <AnimatePresence mode="wait">
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
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build beautiful, fast, and scalable web &amp; mobile applications —
            from polished React frontends to robust Node.js backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:-translate-y-0.5"
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
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-7"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 label-caps">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — editorial spec card (replaces the 3D sphere) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-7 shadow-soft backdrop-blur-sm">
            <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary font-display text-2xl font-semibold text-primary-foreground">
                  S
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1 label-caps">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </span>
              </div>

              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                Sreehari E K
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Designing &amp; shipping end-to-end products.
              </p>

              <dl className="mt-6 divide-y divide-border border-t border-border">
                {SPECS.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between py-3">
                    <dt className="label-caps">{spec.label}</dt>
                    <dd className="text-sm font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <button
                onClick={openAssistant}
                aria-label="Open the AI assistant to learn more"
                className="group mt-6 flex w-full items-center justify-between rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Know more — ask the AI
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
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
        <span className="label-caps">Scroll</span>
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
