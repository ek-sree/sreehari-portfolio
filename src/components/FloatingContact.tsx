"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { contactOptions } from "@/constants/contact-options"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            className="mb-3 flex flex-col items-start gap-2"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2.5 rounded-full border border-border bg-background/90 px-4 py-2.5 text-sm font-medium shadow-soft backdrop-blur-xl transition-colors hover:border-primary/40 hover:text-primary"
              >
                <option.icon className="h-4 w-4 text-primary" />
                {option.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
