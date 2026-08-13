import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const stories = [
  {
    quote:
      'Bank account opening unblocked in two weeks after they fixed our shareholding and filings.',
    name: 'Amina Hassan',
    role: 'Founder, Serengeti Retail',
  },
  {
    quote:
      'Zero late TRA filings in year one. Our books and board packs finally run on time.',
    name: 'David Mushi',
    role: 'CFO, Northbridge Holdings',
  },
  {
    quote:
      'Investor diligence cleared cleanly — one coherent pack for structure, filings and numbers.',
    name: 'Grace Kimaro',
    role: 'Managing Director, Kilima Group',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Client outcomes"
            title="What clients say after the work is done."
          />
        </Reveal>

        <div className="mt-10 grid gap-10 border-t border-border pt-10 sm:mt-12 sm:grid-cols-3 sm:gap-8 sm:pt-12">
          {stories.map((story, i) => (
            <Reveal key={story.name} delay={i * 60}>
              <blockquote>
                <p className="font-display text-lg font-medium italic leading-snug tracking-tight text-foreground sm:text-xl">
                  “{story.quote}”
                </p>
                <footer className="mt-5">
                  <p className="text-sm font-semibold">{story.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{story.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
