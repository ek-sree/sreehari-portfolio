"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import SectionHeading from "@/components/ui/section-heading"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section id="experience" className="section" ref={containerRef}>
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              My professional <span className="text-gradient">journey</span>
            </>
          }
          subtitle="Roles, milestones, and the things I've shipped along the way."
        />

        <div ref={ref} className="relative mx-auto mt-14 max-w-4xl pb-10">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pl-12 md:gap-8 md:pl-0">
              {/* Year rail (desktop) */}
              <div className="sticky top-28 z-30 hidden h-fit w-40 shrink-0 items-center self-start md:flex md:justify-end">
                <span className="font-display text-4xl font-bold text-muted-foreground/40">
                  {item.title}
                </span>
              </div>

              {/* Dot */}
              <div className="absolute left-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background md:left-[10.5rem]">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow-sm" />
              </div>

              <div className="w-full pb-16 md:pl-8">
                <span className="mb-4 inline-block font-display text-2xl font-bold text-muted-foreground/50 md:hidden">
                  {item.title}
                </span>
                <div className="glass rounded-2xl p-6 md:p-7">{item.content}</div>
              </div>
            </div>
          ))}

          {/* Animated progress line */}
          <div
            style={{ height: height + "px" }}
            className="absolute left-[1.55rem] top-0 w-[2px] overflow-hidden bg-border/60 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] md:left-[11.3rem]"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-brand-500 via-brand-400 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
