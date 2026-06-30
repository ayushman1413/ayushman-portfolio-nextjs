import { Navigation } from '@/components/nav/navigation'
import { HeroSection } from '@/components/hero/hero-section'
import { AboutSection } from '@/components/about/about-section'
import { SkillsSection } from '@/components/skills/skills-section'
import { WorkSection } from '@/components/work/work-section'
import { TimelineSection } from '@/components/timeline/timeline-section'
import { CertificatesSection } from '@/components/certificates/certificates-section'
import { ContactSection } from '@/components/contact/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <TimelineSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
