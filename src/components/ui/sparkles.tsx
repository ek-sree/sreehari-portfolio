"use client"

import type React from "react"
import { useId, useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore: React.FC<SparklesProps> = (props) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props
  const [init, setInit] = useState(false)
  const generatedId = useId()

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  if (init) {
    return (
      <Particles
        id={id || generatedId}
        className={className}
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: background || "transparent",
            },
          },
          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize:{
                enable:true,
              } 
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColor || "#ffffff",
            },
            links: {
              color: particleColor || "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: speed || 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 400,
                height: 400,
              },
              value: particleDensity || 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: minSize || 1, max: maxSize || 3 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  }

  return <></>
}
