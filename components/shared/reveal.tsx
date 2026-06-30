'use client'

import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'

// Custom luxurious easing — slow out, gentle settle.
export const EASE = [0.22, 1, 0.36, 1] as const

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
}

// Fades content up from y:40 once it scrolls into view (fires a single time).
export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
