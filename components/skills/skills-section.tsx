'use client'

import { motion } from 'motion/react'
import { expertise } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { EASE } from '@/components/shared/reveal'
import { SkillsMarquee } from './skills-marquee'

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader label="02 — Skills" title="What I bring to the table." />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div
                  className="absolute -right-12 -top-12 size-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <ul className="mt-1 flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="mt-14">
        <SkillsMarquee />
      </div>
    </section>
  )
}
