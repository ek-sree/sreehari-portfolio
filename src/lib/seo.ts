import { skillGroups } from "@/constants/skills-technologies"


export const siteConfig = {
  name: "Sreehari E K",
  jobTitle: "Full Stack Developer",
  title: "Sreehari E K — Full Stack Developer (MERN, Next.js, React Native)",
  description:
    "Sreehari E K is a Full Stack Developer from Kerala, India with 2+ years building scalable web, mobile and desktop apps using React, Next.js, Node.js, MongoDB, TypeScript and React Native. Open to remote and onsite opportunities worldwide.",
  url: "https://sreehari-portfolio-to4z.vercel.app",
  locale: "en_US",
  email: "eksreehari05@gmail.com",
  phone: "+919562605265",
  location: { city: "Kerala", region: "Kerala", country: "India", countryCode: "IN" },
  currentRole: "Solkuu — GrabLocal",
  socials: {
    github: "https://github.com/ek-sree",
    linkedin: "https://www.linkedin.com/in/sreehari-ek/",
    instagram: "https://www.instagram.com/sree.hari.ek/",
  },
} as const

/** Flat list of every technology, used for JSON-LD `knowsAbout`. */
export const allSkills: string[] = skillGroups.flatMap((g) =>
  g.items.map((i) => i.name)
)

export const sameAs: string[] = Object.values(siteConfig.socials)
