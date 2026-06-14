"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { Suspense } from "react"

function AnimatedSphere() {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.6}>
      <Sphere visible args={[1, 48, 48]} scale={1.7}>
        <MeshDistortMaterial
          color="#7c5cff"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.2}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  )
}

/**
 * Single, optimized WebGL canvas for the hero.
 * - capped dpr, antialias off, low-power friendly geometry
 * - autoRotate via OrbitControls instead of constant re-renders elsewhere
 */
export default function HeroSphere() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />
      <directionalLight position={[-3, -2, -1]} intensity={0.4} color="#d946ef" />
      <Suspense fallback={null}>
        <AnimatedSphere />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        rotateSpeed={0.5}
      />
    </Canvas>
  )
}
