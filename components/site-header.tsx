'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const serviceLinks = [
  {
    label: 'Company Secretarial',
    href: '#company-secretarial',
    desc: 'Formation, filings & statutory records',
  },
  {
    label: 'Accounting & Tax',
    href: '#accounting-tax',
    desc: 'Books, returns & TRA compliance',
  },
  {
    label: 'Business Advisory',
    href: '#advisory',
    desc: 'Structure, growth & board support',
  },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const onDark = !scrolled && !mobileOpen

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'border-b border-border/80 bg-background/95 shadow-[0_1px_0_rgba(12,18,32,0.04)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-x flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[4.5rem]">
        <a href="#home" className="relative z-10 flex items-center" aria-label="11.28 home">
          <Logo variant={onDark ? 'white' : 'dark'} />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((s) => !s)}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[0.8125rem] font-semibold tracking-wide transition-colors',
                onDark
                  ? 'text-ink-foreground/80 hover:text-ink-foreground'
                  : 'text-foreground/70 hover:text-foreground',
              )}
            >
              Services
              <ChevronDown
                className={cn('size-3.5 opacity-70 transition-transform', servicesOpen && 'rotate-180')}
              />
            </button>
            <div
              className={cn(
                'absolute left-0 top-full w-[22rem] pt-3 transition-all duration-200',
                servicesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0',
              )}
            >
              <div className="overflow-hidden rounded-lg border border-border bg-card p-2 shadow-2xl shadow-foreground/10">
                <a
                  href="#services"
                  className="mb-1 block rounded-md px-3 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                >
                  Explore all services
                </a>
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-start justify-between gap-3 rounded-md px-3 py-3 transition-colors hover:bg-accent"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{link.label}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{link.desc}</span>
                    </span>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3.5 py-2 text-[0.8125rem] font-semibold tracking-wide transition-colors',
                onDark
                  ? 'text-ink-foreground/80 hover:text-ink-foreground'
                  : 'text-foreground/70 hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+255700000000"
            className={cn(
              'inline-flex items-center gap-2 text-[0.8125rem] font-semibold transition-colors',
              onDark
                ? 'text-ink-foreground/75 hover:text-ink-foreground'
                : 'text-foreground/65 hover:text-foreground',
            )}
          >
            <Phone className="size-3.5" />
            +255 700 000 000
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-brand px-5 text-[0.8125rem] font-semibold text-brand-foreground transition-all hover:bg-neutral-800"
          >
            Request Consultation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'relative z-10 inline-flex size-11 items-center justify-center rounded-sm lg:hidden',
            onDark ? 'text-ink-foreground' : 'text-foreground',
          )}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu — full panel */}
      <div
        className={cn(
          'lg:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'fixed inset-0 top-14 z-40 flex flex-col bg-background transition-all duration-300 sm:top-16',
            mobileOpen ? 'visible opacity-100' : 'invisible opacity-0',
          )}
        >
          <nav
            className="flex flex-1 flex-col overflow-y-auto px-4 pb-6 pt-4 sm:px-6"
            aria-label="Mobile"
          >
            <p className="pb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </p>
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-4"
              >
                <span className="block text-[1.0625rem] font-semibold text-foreground">{link.label}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{link.desc}</span>
              </a>
            ))}

            <p className="pb-2 pt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-4 text-[1.0625rem] font-semibold text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-border bg-white px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              Request Consultation
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="tel:+255700000000"
              className="mt-2.5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-border text-sm font-semibold text-foreground"
            >
              <Phone className="size-4" />
              +255 700 000 000
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
