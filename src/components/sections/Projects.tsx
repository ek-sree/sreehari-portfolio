"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowRight, Pause, PlayIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { projects } from "@/constants/project-data"

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
    setIsAutoPlaying(false)
  }

  const currentProjectData = projects[currentProject]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover my latest work and creative solutions
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mx-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-sm font-medium">
                        {currentProjectData.category}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        {currentProjectData.year}
                      </Badge>
                      {currentProjectData.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {currentProject + 1} of {projects.length}
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {currentProjectData.title}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
                    {currentProjectData.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentProjectData.highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 text-center"
                      >
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{highlight}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentProjectData.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-500 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href={`/projects/${currentProjectData.id}`}>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    {currentProjectData.github &&(<Link href={currentProjectData.github}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Code
                    </Button>
                      </Link>)}

                    {currentProjectData.live &&(
                      <Link href={currentProjectData.live}>
                      <Button
                      variant="outline"
                      size="lg"
                      className="border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    </Link>)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="secondary"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {isAutoPlaying ? <Pause /> : <PlayIcon/>}
              {isAutoPlaying ? "Pause" : "Auto-play"}
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  )
}
