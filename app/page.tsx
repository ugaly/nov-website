import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TrustMarquee } from '@/components/trust-marquee'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ProcessSection } from '@/components/process-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { IndustriesSection } from '@/components/industries-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FaqSection } from '@/components/faq-section'
import { CtaBand } from '@/components/cta-band'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustMarquee />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUs />
        <IndustriesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
