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
          setTimeout(onComplete, 450)
          return 100
        }
        return prev + 3
      })
    }, 45)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex h-20 w-20 items-center justify-center"
        >
          <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/40" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground shadow-glow">
            S
          </span>
        </motion.div>

        <div className="text-center">
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Sreehari E K
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Crafting digital experiences
          </p>
        </div>

        <div className="flex w-56 flex-col gap-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-fuchsia-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Loading</span>
            <span className="font-mono">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
