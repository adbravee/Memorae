'use client'

import { useEffect } from 'react'

export default function AccessibilityFeatures() {
  useEffect(() => {
    // Add keyboard navigation enhancements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with 'M' key
      if (e.key === 'm' || e.key === 'M') {
        const main = document.querySelector('main')
        if (main) {
          main.focus()
          main.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-cyan focus:text-dark-bg focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
    </>
  )
}

