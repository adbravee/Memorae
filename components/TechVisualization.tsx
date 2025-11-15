'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function TechNode({ 
  position, 
  color, 
  name, 
  description,
  hovered,
  onHover
}: { 
  position: [number, number, number]
  color: string
  name: string
  description: string
  hovered: boolean
  onHover: (name: string | null) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered ? 1.3 : 1 + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
    if (groupRef.current && hovered) {
      groupRef.current.rotation.y += 0.02
    }
  })

  return (
    <group 
      ref={groupRef}
      position={position}
      onPointerEnter={() => onHover(name)}
      onPointerLeave={() => onHover(null)}
    >
      {/* Main node */}
      <Sphere ref={meshRef} args={[0.6, 32, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Glow effect */}
      {hovered && (
        <>
          <Sphere args={[0.8, 32, 32]}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.5}
            />
          </Sphere>
          {/* Label ring */}
          <mesh position={[0, -1.2, 0]}>
            <ringGeometry args={[0.8, 1, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.5} />
          </mesh>
        </>
      )}
    </group>
  )
}

function ConnectionLine({ 
  start, 
  end, 
  color 
}: { 
  start: [number, number, number]
  end: [number, number, number]
  color: string
}) {
  const ref = useRef<THREE.Line>(null)

  useFrame(() => {
    if (ref.current) {
      const material = ref.current.material as THREE.LineBasicMaterial
      material.opacity = 0.2 + Math.sin(Date.now() * 0.001) * 0.1
    }
  })

  return (
    <line ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  )
}

function TechVisualizationScene({ 
  hoveredComponent,
  onHover
}: { 
  hoveredComponent: string | null
  onHover: (name: string | null) => void
}) {
  // Architecture layout: Central hub with 4 components around it
  const nodes = [
    { 
      position: [0, 0, 0] as [number, number, number], 
      color: '#00ffff', 
      name: 'AI Engine',
      description: 'Core neural network processing unit'
    },
    { 
      position: [-3, 0, 0] as [number, number, number], 
      color: '#8b5cf6', 
      name: 'Memory Storage',
      description: 'Distributed encrypted database'
    },
    { 
      position: [3, 0, 0] as [number, number, number], 
      color: '#ff00ff', 
      name: 'Connection Layer',
      description: 'Intelligent relationship mapping'
    },
    { 
      position: [0, 3, 0] as [number, number, number], 
      color: '#3b82f6', 
      name: 'Enhancement AI',
      description: 'Context-aware memory enhancement'
    },
    { 
      position: [0, -3, 0] as [number, number, number], 
      color: '#00ff88', 
      name: 'Query Interface',
      description: 'Natural language processing'
    },
  ]

  // Central node connections
  const connections = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[0], to: nodes[2] },
    { from: nodes[0], to: nodes[3] },
    { from: nodes[0], to: nodes[4] },
    // Inter-component connections
    { from: nodes[1], to: nodes[2] },
    { from: nodes[3], to: nodes[4] },
  ]

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00ffff" />
      <pointLight position={[-5, -5, -5]} intensity={1.2} color="#ff00ff" />
      <pointLight position={[0, 5, -5]} intensity={0.8} color="#8b5cf6" />
      
      {/* Connections */}
      {connections.map((conn, i) => (
        <ConnectionLine
          key={i}
          start={conn.from.position}
          end={conn.to.position}
          color={conn.from.color}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <TechNode
          key={i}
          position={node.position}
          color={node.color}
          name={node.name}
          description={node.description}
          hovered={hoveredComponent === node.name}
          onHover={onHover}
        />
      ))}

      {/* Central hub highlight */}
      {hoveredComponent === 'AI Engine' && (
        <mesh position={[0, 0, 0]}>
          <ringGeometry args={[1.5, 1.8, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
      )}

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={15}
      />
    </>
  )
}

export default function TechVisualization({ 
  hoveredComponent,
  onHover
}: { 
  hoveredComponent: string | null
  onHover: (name: string | null) => void
}) {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10 glass px-4 py-2 rounded-lg">
        <p className="text-sm text-gray-300">Hover over components to explore</p>
      </div>
      <div className="absolute top-4 right-4 z-10 glass px-4 py-2 rounded-lg">
        <p className="text-sm text-gray-300">Drag to rotate • Scroll to zoom</p>
      </div>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <TechVisualizationScene hoveredComponent={hoveredComponent} onHover={onHover} />
      </Canvas>
      
      {/* Component info panel */}
      {hoveredComponent && (
        <div className="absolute bottom-4 left-4 right-4 z-10 glass px-6 py-4 rounded-lg border border-neon-cyan/50">
          <h3 className="text-white font-bold text-lg mb-2">{hoveredComponent}</h3>
          <p className="text-gray-300 text-sm">
            {hoveredComponent === 'AI Engine' && 'Core neural network processing unit that powers all memory operations'}
            {hoveredComponent === 'Memory Storage' && 'Distributed encrypted database ensuring secure and scalable storage'}
            {hoveredComponent === 'Connection Layer' && 'Intelligent relationship mapping that connects related memories'}
            {hoveredComponent === 'Enhancement AI' && 'Context-aware system that enriches memories with additional insights'}
            {hoveredComponent === 'Query Interface' && 'Natural language processing for intuitive memory retrieval'}
          </p>
        </div>
      )}
    </div>
  )
}
