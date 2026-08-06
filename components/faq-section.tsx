'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What does 11.28 handle?',
    a: 'Company formation and secretarial compliance, accounting and tax declarations, plus advisory on structure and growth. Engage one service line or retain us across the full stack.',
  },
  {
    q: 'How long does company formation take?',
    a: 'With complete information, most straightforward local incorporations move from instruction to certificate in a matter of business days. We confirm a realistic window on the scoping call.',
  },
  {
    q: 'Do you work with foreign founders?',
    a: 'Yes. We support foreign participation structures, local subsidiaries and compliance for entities with non-resident shareholders — including beneficial ownership and banking packs.',
  },
  {
    q: 'Can you take over messy books mid-year?',
    a: 'We routinely onboard mid-cycle. Cleanup assessment first, then bring ledgers current and lock a monthly close rhythm for tax and reporting.',
  },
  {
    q: 'How are fees structured?',
    a: 'Formation and discrete filings are typically fixed-fee. Ongoing secretarial, bookkeeping and tax are monthly or annual retainers. You always receive a written scope before work begins.',
  },
  {
    q: 'Will I have a named contact?',
    a: 'Yes. Every engagement has a primary specialist. Escalations go to the people on your file — not an anonymous ticket queue.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad scroll-mt-20 bg-white sm:scroll-mt-24">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you book the call."
          description="Straight responses to what founders and finance leads ask most often."
        />

        <div className="border-t border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                >
                  <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-300',
                      isOpen && 'rotate-180 text-brand',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 pr-6 text-sm leading-relaxed text-muted-foreground sm:pb-5 sm:pr-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
