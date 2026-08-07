import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { teamMembers } from '@/lib/team'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the 11.28 team — company secretaries, tax associates, accountants and advisors in Dar es Salaam.',
}

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-20 sm:pt-24">
        <section className="section-pad">
          <div className="container-x">
            <Link
              href="/#team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>

            <div className="mt-8 max-w-2xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand">
                Our team
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                The full 11.28 practice team.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Six specialists covering formation, secretarial, accounting, tax and advisory —
                coordinated under one mandate in Dar es Salaam.
              </p>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {teamMembers.map((member) => (
                <article key={member.id}>
                  <div className="relative overflow-hidden bg-secondary">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={640}
                      height={800}
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
