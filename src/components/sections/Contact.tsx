"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Toaster } from "../ui/sonner"
import sendEmail from "@/actions/sendMail"
import { socialLinks } from "@/constants/social-icon"
import SectionHeading from "@/components/ui/section-heading"

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "eksreehari05@gmail.com", href: "mailto:eksreehari05@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9562605265", href: "tel:+919562605265" },
  { icon: MapPin, label: "Location", value: "Kerala, India", href: undefined },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ name: "", email: "", message: "" })

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newError = { name: "", email: "", message: "" }
    let hasError = false

    if (formData.name.trim().length < 3) {
      newError.name = "Name must be at least 3 characters long"
      hasError = true
    }
    if (!validateEmail(formData.email.trim())) {
      newError.email = "Please enter a valid email address."
      hasError = true
    }
    if (formData.message.trim().length < 8) {
      newError.message = "Message must be at least 8 characters long"
      hasError = true
    }
    if (hasError) {
      setError(newError)
      return
    }

    try {
      setError({ name: "", email: "", message: "" })
      setLoading(true)
      const result = await sendEmail(formData.name, formData.email, formData.message)

      if (result === "Message sent successfully") {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Failed to send. Please try again.")
      }
    } catch (err) {
      console.error("Error occurred while sending message", err)
      toast.error("Message not sent! Try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section">
      <Toaster position="top-center" expand={false} richColors />
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s work <span className="text-gradient">together</span>
            </>
          }
          subtitle="Have a question or a project in mind? Drop me a message — I'll get back to you soon."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass flex flex-col justify-between gap-8 rounded-2xl p-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I&apos;m always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, my inbox is open.
              </p>

              <div className="mt-7 space-y-3">
                {CONTACT_INFO.map((info) => {
                  const Wrapper = info.href ? "a" : "div"
                  return (
                    <Wrapper
                      key={info.label}
                      {...(info.href ? { href: info.href } : {})}
                      className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-3 transition-colors hover:border-primary/40"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <info.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">{info.label}</span>
                        <span className="text-sm font-medium">{info.value}</span>
                      </span>
                    </Wrapper>
                  )
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  disabled={loading}
                  aria-invalid={!!error.name}
                  className={error.name ? "border-destructive" : ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
                {error.name && <p className="text-sm text-destructive">{error.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  disabled={loading}
                  aria-invalid={!!error.email}
                  className={error.email ? "border-destructive" : ""}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
                {error.email && <p className="text-sm text-destructive">{error.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  disabled={loading}
                  aria-invalid={!!error.message}
                  className={error.message ? "border-destructive" : ""}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
                {error.message && <p className="text-sm text-destructive">{error.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full shadow-glow-sm"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
