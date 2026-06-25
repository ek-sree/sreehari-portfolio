"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import { Code2, Rocket, MapPin, Puzzle, GraduationCap, Users } from "lucide-react"

const TRAITS = [
  { icon: Code2, label: "Clean code" },
  { icon: Users, label: "Team player" },
  { icon: GraduationCap, label: "Fast learner" },
  { icon: Puzzle, label: "Problem solver" },
]

const HIGHLIGHTS = [
  {
    icon: Rocket,
    title: "What I do",
    body: "From responsive frontends to scalable backends, I turn ideas into production-ready products with a user-first mindset.",
  },
  {
    icon: Code2,
    title: "How I work",
    body: "I care about clean architecture, maintainable code, and the small interaction details that make a product feel great.",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Developer who sweats the <span className="text-gradient">details</span>
            </>
          }
          subtitle="A Full Stack Developer with a love for intuitive interfaces and powerful digital experiences."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {/* Main intro card */}
          <motion.div
            variants={itemVariants}
            className="glass relative overflow-hidden rounded-2xl p-8 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Code2 className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Full Stack Developer</h3>
            </div>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a Full Stack Developer with a love for clean code, intuitive
                interfaces, and powerful digital experiences. Whether it&apos;s a dynamic web
                platform or a smooth mobile app, I bring ideas to life with modern tech.
              </p>
              <p>
                I enjoy solving real-world problems through code — and when I&apos;m not
                building, I&apos;m exploring new tech and sharpening my craft.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {TRAITS.map((trait) => (
                <span
                  key={trait.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium"
                >
                  <trait.icon className="h-3.5 w-3.5 text-primary" />
                  {trait.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            variants={itemVariants}
            className="glass relative flex flex-col justify-between overflow-hidden rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow"
            >
              <MapPin className="h-7 w-7" />
            </motion.div>
            <div className="mt-6">
              <h3 className="font-display text-lg font-bold">Based in Kerala, India</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Open to opportunities globally — remote or onsite, across time zones.
              </p>
            </div>
          </motion.div>

          {/* Two highlight cards */}
          {HIGHLIGHTS.map((h) => (
            <motion.div
              key={h.title}
              variants={itemVariants}
              className="glass group rounded-2xl p-7 transition-colors hover:border-primary/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </motion.div>
          ))}

          {/* CTA strip */}
          <motion.div
            variants={itemVariants}
            className="glass flex flex-col items-start justify-center rounded-2xl bg-primary/5 p-7"
          >
            <h3 className="font-display text-lg font-bold">Let&apos;s build something</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
