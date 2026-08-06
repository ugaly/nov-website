import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    num: '01',
    title: 'Specialists who do the work',
    body: 'Company secretaries, accountants and advisors — not a generic processing queue.',
  },
  {
    num: '02',
    title: 'Local regulatory depth',
    body: 'BRELA and TRA every week: naming, beneficial ownership, returns and tax cycles.',
  },
  {
    num: '03',
    title: 'Documentation that survives scrutiny',
    body: 'Minutes, registers and filings prepared as if an auditor will ask tomorrow.',
  },
  {
    num: '04',
    title: 'One story across legal and finance',
    body: 'Board resolutions, filings and books stay aligned — no contradictory records.',
  },
  {
    num: '05',
    title: 'Named ownership',
    body: 'You know who is on your file. Escalations are direct. Updates are proactive.',
  },
  {
    num: '06',
    title: 'Built for every growth stage',
    body: 'From first incorporation to investment cleanup — the engagement scales with you.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Why 11.28"
            title="The partner companies keep when the stakes get real."
            description="Outsourcing compliance only works when the firm is precise, accountable and fluent in how Tanzanian companies operate."
          />
        </Reveal>

        <div className="mt-10 divide-y divide-border border-t border-border sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 sm:divide-y-0 sm:border-t-0 lg:grid-cols-3 lg:gap-x-10">
          {reasons.map((item, i) => (
            <Reveal key={item.num} delay={i * 50}>
              <div className="py-6 sm:border-t sm:border-border sm:py-8">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-brand">
                  {item.num}
                </span>
                <h3 className="mt-2.5 font-display text-base font-semibold tracking-tight sm:mt-3">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
