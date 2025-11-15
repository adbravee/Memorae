'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

function Neuron({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      const scale = hovered ? 1.5 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.3, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 1 : 0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  )
}

function Connection({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={1}
      opacity={0.3}
    />
  )
}

function NeuronNetworkScene() {
  const neurons: Array<{ position: [number, number, number]; color: string }> = []
  const colors = ['#00ffff', '#8b5cf6', '#ff00ff', '#3b82f6']

  // Generate neuron positions in a network pattern
  for (let i = 0; i < 30; i++) {
    const angle = (i / 30) * Math.PI * 2
    const radius = 3 + Math.random() * 2
    const height = (Math.random() - 0.5) * 4
    neurons.push({
      position: [
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius,
      ],
      color: colors[Math.floor(Math.random() * colors.length)],
    })
  }

  // Add center neuron
  neurons.push({ position: [0, 0, 0], color: '#00ffff' })

  const connections: Array<{ start: [number, number, number]; end: [number, number, number]; color: string }> = []
  
  // Create connections between nearby neurons
  neurons.forEach((neuron, i) => {
    neurons.slice(i + 1).forEach((other) => {
      const distance = Math.sqrt(
        Math.pow(neuron.position[0] - other.position[0], 2) +
        Math.pow(neuron.position[1] - other.position[1], 2) +
        Math.pow(neuron.position[2] - other.position[2], 2)
      )
      if (distance < 3) {
        connections.push({
          start: neuron.position,
          end: other.position,
          color: neuron.color,
        })
      }
    })
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      
      {neurons.map((neuron, i) => (
        <Neuron key={i} position={neuron.position} color={neuron.color} />
      ))}
      
      {connections.map((conn, i) => (
        <Connection key={i} start={conn.start} end={conn.end} color={conn.color} />
      ))}
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export default function NeuronNetwork() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <NeuronNetworkScene />
      </Canvas>
    </div>
  )
}

