'use client'

import { ArrowUp } from 'lucide-react'
import { site, navItems, socials } from '@/lib/data'

export function Footer() {
  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold tracking-tight">{site.name}</span>
            <span className="text-sm text-muted-foreground">{site.role}</span>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="size-5" aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
            <button
              type="button"
              onClick={toTop}
              aria-label="Back to top"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <ArrowUp className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
