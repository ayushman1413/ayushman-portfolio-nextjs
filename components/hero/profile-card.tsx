'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { site } from '@/lib/data'

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-sm [perspective:1000px]"
    >
      <motion.div
        // Continuous gentle float to keep the card feeling alive.
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative aspect-[4/5] rotate-[-4deg] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50"
      >
        <Image
          src="/profile.png"
          alt={`Portrait of ${site.name}`}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 24rem"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-background/60 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur-md">
          {site.location}
        </div>
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl"
      />
    </motion.div>
  )
}
