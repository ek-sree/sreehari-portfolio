"use client"

import { Timeline } from "@/components/ui/timeline"
import { Calendar, MapPin } from "lucide-react"
import { experienceData } from "@/constants/experience-data"

const formatExperience = experienceData.map((item) => ({
  title: item.title,
  content: (
    <div>
      <h3 className="font-display text-xl font-bold">{item.position}</h3>
      <div className="mt-1 font-medium text-primary">{item.company}</div>

      <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-5">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {item.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {item.location}
        </span>
      </div>

      <ul className="mt-5 space-y-2.5">
        {item.points.map((point, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/85"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  ),
}))

export default function Experience() {
  return <Timeline data={formatExperience} />
}
