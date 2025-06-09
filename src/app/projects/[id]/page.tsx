"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { projects } from "@/constants/project-data"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id

const project = projects.find((project)=>(project.id === Number(projectId)))
  

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4 py-8">

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {project?.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project?.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{project?.year}</span>
                </div>
              </div>

              <div className="flex gap-4">
                {project?.live&&(<Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <a href={project?.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>)}
                <Button variant="outline" asChild>
                  <a href={project?.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <Card className="p-4">
                <CardContent className="space-y-4">
                  <h3 className="font-semibold text-lg">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Image
            src={project?.images[0] || "/placeholder.svg"}
            alt={project?.title || "project image"}
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-8">

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{ project?.architecture}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project?.details}</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project?.images.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project?.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project Links</h3>
                  <div className="space-y-3">
                    {project?.live&&(<Button asChild className="w-full justify-start">
                      <a href={project?.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>)}
                    <Button variant="outline" asChild className="w-full justify-start">
                      <a href={project?.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
