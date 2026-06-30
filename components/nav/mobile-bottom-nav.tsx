'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/data'
import { navIcons } from './nav-icons'

export function MobileBottomNav({ active }: { active: string }) {
  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="glass fixed inset-x-3 bottom-3 z-[120] flex items-center justify-around rounded-2xl py-2 lg:hidden"
    >
      {navItems.map((item) => {
        const id = item.href.slice(1)
        const isActive = active === id
        const Icon = navIcons[item.icon]
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'relative flex flex-1 flex-col items-center gap-1 py-1 text-[11px] font-medium transition-colors',
              isActive ? 'text-accent' : 'text-muted-foreground',
            )}
          >
            {Icon && <Icon className="size-5" aria-hidden="true" />}
            {item.label}
            {isActive && (
              <motion.span
                layoutId="mobile-nav-dot"
                className="absolute -top-0.5 h-1 w-1 rounded-full bg-accent"
              />
            )}
          </a>
        )
      })}
    </motion.nav>
  )
}
