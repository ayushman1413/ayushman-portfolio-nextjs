'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navItems, site, socials } from '@/lib/data'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the full-screen overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <div className="fixed top-3 left-4 z-[125] font-mono text-sm font-bold tracking-widest text-foreground">
        {site.shortName}
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="glass fixed top-2.5 right-4 z-[130] flex size-10 items-center justify-center rounded-xl text-foreground"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[124] flex flex-col justify-center bg-background/95 px-8 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  // Staggered slide-in so links cascade into place.
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-4xl font-semibold tracking-tight text-foreground"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 flex gap-5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-muted-foreground hover:text-accent">
                  <s.icon className="size-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
