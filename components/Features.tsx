'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Briefcase, GraduationCap, Palette, Archive, ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  {
    icon: Briefcase,
    title: 'Work & Productivity',
    description: 'Store meeting notes, project ideas, and professional insights. Retrieve them instantly when needed.',
    color: 'neon-cyan',
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    icon: GraduationCap,
    title: 'Study & Learning',
    description: 'Build a knowledge network of concepts, facts, and connections. Enhance your learning journey.',
    color: 'neon-violet',
    gradient: 'from-neon-violet to-neon-magenta',
  },
  {
    icon: Palette,
    title: 'Creativity & Ideas',
    description: 'Capture inspiration, creative thoughts, and artistic concepts. Let AI help you connect the dots.',
    color: 'neon-magenta',
    gradient: 'from-neon-magenta to-neon-cyan',
  },
  {
    icon: Archive,
    title: 'Personal Archive',
    description: 'Preserve precious moments, experiences, and personal memories in a secure, intelligent system.',
    color: 'neon-blue',
    gradient: 'from-neon-blue to-neon-violet',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 100, damping: 30 })

  const handleNext = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1)
      x.set(-currentIndex * 100 - 100)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      x.set(-currentIndex * 100 + 100)
    }
  }

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Memorae transforms different aspects of your life
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="card-3d glass p-8 rounded-2xl h-full cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{ perspective: 1000 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const centerX = rect.width / 2
                    const centerY = rect.height / 2
                    const rotateX = (y - centerY) / 10
                    const rotateY = (centerX - x) / 10
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-block mb-6"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="font-display text-3xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--neon-${feature.color.split('-')[1]}), var(--neon-violet))`,
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              style={{ x: springX }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="min-w-full px-2">
                    <div className="glass p-8 rounded-2xl">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-4 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 glass rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === features.length - 1}
              className="p-2 glass rounded-full disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

