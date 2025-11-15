'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import Footer from '@/components/Footer'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for trying out Memorae',
    features: [
      'Up to 1,000 memories',
      'Basic AI processing',
      'Standard search',
      'Community support',
    ],
    color: 'neon-cyan',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$9',
    period: 'month',
    description: 'For professionals and power users',
    features: [
      'Unlimited memories',
      'Advanced AI processing',
      'Priority search',
      'Email support',
      'Cloud sync',
      'Analytics dashboard',
    ],
    color: 'neon-violet',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and organizations',
    features: [
      'Everything in Professional',
      'Team collaboration',
      'Advanced security',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
    ],
    color: 'neon-magenta',
    popular: false,
  },
]

export default function PricingPage() {
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
            <span className="gradient-text">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Choose the perfect plan for your memory management needs
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`glass p-8 rounded-3xl h-full ${plan.popular ? 'border-2 border-neon-violet' : ''}`}>
                  <div className="mb-6">
                    <h3 className="font-display text-3xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-white'
                        : 'glass border border-neon-cyan/50 text-white hover:border-neon-cyan'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

