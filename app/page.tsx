'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import Technology from '@/components/Technology'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main id="main-content" className="relative min-h-screen" tabIndex={-1}>
      <ParticleBackground />
      <CursorGlow />
      <Hero />
      <HowItWorks />
      <Features />
      <Demo />
      <Technology />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

