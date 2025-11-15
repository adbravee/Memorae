'use client'

import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor-glow'
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,255,255,0.5), transparent);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
      transition: transform 0.1s ease;
      display: none;
    `
    document.body.appendChild(cursor)

    const updateCursor = (e: MouseEvent) => {
      cursor.style.display = 'block'
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none'
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      cursor.remove()
    }
  }, [])

  return null
}

