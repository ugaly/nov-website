import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { featuredTeam } from '@/lib/team'

export function TeamSection() {
  return (
    <section id="team" className="section-pad scroll-mt-20 bg-white sm:scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our team"
              title="The people behind your filings."
              description="Named specialists — not anonymous ticket queues."
            />
            <Link
              href="/team"
              className="btn-primary shrink-0"
            >
              View more
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {featuredTeam.map((member, i) => (
            <Reveal key={member.id} delay={i * 70}>
              <article>
                <div className="relative overflow-hidden bg-secondary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={640}
                    height={800}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
