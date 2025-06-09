"use client"

import { Timeline } from "@/components/ui/timeline"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { experienceData } from "@/constants/experience-data"

const formatExperience = experienceData.map((item) => ({
  title: item.title,
  content: (
    <div>
      <div className="mb-8 flex flex-col space-y-4">
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{item.position}</h3>
        <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">{item.company}</div>
        <div className="flex flex-col sm:flex-row gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {item.date}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {item.location}
          </div>
        </div>
      </div>

      <div className="mb-6">
        {item.points.map((point, i) => (
          <p key={i} className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-2">
            • {point}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  ),
}))

export default function Experience() {
  return <Timeline data={formatExperience} />
}
