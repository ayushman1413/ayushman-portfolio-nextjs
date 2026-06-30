'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    // Skip smooth-scroll hijacking entirely when the user prefers reduced motion.
    if (reduce) return

    const lenis = new Lenis({ lerp: 0.15, smoothWheel: true })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Bridge Lenis with anchor links so nav clicks scroll smoothly.
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -80 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [reduce])

  return <>{children}</>
}
