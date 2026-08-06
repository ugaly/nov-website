import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    step: '01',
    title: 'Discovery call',
    description:
      'We map your entity status, deadlines and goals — then confirm what success looks like.',
    detail: '30–45 min · no obligation',
  },
  {
    step: '02',
    title: 'Scope & checklist',
    description:
      'A clear workplan: documents needed, filings involved, timelines and fee structure.',
    detail: 'Written scope before work starts',
  },
  {
    step: '03',
    title: 'Prepare & review',
    description:
      'We draft resolutions, applications and returns. You approve before any submission.',
    detail: 'Your sign-off on every action',
  },
  {
    step: '04',
    title: 'File & follow through',
    description:
      'We submit, track responses, cure queries and deliver confirmed results plus next steps.',
    detail: 'Updates until completion',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-pad scroll-mt-20 bg-secondary/60 sm:scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A guided path from first conversation to confirmed filings."
            description="No black boxes. You always know the stage, the owner, and what we are waiting on."
          />
        </Reveal>

        {/* Mobile: vertical timeline · Desktop: grid */}
        <ol className="relative mt-10 space-y-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-10 sm:space-y-0 lg:grid-cols-4 lg:gap-8">
          <div
            className="absolute bottom-2 left-[0.7rem] top-2 w-px bg-border sm:hidden"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 80} className="relative">
              <div className="flex gap-4 pb-8 last:pb-0 sm:block sm:pb-0">
                <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary ring-4 ring-secondary sm:hidden">
                  <span className="size-2 rounded-full bg-brand" />
                </span>
                <div>
                  <span className="font-display text-2xl font-semibold tracking-tight text-brand/70 sm:text-3xl">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold tracking-tight sm:mt-4 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                    {step.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-foreground/40 sm:mt-4">{step.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
