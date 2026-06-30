'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { certificates } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { EASE } from '@/components/shared/reveal'

export function CertificatesSection() {
  return (
    <section id="certificates" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader label="05 — Credentials" title="Certificates & achievements." />
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-auto md:max-w-6xl">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            className="group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40 sm:w-[320px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={cert.image || '/placeholder.svg'}
                alt={`${cert.title} certificate`}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-5">
              <div>
                <h3 className="font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-0.5 font-mono text-xs text-accent">{cert.date}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
