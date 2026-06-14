import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sreehariek.com"),
  title: "Sreehari E K | Full Stack Engineer | MERN Stack Developer",
  description:
    "I'm Sreehari E K, a passionate MERN stack developer building scalable full stack applications with React, Node.js, and MongoDB.",
  keywords: [
    "Sreehari E K",
    "MERN stack developer",
    "full stack developer",
    "React developer",
    "MongoDB developer",
    "Express.js developer",
    "React Native developer",
    "TypeScript developer",
    "Next.js developer",
    "Node.js developer",
    "JavaScript developer",
    "developer portfolio",
    "hire Sreehari",
  ],
  authors: [{ name: "Sreehari E K" }],
  creator: "Sreehari E K",
  openGraph: {
    title: "Sreehari E K | MERN Stack Developer | Full Stack Engineer",
    description: "Portfolio of Sreehari E K, an experienced full stack MERN developer.",
    url: "https://sreehariek.com",
    siteName: "Sreehari E K Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0810" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
