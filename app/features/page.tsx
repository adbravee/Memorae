'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Lock, 
  Zap, 
  Search, 
  Network, 
  Shield, 
  Sparkles,
  Cloud,
  BarChart3
} from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import Footer from '@/components/Footer'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Processing',
    description: 'Advanced neural networks analyze and enhance your memories automatically',
    color: 'neon-cyan',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Your memories are encrypted and secure, accessible only by you',
    color: 'neon-violet',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Retrieve any memory in milliseconds with our optimized search',
    color: 'neon-magenta',
  },
  {
    icon: Search,
    title: 'Natural Language Search',
    description: 'Find memories using natural language queries powered by AI',
    color: 'neon-cyan',
  },
  {
    icon: Network,
    title: 'Memory Connections',
    description: 'Discover relationships and connections between your memories',
    color: 'neon-violet',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data never leaves your control. We respect your privacy',
    color: 'neon-magenta',
  },
  {
    icon: Sparkles,
    title: 'Smart Enhancement',
    description: 'AI automatically enhances and enriches your memories',
    color: 'neon-cyan',
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Access your memories from anywhere, anytime, on any device',
    color: 'neon-violet',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Get insights into your memory patterns and habits',
    color: 'neon-magenta',
  },
]

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Features</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover the powerful features that make Memorae the future of memory management
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <div className="card-3d glass p-8 rounded-2xl h-full hover:border-neon-cyan/50 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-block mb-6"
                    >
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{
                          background: feature.color === 'neon-cyan' 
                            ? 'linear-gradient(135deg, #00ffff, rgba(0, 255, 255, 0.2))'
                            : feature.color === 'neon-violet'
                            ? 'linear-gradient(135deg, #8b5cf6, rgba(139, 92, 246, 0.2))'
                            : 'linear-gradient(135deg, #ff00ff, rgba(255, 0, 255, 0.2))'
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="font-display text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

