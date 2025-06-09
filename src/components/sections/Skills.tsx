"use client"

import { motion } from "framer-motion"
import BallCanvas from "../ui/ball-canvas"
import { technologies } from "@/constants/skills-technologies"

export default function TechStack() {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* 3D Ball Canvas Grid - Randomly Placed */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center space-y-2 group cursor-pointer"
                style={{
                  // Random positioning for organic feel
                  transform: `translate(${Math.sin(index * 2.5) * 15}px, ${Math.cos(index * 1.8) * 12}px)`,
                }}
              >
                {/* 3D Ball Canvas */}
                <div className="w-16 h-16 md:w-20 md:h-20">
                  <BallCanvas icon={tech.icon} />
                </div>

                {/* Tech Name */}
                <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
              applications. Each technology is an interactive 3D sphere you can rotate and explore.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
