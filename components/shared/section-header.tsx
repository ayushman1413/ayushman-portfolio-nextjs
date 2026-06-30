import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  label: string
  title: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  )
}

export function SectionHeader({ label, title, className, align = 'left' }: SectionHeaderProps) {
  return (
    <Reveal className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
