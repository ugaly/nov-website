import { ArrowUpRight, Check, type LucideIcon, Building2, FileSpreadsheet, LineChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Category = {
  id: string
  index: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  outcomes: string[]
  items: string[]
}

const categories: Category[] = [
  {
    id: 'company-secretarial',
    index: '01',
    icon: Building2,
    title: 'Company Secretarial',
    subtitle: 'Form, structure and maintain your entity',
    description:
      'From name reservation through Articles, share movements and annual returns — keep your company in good standing with BRELA so directors can focus on the business.',
    outcomes: [
      'Incorporation with correct class and objects',
      'Audit-ready registers and minutes',
      'Amendments and transfers filed without delay',
    ],
    items: [
      'New company formation (local & foreign)',
      'Share capital changes',
      'Share transfers & beneficial ownership',
      'Director & company amendments',
      'Compliance calendar management',
      'Certified extracts & good standing',
    ],
  },
  {
    id: 'accounting-tax',
    index: '02',
    icon: FileSpreadsheet,
    title: 'Accounting & Tax',
    subtitle: 'Clean books. On-time declarations.',
    description:
      'Month-end books, VAT and income-tax filings, and management reports that answer cash, margin and tax exposure — before TRA does.',
    outcomes: [
      'Reconciled ledgers for tax and lenders',
      'Declarations filed before penalties',
      'Clear monthly performance picture',
    ],
    items: [
      'Bookkeeping & reconciliations',
      'Financial statements & packs',
      'VAT, PAYE, SDL & corporate tax',
      'Year-round tax checkpoints',
      'Record retention systems',
      'Audit & diligence support',
    ],
  },
  {
    id: 'advisory',
    index: '03',
    icon: LineChart,
    title: 'Business Advisory',
    subtitle: 'Structure and decisions that scale',
    description:
      'Raising capital, restructuring, expanding, or preparing for exit — advisors who understand both the commercial goal and the Tanzanian compliance path.',
    outcomes: [
      'Structures that protect and attract capital',
      'Board-ready investment packs',
      'Growth plans tied to filings and tax',
    ],
    items: [
      'Corporate structure & governance',
      'Compliance risk reviews',
      'Growth & expansion planning',
      'Investor & lender readiness',
      'Board meeting support',
      'Retained advisory',
    ],
  },
]

/* Monochrome accents on dark section */
export function ServicesSection() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-ink text-ink-foreground sm:scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              invert
              eyebrow="What we do"
              title="Everything your back office needs — under one mandate."
              description="Most firms split formation, books and tax. We keep them aligned so nothing falls between the cracks."
            />
            <a
              href="#contact"
              className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:h-11 sm:w-auto"
            >
              Scope a package
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10 sm:mt-14">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 70}>
              <article
                id={category.id}
                className="scroll-mt-24 grid gap-7 py-9 sm:gap-10 sm:py-12 lg:scroll-mt-28 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
              >
                <div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/40">
                      {category.index}
                    </span>
                    <category.icon className="size-5 text-white/45" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:mt-5 sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{category.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/55 sm:mt-4">
                    {category.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 sm:mt-6">
                    {category.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-ink-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-white" strokeWidth={2} />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-foreground/35">
                    Included
                  </p>
                  <ul className="mt-4 grid gap-0 sm:mt-5 sm:grid-cols-2 sm:gap-x-8">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-ink-foreground/8 py-2.5 text-sm text-ink-foreground/70 sm:py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-white sm:mt-7"
                  >
                    Discuss this service
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
