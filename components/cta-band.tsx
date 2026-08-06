import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/hero-dar.jpg"
        alt=""
        fill
        className="object-cover object-[center_55%] opacity-35"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <div className="relative container-x flex flex-col gap-6 py-12 sm:gap-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              You run the company. We keep it compliant.
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-white/60 sm:mt-3 sm:text-[0.975rem]">
              New formation, books brought current, or a retained partner — start with a short conversation.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
            <a href="#contact" className="btn-primary">
              Request Consultation
              <ArrowUpRight className="size-4" />
            </a>
            <a href="tel:+255700000000" className="btn-ghost-light">
              <Phone className="size-4" />
              Call us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
