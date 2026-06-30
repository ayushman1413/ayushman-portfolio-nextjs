'use client'

import { Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import { timeline } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { EASE } from '@/components/shared/reveal'

export function TimelineSection() {
  return (
    <section id="timeline" className="relative mx-auto max-w-4xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeader label="04 — Journey" title="Where I've been." />

      <div className="relative mt-12 pl-8 md:pl-0">
        {/* vertical line */}
        <div
          className="absolute left-2 top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />

        <ol className="flex flex-col gap-10">
          {timeline.map((entry, i) => {
            const Icon = entry.type === 'work' ? Briefcase : GraduationCap
            const left = i % 2 === 0
            return (
              <motion.li
                key={`${entry.role}-${entry.date}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: EASE }}
                className={`relative md:w-1/2 ${left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
              >
                {/* node */}
                <span
                  className={`absolute -left-[1.65rem] top-1.5 flex size-5 items-center justify-center rounded-full border border-accent bg-background md:left-auto ${
                    left ? 'md:-right-[0.65rem]' : 'md:-left-[0.65rem]'
                  }`}
                  aria-hidden
                >
                  <span className="size-2 rounded-full bg-accent" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
                  <div className={`flex items-center gap-2 ${left ? 'md:justify-end' : ''}`}>
                    <Icon className="size-4 text-accent" aria-hidden />
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">{entry.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{entry.role}</h3>
                  <p className="text-sm text-muted-foreground">{entry.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
