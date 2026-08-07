import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { AnimatedStats } from '@/components/animated-stats'

const beliefs = [
  {
    title: 'Compliance is infrastructure',
    body: 'Clean filings and books are the foundation banks, investors and regulators expect before anything else moves.',
  },
  {
    title: 'Clarity over jargon',
    body: 'We turn BRELA and TRA requirements into plain next steps — what is due, why it matters, who owns it.',
  },
  {
    title: 'One accountable team',
    body: 'Secretarial, accounting and advisory stay aligned so structure, filings and numbers never drift apart.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-pad scroll-mt-20 bg-white sm:scroll-mt-24">
      <div className="container-x">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={40} className="order-1 lg:order-2">
            <div className="relative overflow-hidden">
              <Image
                src="/about-office.jpg"
                alt="African professionals collaborating in a modern boardroom meeting"
                width={900}
                height={1100}
                className="aspect-[16/10] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>

          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionHeading
                eyebrow="About 11.28"
                title="Built for companies that refuse to treat compliance as an afterthought."
                description="Company secretarial professionals, accountants and advisors based at Morocco Square, Dar es Salaam. From first incorporation through annual returns and board support — structure, accuracy and confidence to grow legally."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-7">
                {beliefs.map((item) => (
                  <div key={item.title} className="border-l-2 border-foreground/20 pl-4 sm:pl-5">
                    <h3 className="font-display text-sm font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:mt-1.5">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <a
                href="#contact"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink/90 sm:mt-10 sm:h-11 sm:w-auto"
              >
                Meet the team on a call
                <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>

        <AnimatedStats className="mt-12 sm:mt-16" />
      </div>
    </section>
  )
}
