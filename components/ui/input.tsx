import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full rounded-lg border border-border bg-surface-2/40 px-3.5 py-2 text-sm text-foreground transition-colors',
        'placeholder:text-muted-foreground/70 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30',
        'aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
