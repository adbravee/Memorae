'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Brain, Zap, Network, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: 'Store Memories',
    description: 'Upload and organize your memories with intelligent categorization. Our AI automatically tags and structures your content for easy access.',
    detailedDescription: 'Whether it\'s text, images, audio, or video, Memorae intelligently processes and stores your memories in a secure, encrypted format. Our advanced categorization system learns from your patterns to organize everything perfectly.',
    color: '#00ffff',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Multi-format support', 'Auto-categorization', 'Encrypted storage', 'Unlimited capacity'],
    illustration: '💾',
  },
  {
    icon: Brain,
    title: 'AI Processing',
    description: 'Advanced AI models analyze and enhance your memory connections. Transform raw data into meaningful insights.',
    detailedDescription: 'Our neural networks process every memory, identifying patterns, relationships, and context. The AI enriches your memories with metadata, summaries, and intelligent connections you never knew existed.',
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Pattern recognition', 'Context analysis', 'Smart enrichment', 'Relationship mapping'],
    illustration: '🧠',
  },
  {
    icon: Network,
    title: 'Create Connections',
    description: 'Build a neural network of interconnected memories and insights. Discover hidden relationships between your thoughts.',
    detailedDescription: 'Memorae creates a living network of your memories, connecting related concepts, events, and ideas. Visualize how your memories link together and discover new insights through these connections.',
    color: '#ff00ff',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Visual network', 'Smart linking', 'Relationship discovery', 'Insight generation'],
    illustration: '🔗',
  },
  {
    icon: Zap,
    title: 'Instant Retrieval',
    description: 'Access any memory instantly with natural language queries. Find what you need when you need it.',
    detailedDescription: 'Ask questions in plain English and get instant results. Our AI understands context, intent, and nuance, making memory retrieval as natural as having a conversation.',
    color: '#00ff88',
    gradient: 'from-green-400 to-emerald-500',
    features: ['Natural language search', 'Instant results', 'Context-aware', 'Voice commands'],
    illustration: '⚡',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-neon-cyan animate-glow-pulse" />
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of memory management in four simple, powerful steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isExpanded = expandedCard === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedCard(isExpanded ? null : index)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-label={`${step.title} - Click to ${isExpanded ? 'collapse' : 'expand'} details`}
                  className="card-3d glass p-6 lg:p-8 rounded-2xl h-full hover:border-neon-cyan/50 transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark-bg"
                  style={{
                    border: isExpanded ? `2px solid ${step.color}` : undefined,
                  }}
                >
                  {/* Step number badge */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Large emoji illustration */}
                  <motion.div
                    animate={{ scale: isExpanded ? 1.2 : 1, rotate: isExpanded ? 10 : 0 }}
                    className="text-6xl mb-4 text-center"
                  >
                    {step.illustration}
                  </motion.div>

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex justify-center mb-6"
                  >
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}40)`,
                      }}
                    >
                      <Icon 
                        className="w-10 h-10 text-white"
                      />
                    </div>
                  </motion.div>

                  <h3 className="font-display text-2xl font-bold mb-3 text-white text-center">
                    {step.title}
                  </h3>
                  
                  <motion.div
                    animate={{ height: isExpanded ? 'auto' : 'auto' }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 leading-relaxed text-sm mb-4 text-center">
                      {step.description}
                    </p>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                      >
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {step.detailedDescription}
                        </p>
                        
                        <div className="pt-4 border-t border-gray-700">
                          <p className="text-xs font-semibold text-gray-400 mb-2">Key Features:</p>
                          <ul className="space-y-2">
                            {step.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                <CheckCircle2 className="w-4 h-4" style={{ color: step.color }} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400" style={{ transform: 'rotate(90deg)' }} />
                  </motion.div>

                  {/* Hover gradient overlay */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full rounded-2xl transition-all duration-300 pointer-events-none"
                    style={{
                      background: isExpanded 
                        ? `linear-gradient(135deg, ${step.color}15, ${step.color}05)`
                        : `linear-gradient(135deg, ${step.color}00, ${step.color}00)`,
                    }}
                  />
                  
                  {/* Animated border glow */}
                  <motion.div
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                    }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: `0 0 30px ${step.color}40`,
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Connection arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="hidden lg:flex absolute top-1/2 -right-6 items-center justify-center w-12 h-12 rounded-full glass border border-neon-cyan/30"
                  >
                    <ArrowRight className="w-5 h-5 text-neon-cyan" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-full text-white font-semibold text-lg shadow-lg shadow-neon-cyan/50"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

