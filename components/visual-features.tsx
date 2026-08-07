import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const panels = [
  {
    image: '/section-tax-heaven.jpg',
    alt: 'Typewriter with tax paperwork theme',
    title: 'Tax without the scramble',
    body: 'Declarations planned through the year — not rushed in the last week.',
  },
  {
    image: '/section-tax-forms.jpg',
    alt: 'Organized tax forms and estimated tax publications',
    title: 'Books that stand up',
    body: 'Clean ledgers and packs ready for TRA, banks and investors.',
  },
  {
    image: '/section-tax-day.jpg',
    alt: 'Calendar marking tax day',
    title: 'Deadlines owned',
    body: 'A named specialist tracks every filing date before it becomes a risk.',
  },
]

export function VisualFeatures() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="In practice"
            title="Less paperwork stress. More time to run the company."
          />
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {panels.map((panel, i) => (
            <Reveal key={panel.title} delay={i * 70}>
              <article>
                <div className="relative overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{panel.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{panel.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
