'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, MicOff, Sparkles, ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')

  const handleVoiceClick = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setResponse('Voice recognition is not supported in your browser. Please use Chrome or Edge.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    setIsListening(true)
    setTranscript('')
    setResponse('')

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onresult = (event: any) => {
      const transcriptText = event.results[0][0].transcript
      setTranscript(transcriptText)
      setIsListening(false)

      // Simulate AI response
      setTimeout(() => {
        setResponse(`I heard: "${transcriptText}". Welcome to Memorae! How can I help you store this memory?`)
      }, 500)
    }

    recognition.onerror = () => {
      setIsListening(false)
      setResponse('Sorry, I couldn\'t hear you. Please try again.')
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Animated background gradient */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta opacity-10"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-20 h-20 text-neon-cyan animate-glow-pulse" />
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Ready to Begin?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start your journey with AI-enhanced memories today. Experience the future of memory management.
          </p>

          {/* Voice Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-3xl p-8 md:p-12 mb-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-white">
              Talk to Memorae
            </h3>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleVoiceClick}
              className={`relative w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
                isListening
                  ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan animate-glow-pulse'
                  : 'bg-gradient-to-r from-neon-cyan to-neon-violet'
              } shadow-lg transition-all duration-300`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-10 h-10 text-white" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-4 border-white"
                  />
                </>
              ) : (
                <Mic className="w-10 h-10 text-white" />
              )}
            </motion.button>

            {isListening && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center gap-2 mb-4"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [20, 40, 20],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-1 bg-neon-cyan rounded-full"
                  />
                ))}
              </motion.div>
            )}

            {transcript && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-300 mb-4"
              >
                You said: <span className="text-neon-cyan font-semibold">"{transcript}"</span>
              </motion.p>
            )}

            {response && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-neon-violet/10 border border-neon-violet/50"
              >
                <p className="text-white">{response}</p>
              </motion.div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button group relative px-10 py-5 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta rounded-full font-semibold text-xl text-white shadow-lg shadow-neon-cyan/50 hover:shadow-neon-cyan transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass rounded-full font-semibold text-xl text-white border-2 border-neon-violet/50 hover:border-neon-violet transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

