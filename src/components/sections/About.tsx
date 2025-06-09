"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Code, Heart, Lightbulb } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >

          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Full Stack Developer</h3>
                  </div>

                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      I&apos;m a Full Stack Developer with a love for clean code, intuitive interfaces, and powerful digital
                      experiences. Whether it&apos;s a dynamic web platform or a smooth mobile app, I bring ideas to life
                      with modern tech and a user-first mindset.
                    </p>
                    <p>
                      From crafting responsive frontends to building scalable backends, I enjoy solving real-world
                      problems through code.
                    </p>
                    <p>
                      When I&apos;m not coding, I&apos;m usually exploring the latest tech trends, improving my skills, or working
                      on side projects that challenge my creativity.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      Problem Solver
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      Team Player
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    >
                      Continuous Learner
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                    >
                      Quick Learner
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center">
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border-0 shadow-xl p-8">
                <div className="text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
                  >
                    <Code className="w-16 h-16 text-white" />
                  </motion.div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Crafting Digital Solutions</p>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={cardVariants}>
              <Card className="h-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">My Passion for Coding</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s
                    my passion. I enjoy exploring new technologies, and enhancing my skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">Why I Love Coding</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I enjoy figuring out problems and creating things with code. Coding isn&apos;t just my job—it&apos;s something
                    I really like doing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 dark:from-green-500/20 dark:via-blue-500/20 dark:to-purple-500/20 backdrop-blur-xl border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        Based in Kerala, India
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">Open to opportunities globally — remote or onsite</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-gray-800 dark:text-white">Flexible Schedule</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Adaptable to different time zones</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
