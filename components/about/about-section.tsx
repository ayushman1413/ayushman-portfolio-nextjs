'use client'

import { MapPin } from 'lucide-react'
import { about, site } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { Reveal } from '@/components/shared/reveal'
import { CountUp } from './count-up'

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeader label="01 — About" title={about.heading} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent" aria-hidden />
              {site.location}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <span className="text-3xl font-bold tracking-tight md:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
