"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import FloatingContact from "@/components/FloatingContact"
import ChatBot from "@/components/ChatBot"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    if (sessionStorage.getItem("hasSeenPreloader")) setLoading(false)
  }, [])

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true")
    setLoading(false)
  }

  if (!mounted) return null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sreehari E K",
            url: "https://sreehariek.com",
            sameAs: [
              "https://github.com/ek-sree?tab=repositories",
              "https://www.linkedin.com/in/sreehari-ek/",
              "https://www.instagram.com/sree.hari.ek/",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: { "@type": "Organization", name: "Freelance / Open to Work" },
            description: "MERN Stack Developer passionate about full stack applications.",
          }),
        }}
      />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-screen overflow-x-clip bg-background text-foreground"
          >
            {/* Ambient background glows */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] dark:bg-primary/15" />
              <div className="absolute bottom-0 right-[-10%] h-[420px] w-[520px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
            </div>

            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer />
            <FloatingContact />
            <ChatBot />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
