'use client'

import Image from 'next/image'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { motion } from 'motion/react'
import type { Project } from '@/lib/data'
import { EASE } from '@/components/shared/reveal'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.name} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
          <div className="flex items-center gap-2">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code`}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <GitBranch className="size-4" aria-hidden />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live site`}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
