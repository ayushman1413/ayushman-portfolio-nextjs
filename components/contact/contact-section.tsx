import { Mail, MapPin } from 'lucide-react'
import { site, socials } from '@/lib/data'
import { SectionHeader } from '@/components/shared/section-header'
import { Reveal } from '@/components/shared/reveal'
import { Magnetic } from '@/components/shared/magnetic'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeader label="06 — Contact" title="Let's build something together." />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {site.tagline} Have a project in mind or just want to say hello? Drop me a message and I&apos;ll
            reply as soon as I can.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-accent">
                <Mail className="size-5" aria-hidden />
              </span>
              {site.email}
            </a>
            <div className="inline-flex items-center gap-3 text-muted-foreground">
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-accent">
                <MapPin className="size-5" aria-hidden />
              </span>
              {site.location}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Magnetic key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                </Magnetic>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
