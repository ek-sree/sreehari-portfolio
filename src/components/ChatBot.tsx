"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, BotMessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

// Small monogram used as the assistant's avatar — more personal than a generic bot icon
function AssistantAvatar({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-lg bg-primary/12 font-display font-semibold text-primary ${className}`}
    >
      S
    </span>
  )
}

const SUGGESTIONS = [
  "Who is Sreehari?",
  "What are his main skills?",
  "Does he know React Native?",
  "Tell me about his experience",
  "How can I reach him?",
]

type Msg = { role: "user" | "assistant"; content: string }

const CONTACT_PATTERN =
  /(\bhttps?:\/\/[^\s)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[\d\s\-().]{7,}(?=\s|$|[^a-zA-Z]))/g

// Detect if a phone number in this text is preceded by a WhatsApp label
function isWhatsApp(text: string, matchIndex: number): boolean {
  const before = text.slice(Math.max(0, matchIndex - 30), matchIndex).toLowerCase()
  return before.includes("whatsapp")
}

function renderMessageContent(text: string) {
  const parts: React.ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null

  CONTACT_PATTERN.lastIndex = 0
  while ((match = CONTACT_PATTERN.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))

    const [full, url, email, phone] = match
    if (url) {
      parts.push(
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80 break-all">
          {url}
        </a>
      )
    } else if (email) {
      parts.push(
        <a key={match.index} href={`https://mail.google.com/mail/?view=cm&to=${email}`} target="_blank" rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80">
          {email}
        </a>
      )
    } else if (phone) {
      const digits = phone.replace(/\D/g, "")
      if (digits.length >= 7) {
        const wa = isWhatsApp(text, match.index)
        const href = wa
          ? `https://wa.me/${digits}`
          : `tel:${phone.trim()}`
        parts.push(
          <a key={match.index} href={href} target={wa ? "_blank" : undefined} rel={wa ? "noopener noreferrer" : undefined}
            className="text-primary underline underline-offset-2 hover:opacity-80">
            {phone}
          </a>
        )
      } else {
        parts.push(full)
      }
    }
    last = match.index + full.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250)
  }, [open])

  // Allow other components (e.g. the hero card) to open the assistant
  useEffect(() => {
    const openHandler = () => setOpen(true)
    window.addEventListener("open-assistant", openHandler)
    return () => window.removeEventListener("open-assistant", openHandler)
  }, [])

  const send = async (text: string) => {
    const q = text.trim()
    if (!q || loading) return

    const next: Msg[] = [...messages, { role: "user", content: q }]
    setMessages(next)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply || "Sorry, I couldn't respond." },
      ])
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Launcher — one pill button so the whole "Ask AI" area is a single click target */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Ask the AI assistant"}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow",
          open ? "w-14" : "gap-2.5 pl-4 pr-5"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-2.5"
            >
              <span className="relative flex">
                <BotMessageSquare className="h-[1.4rem] w-[1.4rem]" />
                {/* live "online" pulse */}
                <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-80" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-primary bg-emerald-400" />
                </span>
              </span>
              <span className="text-sm font-semibold">Ask AI</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 flex h-[32rem] max-h-[calc(100svh-7rem)] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-soft backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary/30 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-base font-semibold text-primary-foreground">
                S
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">Ask about Sreehari</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  AI assistant · online
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {/* Greeting */}
              <div className="flex gap-2.5">
                <AssistantAvatar className="mt-0.5 h-7 w-7 text-xs" />
                <div className="rounded-2xl rounded-tl-sm bg-secondary/60 px-3.5 py-2.5 text-sm leading-relaxed">
                  Hi there — I&apos;m Sreehari&apos;s assistant. Ask me about his skills,
                  experience, projects, or how to get in touch.
                </div>
              </div>

              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex gap-2.5">
                    <AssistantAvatar className="mt-0.5 h-7 w-7 text-xs" />
                    <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm bg-secondary/60 px-3.5 py-2.5 text-sm leading-relaxed">
                      {renderMessageContent(m.content)}
                    </div>
                  </div>
                )
              )}

              {loading && (
                <div className="flex gap-2.5">
                  <AssistantAvatar className="mt-0.5 h-7 w-7 text-xs" />
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-secondary/60 px-4 py-3.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions (only before first question) */}
              {messages.length === 0 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-border bg-secondary/20 p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Type your question"
                className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
