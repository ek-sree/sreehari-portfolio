"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 3
      })
    }, 42)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Top + bottom hairline frame — editorial print feel */}
      <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto flex max-w-md items-center justify-between px-6 text-muted-foreground md:max-w-2xl">
        <span className="label-caps">Sreehari E K</span>
        <span className="label-caps">Portfolio · &apos;26</span>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Monogram */}
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card font-display text-2xl font-semibold text-primary"
        >
          S
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="mt-6 text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Sreehari <span className="italic text-primary">E K</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 label-caps"
        >
          Full Stack Developer
        </motion.p>

        {/* Progress */}
        <div className="mt-10 flex w-60 flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <span className="label-caps">Loading</span>
            <span className="font-mono text-sm tabular-nums text-foreground">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
          <div className="h-px w-full bg-border">
            <motion.div
              className="h-px bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
