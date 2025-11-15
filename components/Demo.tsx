'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react'

const demoSteps = [
  { text: 'Creating memory node...', delay: 500 },
  { text: 'Analyzing connections...', delay: 1500 },
  { text: 'Enhancing with AI...', delay: 2500 },
  { text: 'Memory stored successfully!', delay: 3500, success: true },
]

export default function Demo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [memoryText, setMemoryText] = useState('')

  useEffect(() => {
    if (isActive && currentStep < demoSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, demoSteps[currentStep].delay)
      return () => clearTimeout(timer)
    } else if (currentStep >= demoSteps.length) {
      setTimeout(() => {
        setIsActive(false)
        setCurrentStep(0)
        setMemoryText('')
      }, 2000)
    }
  }, [isActive, currentStep])

  const handleStart = () => {
    setIsActive(true)
    setCurrentStep(0)
    setMemoryText('Remember: The future of memory is AI-enhanced')
  }

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Try Memorae</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the magic of AI-enhanced memory storage
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {!isActive ? (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-block mb-8"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <h3 className="font-display text-3xl font-bold mb-4 text-white">
                Create Your First Memory
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Click the button below to see how Memorae processes and stores your memories
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="glow-button px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-full font-semibold text-lg text-white shadow-lg shadow-neon-cyan/50"
              >
                Start Demo
              </motion.button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2 text-white">
                  Processing Memory...
                </h3>
                <p className="text-gray-400 italic">&quot;{memoryText}&quot;</p>
              </div>

              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      index <= currentStep
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0.3, x: -20 }
                    }
                    className="flex items-center gap-4 p-4 rounded-xl glass"
                  >
                    {index < currentStep ? (
                      <CheckCircle2 className="w-6 h-6 text-neon-cyan flex-shrink-0" />
                    ) : index === currentStep ? (
                      <Loader2 className="w-6 h-6 text-neon-violet flex-shrink-0 animate-spin" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-600 flex-shrink-0" />
                    )}
                    <span
                      className={`text-lg ${
                        index < currentStep
                          ? 'text-neon-cyan'
                          : index === currentStep
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Visual feedback */}
              {currentStep > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-8 flex justify-center gap-4"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: currentStep > i ? [1, 1.2, 1] : 1,
                        opacity: currentStep > i ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-4 h-4 rounded-full ${
                        i === 0
                          ? 'bg-neon-cyan'
                          : i === 1
                          ? 'bg-neon-violet'
                          : i === 2
                          ? 'bg-neon-magenta'
                          : 'bg-neon-blue'
                      }`}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

