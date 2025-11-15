'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Target, Award } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import Footer from '@/components/Footer'

const stats = [
  { icon: Users, value: '10K+', label: 'Active Users' },
  { icon: Brain, value: '1M+', label: 'Memories Stored' },
  { icon: Target, value: '99.9%', label: 'Uptime' },
  { icon: Award, value: '50+', label: 'Awards' },
]

const values = [
  {
    title: 'Innovation',
    description: 'Pushing the boundaries of AI and memory technology',
    color: 'neon-cyan',
  },
  {
    title: 'Privacy',
    description: 'Your memories are encrypted and secure',
    color: 'neon-violet',
  },
  {
    title: 'Accessibility',
    description: 'Making advanced memory management available to everyone',
    color: 'neon-magenta',
  },
]

export default function AboutPage() {
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
            <span className="gradient-text">About Memorae</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            We're revolutionizing how humans interact with their memories through
            cutting-edge AI technology. Our mission is to make memory management
            intelligent, intuitive, and accessible to everyone.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass p-8 rounded-2xl"
                >
                  <Icon className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Memorae, we believe that memories are the foundation of human
              experience. Our AI-powered platform helps you store, organize, and
              retrieve your memories in ways never before possible.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combine advanced neural networks, distributed systems, and
              intuitive design to create a memory management system that feels
              like magic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Our Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="font-display text-2xl font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

