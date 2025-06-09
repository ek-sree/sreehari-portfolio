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
import ThemeToggle from "@/components/ThemeToggle"
import ResumeButton from "@/components/ResumeButton"
import Preloader from "@/components/Preloader"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import Head from "next/head"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader")

    if (hasSeenPreloader) {
      setLoading(false)
    }
  }, [])

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true")
    setLoading(false)
  }

  if (!mounted) return null

  return (
    <>
      <Head>
        <link rel="canonical" href="https://sreehariek.com/" />
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
                "https://www.instagram.com/sree.hari.ek/"
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open to Work"
              },
              description: "MERN Stack Developer passionate about full stack applications.",
            }),
          }}
        />
      </Head>

      
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen bg-white dark:bg-black"
          >

            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.h1
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href="/">
                  {theme=="dark" ? (<Image src="/s-icon.png" width={40} height={40} alt="s"/>) : ("S")}
                  </Link>
                </motion.h1>
                <div className="flex items-center gap-4">
                  <ResumeButton />
                  <ThemeToggle />
                </div>
              </div>
            </motion.header>

            <main className="pt-20">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <FloatingContact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
