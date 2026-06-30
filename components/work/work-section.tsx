import { projects } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { ProjectCard } from './project-card'

export function WorkSection() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeader label="03 — Work" title="Selected projects I'm proud of." />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
