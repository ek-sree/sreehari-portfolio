"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { socialLinks } from "@/constants/social-icon"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="font-display text-lg font-bold">
              Sreehari<span className="text-primary">.</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Full Stack Developer — building thoughtful web &amp; mobile products.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} Sreehari E K. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-primary/40 hover:text-foreground"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
