'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // Spring lag gives the dot a smooth trailing feel behind the real pointer.
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    // Only enable on devices with a fine pointer (skip touch screens).
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    function move(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target as HTMLElement
      setHovering(!!el.closest('a, button, [role="button"], input, textarea'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-accent bg-accent/20"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 44 : 12, height: hovering ? 44 : 12, opacity: hovering ? 0.6 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    />
  )
}
