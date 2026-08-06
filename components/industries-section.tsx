import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const audiences = [
  {
    title: 'Startups & founders',
    body: 'Correct incorporation and a compliance calendar so early growth does not create later cleanup.',
  },
  {
    title: 'Growing SMEs',
    body: 'Monthly books, tax declarations and secretarial amendments as you add shareholders or new lines.',
  },
  {
    title: 'Corporations & groups',
    body: 'Governance packs, multi-entity calendars and coordinated filings across subsidiaries.',
  },
  {
    title: 'Investors & deal teams',
    body: 'Clean records, beneficial ownership clarity and data-room support when diligence begins.',
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="section-pad scroll-mt-20 bg-white sm:scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for moments when structure and numbers have to be right."
            description="From first incorporation to investment readiness — tailored to how your company actually operates."
          />
        </Reveal>

        <div className="mt-10 divide-y divide-border border-t border-border sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-0 sm:divide-y-0 sm:border-t-0">
          {audiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="py-6 sm:border-t sm:border-border sm:pt-6 sm:pb-8">
                <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-2">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-10">
            <p className="max-w-md text-sm text-muted-foreground">
              Not sure where to start? Tell us your stage — we will recommend a clear first step.
            </p>
            <a href="#contact" className="btn-primary shrink-0">
              Book a scoping call
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
