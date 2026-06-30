'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Advance to the next role every 2.5s.
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          // Slide-up + fade swap between roles.
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
