'use client'

import { motion } from 'motion/react'

export function AnimatedName({ name }: { name: string }) {
  const words = name.split(' ')

  return (
    <h1 className="font-heading font-bold leading-[0.95] tracking-[-0.03em] text-foreground">
      <span className="sr-only">{name}</span>
      <span aria-hidden="true" className="block text-[clamp(3.5rem,12vw,9rem)]">
        {words.map((word, wi) => (
          <span key={wi} className="mr-[0.2em] inline-block">
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                initial={{ opacity: 0, y: '0.4em', filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                // 30ms stagger per letter, sequenced after the background fades in.
                transition={{
                  duration: 0.6,
                  delay: 0.4 + (wi * 6 + ci) * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  )
}
