'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { navItems, site } from '@/lib/data'

export function DesktopNav({ active }: { active: string }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-4 z-[120] hidden justify-center px-6 lg:flex"
    >
      <nav
        aria-label="Primary"
        className="glass flex items-center gap-1 rounded-full py-2 pr-2 pl-5 shadow-lg shadow-black/30"
      >
        <a href="#home" className="mr-3 font-mono text-sm font-bold tracking-widest text-foreground">
          {site.shortName}
        </a>
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = active === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/15 ring-1 ring-accent/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
        <a
          href="#contact"
          className="ml-3 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </motion.header>
  )
}
