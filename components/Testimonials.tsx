'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    company: 'TechCorp',
    content: 'Memorae has completely transformed how I organize my creative ideas. The AI connections are mind-blowing!',
    rating: 5,
    color: 'neon-cyan',
  },
  {
    name: 'Marcus Johnson',
    role: 'Research Scientist',
    company: 'AI Labs',
    content: 'As someone who deals with vast amounts of information, Memorae helps me find connections I never knew existed.',
    rating: 5,
    color: 'neon-violet',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student',
    company: 'University',
    content: 'Studying has never been easier. Memorae helps me build a knowledge network that actually makes sense.',
    rating: 5,
    color: 'neon-magenta',
  },
  {
    name: 'David Kim',
    role: 'Entrepreneur',
    company: 'Startup Founder',
    content: 'The speed at which I can retrieve memories is incredible. It feels like having a second brain.',
    rating: 5,
    color: 'neon-blue',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

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
            <span className="gradient-text">What People Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of users experiencing the future of memory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ y: index % 2 === 0 ? y : undefined, opacity }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, z: 50 }}
                className="card-3d glass p-8 rounded-2xl h-full border-2 border-transparent hover:border-neon-cyan/50 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Quote 
                  className="w-12 h-12 mb-4 opacity-50"
                  style={{
                    color: testimonial.color === 'neon-cyan' ? '#00ffff'
                      : testimonial.color === 'neon-violet' ? '#8b5cf6'
                      : testimonial.color === 'neon-magenta' ? '#ff00ff'
                      : '#3b82f6'
                  }}
                />

                <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{
                        fill: testimonial.color === 'neon-cyan' ? '#00ffff'
                          : testimonial.color === 'neon-violet' ? '#8b5cf6'
                          : testimonial.color === 'neon-magenta' ? '#ff00ff'
                          : '#3b82f6',
                        color: testimonial.color === 'neon-cyan' ? '#00ffff'
                          : testimonial.color === 'neon-violet' ? '#8b5cf6'
                          : testimonial.color === 'neon-magenta' ? '#ff00ff'
                          : '#3b82f6'
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      background: testimonial.color === 'neon-cyan' 
                        ? 'linear-gradient(135deg, #00ffff, rgba(0, 255, 255, 0.2))'
                        : testimonial.color === 'neon-violet'
                        ? 'linear-gradient(135deg, #8b5cf6, rgba(139, 92, 246, 0.2))'
                        : testimonial.color === 'neon-magenta'
                        ? 'linear-gradient(135deg, #ff00ff, rgba(255, 0, 255, 0.2))'
                        : 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.2))'
                    }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Star className="w-5 h-5 text-gray-400 hover:text-neon-cyan" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

