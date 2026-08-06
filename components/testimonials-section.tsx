'use client'

import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const stories = [
  {
    problem:
      'Shareholding on paper did not match what banks and BRELA expected — incorporation documents were inconsistent.',
    built:
      'We reconstructed statutory registers, prepared corrective resolutions, and filed amendments so ownership aligned.',
    result:
      'Bank account opening unblocked in two weeks. Annual return calendar put on autopilot.',
    name: 'Amina Hassan',
    role: 'Founder, Serengeti Retail',
  },
  {
    problem:
      'Revenue was growing but books were still closed manually — tax declarations were reactive and board packs arrived late.',
    built:
      'We took over month-end close, VAT and corporate tax filings, plus a recurring management pack tied to cash and margin.',
    result:
      'Zero late TRA filings in year one. Finance leadership reclaimed time from reconciliations.',
    name: 'David Mushi',
    role: 'CFO, Northbridge Holdings',
  },
  {
    problem:
      'An investment round flagged gaps in minutes, beneficial ownership and intercompany records.',
    built:
      'Advisory designed the target structure; secretarial executed filings; accounting refreshed the data room.',
    result:
      'Investor questions answered from one coherent pack. Closing conditions cleared cleanly.',
    name: 'Grace Kimaro',
    role: 'Managing Director, Kilima Group',
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const count = stories.length

  const next = useCallback(() => setActive((a) => (a + 1) % count), [count])
  const prev = () => setActive((a) => (a - 1 + count) % count)

  useEffect(() => {
    const timer = setInterval(next, 9000)
    return () => clearInterval(timer)
  }, [next])

  const current = stories[active]

  return (
    <section className="section-pad bg-secondary/50">
      <div className="container-x">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Client outcomes"
            title="Problems we solve. Results we deliver."
            className="max-w-xl"
          />
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous story"
              className="flex size-10 items-center justify-center rounded-sm border border-border bg-white transition-colors hover:bg-accent"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next story"
              className="flex size-10 items-center justify-center rounded-sm border border-border bg-white transition-colors hover:bg-accent"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          key={active}
          className="mt-8 animate-[fadeUp_0.5s_ease] divide-y divide-border border-t border-border sm:mt-10 sm:pt-0 lg:grid lg:grid-cols-3 lg:gap-12 lg:divide-y-0 lg:border-t lg:pt-10"
        >
          <div className="py-6 lg:py-0">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Problem
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground/80 sm:mt-3">{current.problem}</p>
          </div>
          <div className="py-6 lg:py-0">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What we did
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground/80 sm:mt-3">{current.built}</p>
          </div>
          <div className="py-6 lg:py-0">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand">
              Result
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground/80 sm:mt-3">{current.result}</p>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm font-semibold">{current.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{current.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
          <div className="flex gap-1.5">
            {stories.map((s, i) => (
              <button
                key={s.name}
                type="button"
                aria-label={`Show story from ${s.name}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-8 bg-brand' : 'w-1.5 bg-border hover:bg-muted-foreground/35'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous story"
              className="flex size-10 items-center justify-center rounded-sm border border-border bg-white"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next story"
              className="flex size-10 items-center justify-center rounded-sm border border-border bg-white"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
