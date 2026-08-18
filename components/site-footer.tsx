import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'How it works', href: '/#process' },
      { label: 'Our team', href: '/team' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Company Secretarial', href: '/#company-secretarial' },
      { label: 'Accounting & Tax', href: '/#accounting-tax' },
      { label: 'Business Advisory', href: '/#advisory' },
      { label: 'All services', href: '/#services' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x py-10 sm:py-14 lg:py-16">
        {/* Brand + CTA */}
        <div className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
          <Logo variant="white" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
            Company secretarial, accounting, tax and advisory for ambitious companies in Tanzania.
          </p>
          <a
            href="/#contact"
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:mt-6 sm:w-auto"
          >
            Request Consultation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Links — 2 cols on mobile, expands on larger screens */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 sm:gap-x-10 sm:py-10 lg:grid-cols-4 lg:gap-10 lg:py-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.8125rem] leading-snug text-white/55 transition-colors hover:text-white sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact spans full width under the 2 cols on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white/40">
              Get in touch
            </h3>
            <ul className="mt-3 space-y-3.5 text-[0.8125rem] text-white/55 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-white/40 sm:size-4" />
                <span>Morocco Square, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-3.5 shrink-0 text-white/40 sm:size-4" />
                <a
                  href="mailto:companie@companies.co.tz"
                  className="break-all transition-colors hover:text-white"
                >
                  companie@companies.co.tz
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-3.5 shrink-0 text-white/40 sm:size-4" />
                <a href="tel:+255700000000" className="transition-colors hover:text-white">
                  +255 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 shrink-0 text-white/40 sm:size-4" />
                <span>08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-sm">
          <p>© {new Date().getFullYear()} November 28 Corporate Services.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
