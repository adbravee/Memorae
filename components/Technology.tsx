'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Database, Network, Sparkles, Eye, EyeOff } from 'lucide-react'
import dynamic from 'next/dynamic'

const TechVisualization = dynamic(() => import('./TechVisualization'), { ssr: false })

const techComponents = [
  {
    icon: Cpu,
    name: 'AI Engine',
    description: 'Advanced neural networks for memory processing',
    color: 'neon-cyan',
  },
  {
    icon: Database,
    name: 'Memory Storage',
    description: 'Distributed, encrypted memory database',
    color: 'neon-violet',
  },
  {
    icon: Network,
    name: 'Connection Layer',
    description: 'Intelligent memory relationship mapping',
    color: 'neon-magenta',
  },
  {
    icon: Sparkles,
    name: 'Enhancement AI',
    description: 'Context-aware memory enhancement',
    color: 'neon-blue',
  },
]

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [show3D, setShow3D] = useState(true)
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  const handleHover = (name: string | null) => {
    setHoveredComponent(name)
  }

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Built with cutting-edge AI and distributed systems
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShow3D(!show3D)}
            className="glass px-6 py-3 rounded-full flex items-center gap-2 mx-auto"
          >
            {show3D ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            <span>{show3D ? 'Show Text View' : 'Show 3D View'}</span>
          </motion.button>
        </motion.div>

        {show3D ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 min-h-[600px]"
          >
            <TechVisualization hoveredComponent={hoveredComponent} onHover={handleHover} />
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techComponents.map((component, index) => {
              const Icon = component.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredComponent(component.name)}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card-3d glass p-8 rounded-2xl h-full cursor-pointer border-2 border-transparent hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-block mb-6"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{
                          background: component.color === 'neon-cyan' 
                            ? 'linear-gradient(135deg, #00ffff, rgba(0, 255, 255, 0.2))'
                            : component.color === 'neon-violet'
                            ? 'linear-gradient(135deg, #8b5cf6, rgba(139, 92, 246, 0.2))'
                            : component.color === 'neon-magenta'
                            ? 'linear-gradient(135deg, #ff00ff, rgba(255, 0, 255, 0.2))'
                            : 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.2))'
                        }}
                      >
                        <Icon 
                          className="w-8 h-8"
                          style={{
                            color: component.color === 'neon-cyan' ? '#00ffff'
                              : component.color === 'neon-violet' ? '#8b5cf6'
                              : component.color === 'neon-magenta' ? '#ff00ff'
                              : '#3b82f6'
                          }}
                        />
                      </div>
                    </motion.div>

                    <h3 className="font-display text-2xl font-bold mb-4 text-white">
                      {component.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {component.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredComponent === component.name ? 1 : 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <p className="text-sm text-gray-400">
                        {hoveredComponent === component.name 
                          ? 'Currently highlighted in 3D view'
                          : 'Hover over the 3D visualization to see this component'}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

