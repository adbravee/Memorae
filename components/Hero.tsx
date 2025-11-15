'use client'

import { useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'

const NeuronNetwork = dynamic(() => import('./NeuronNetwork'), { ssr: false })

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50" />
      
      {/* 3D Neuron Network */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full" />}>
          <NeuronNetwork />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-neon-cyan animate-glow-pulse" />
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Memorae</span>
            <br />
            <span className="text-white">Your Memories,</span>
            <br />
            <span className="neon-cyan">AI-Enhanced</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Revolutionize how you store, retrieve, and interact with your memories.
            <br />
            Powered by cutting-edge AI technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get started with Memorae"
              className="glow-button group relative px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-full font-semibold text-lg text-white shadow-lg shadow-neon-cyan/50 hover:shadow-neon-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Watch Memorae demo"
              className="px-8 py-4 glass rounded-full font-semibold text-lg text-white border border-neon-violet/50 hover:border-neon-violet transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-offset-2 focus:ring-offset-dark-bg"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

