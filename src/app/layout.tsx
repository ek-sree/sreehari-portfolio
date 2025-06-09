import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sreehari E K | Full Stack Engineer | MERN Stack Developer |",
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
    "hire Sreehari"
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
