import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    title: 'Specialists who do the work',
    body: 'Company secretaries, accountants and advisors — not a processing queue.',
  },
  {
    title: 'Local regulatory depth',
    body: 'BRELA and TRA every week: returns, ownership and tax cycles.',
  },
  {
    title: 'Records that survive scrutiny',
    body: 'Prepared as if an auditor or investor will ask tomorrow.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden">
              <Image
                src="/section-tax-forms.jpg"
                alt="Tax and compliance documents ready for filing"
                width={900}
                height={1200}
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why 11.28"
                title="Precision when the numbers have to be right."
                description="Outsourcing compliance only works when the firm is accountable and fluent in how Tanzanian companies operate."
              />
            </Reveal>

            <div className="mt-8 space-y-6 border-t border-border pt-8 sm:mt-10">
              {reasons.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div>
                    <h3 className="font-display text-base font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
