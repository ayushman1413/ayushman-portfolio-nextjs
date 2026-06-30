'use client'

import { skills } from '@/lib/data'

export function SkillsMarquee() {
  const row = [...skills, ...skills]
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
