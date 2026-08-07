import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    step: '01',
    title: 'Discovery call',
    description: 'We map your entity status, deadlines and goals.',
  },
  {
    step: '02',
    title: 'Scope & checklist',
    description: 'Written workplan, timelines and fees before work starts.',
  },
  {
    step: '03',
    title: 'Prepare & review',
    description: 'You approve every filing before we submit.',
  },
  {
    step: '04',
    title: 'File & follow through',
    description: 'We track responses and deliver confirmed results.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-pad scroll-mt-20 bg-secondary/60 sm:scroll-mt-24">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="Clear steps from first call to confirmed filings."
                description="No black boxes — you always know the stage and the owner."
              />
            </Reveal>

            <ol className="mt-8 space-y-6 border-t border-border pt-8 sm:mt-10">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.step} delay={i * 50}>
                  <div className="flex gap-4">
                    <span className="font-display text-sm font-semibold tracking-[0.14em] text-muted-foreground">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={80} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden">
              <Image
                src="/section-tax-day.jpg"
                alt="Tax day marked on a compliance calendar"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Deadlines tracked. Filings owned. Nothing left to chance.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
