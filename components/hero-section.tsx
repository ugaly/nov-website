import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/hero-dar.jpg"
        alt="Dar es Salaam skyline across the harbor"
        fill
        priority
        className="object-cover object-[68%_42%] sm:object-[center_42%] scale-105"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45 sm:bg-gradient-to-r sm:from-ink/92 sm:via-ink/55 sm:to-ink/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-transparent to-ink/35 sm:block"
        aria-hidden="true"
      />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24 sm:pb-16 lg:justify-center lg:pb-24 lg:pt-24">
        <div className="max-w-2xl animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <Logo variant="white" size="hero" />

          <h1 className="mt-5 text-balance font-display text-[1.65rem] font-medium leading-[1.18] tracking-tight text-white sm:mt-7 sm:text-4xl lg:text-[2.65rem]">
            Corporate services that keep your company compliant — and free to grow.
          </h1>

          <p className="mt-4 max-w-lg text-pretty text-[0.9375rem] leading-relaxed text-white/70 sm:mt-5 sm:text-[1.0625rem]">
            Formation, secretarial filings, accounting and tax — handled with precision by a Dar es
            Salaam team that treats your compliance like its own.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-3">
            <a href="#contact" className="btn-primary h-[3.15rem] sm:h-[3.25rem] sm:px-7">
              Request Consultation
              <ArrowUpRight className="size-4" />
            </a>
            <a href="tel:+255700000000" className="btn-ghost-light h-[3.15rem] sm:h-[3.25rem] sm:px-7">
              <Phone className="size-4" />
              Talk to a specialist
            </a>
          </div>
        </div>

        <ul className="mt-10 flex flex-col gap-1.5 text-[0.8125rem] tracking-wide text-white/45 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-1 sm:text-sm">
          <li>BRELA filings</li>
          <li className="hidden text-white/25 sm:inline" aria-hidden="true">
            ·
          </li>
          <li>TRA compliance</li>
          <li className="hidden text-white/25 sm:inline" aria-hidden="true">
            ·
          </li>
          <li>Board & statutory support</li>
          <li className="hidden text-white/25 sm:inline" aria-hidden="true">
            ·
          </li>
          <li>Dar es Salaam, Tanzania</li>
        </ul>
      </div>
    </section>
  )
}
