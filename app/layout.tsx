import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import { LenisProvider } from '@/components/shared/lenis-provider'
import { NoiseOverlay } from '@/components/shared/noise-overlay'
import { CustomCursor } from '@/components/shared/custom-cursor'
import { ScrollProgress } from '@/components/shared/scroll-progress'
import { site } from '@/lib/data'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    'Portfolio of Ayushman Vishwakarma, a web designer and full-stack developer building fast, accessible, and delightful web experiences.',
  keywords: ['Ayushman Vishwakarma', 'Web Designer', 'Full-Stack Developer', 'Next.js', 'React', 'UI Engineer'],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ['/og.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: site.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
  sameAs: ['https://github.com', 'https://linkedin.com', 'https://instagram.com'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground"
        >
          Skip to content
        </a>
        <NoiseOverlay />
        <CustomCursor />
        <ScrollProgress />
        <LenisProvider>{children}</LenisProvider>
        <Toaster theme="dark" position="bottom-right" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
