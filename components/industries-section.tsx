import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const audiences = [
  {
    title: 'Startups & founders',
    body: 'Correct incorporation and a compliance calendar from day one.',
  },
  {
    title: 'Growing SMEs',
    body: 'Monthly books, tax filings and amendments as you scale.',
  },
  {
    title: 'Corporations & groups',
    body: 'Governance packs and coordinated filings across entities.',
  },
  {
    title: 'Investors & deal teams',
    body: 'Clean records and data-room support for diligence.',
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="section-pad scroll-mt-20 bg-secondary/60 sm:scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for every stage of the company."
            description="From first incorporation to investment readiness."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 sm:pt-12 lg:grid-cols-4 lg:gap-8">
          {audiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article>
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Not sure where you fit?</p>
            <a href="#contact" className="btn-primary">
              Book a scoping call
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
