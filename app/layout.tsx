import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import AccessibilityFeatures from '@/components/AccessibilityFeatures'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Memorae - Your Memories, AI-Enhanced',
  description: 'Revolutionary AI-powered memory storage and retrieval system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        <AccessibilityFeatures />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

