export interface Tech {
  name: string
  color: string
}

export interface SkillGroup {
  category: string
  items: Tech[]
}

// Brand-ish accent colors used for the small dot on each pill
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#ffffff" },
      { name: "React Native", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express.js", color: "#ffffff" },
      { name: "REST APIs", color: "#c9821e" },
      { name: "gRPC", color: "#2DB7AE" },
      { name: "RabbitMQ", color: "#FF6600" },
      { name: "Socket.IO", color: "#ffffff" },
      { name: "WebRTC", color: "#333333" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", color: "#47A248" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Prisma", color: "#2D3748" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "AWS", color: "#FF9900" },
      { name: "Nginx", color: "#009639" },
      { name: "CI/CD", color: "#c9821e" },
    ],
  },
]

export const marqueeTech: Tech[] = skillGroups.flatMap((g) => g.items)
