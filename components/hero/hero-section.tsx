'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Download, Mouse } from 'lucide-react'
import { Magnetic } from '@/components/shared/magnetic'
import { roles, site } from '@/lib/data'
import { AnimatedName } from './animated-name'
import { RoleRotator } from './role-rotator'
import { ProfileCard } from './profile-card'

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    function onMove(e: MouseEvent) {
      // Throttle to one update per animation frame for a smooth, cheap follow.
      if (frame) return
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgb(139 92 246 / 0.12), transparent 70%)`
        }
        frame = 0
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-20">
      {/* Animated dot grid, masked to fade at the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      {/* Mouse-follow violet glow (desktop) */}
      <div ref={glowRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {site.location} · Available for work
          </motion.span>

          <AnimatedName name={site.name} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <RoleRotator roles={roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-foreground shadow-lg shadow-accent/25 transition-shadow hover:shadow-accent/40"
              >
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                Download Resume
                <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <ProfileCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <Mouse className="size-6" />
        <motion.span
          className="text-[10px] font-mono uppercase tracking-widest"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
      </motion.a>
    </section>
  )
}
