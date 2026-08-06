const pillars = [
  {
    title: 'Privacy by default',
    copy: 'Filings, records and board papers stay confidential — handled only by named specialists.',
  },
  {
    title: 'Regulatory fluency',
    copy: 'BRELA, TRA and Companies Act requirements filed accurately and on time.',
  },
  {
    title: 'Books you can trust',
    copy: 'Accounting that stands up to audits, investors and tax reviews.',
  },
  {
    title: 'Humans, not tickets',
    copy: 'Advisors who know your entity — not a rotating support queue.',
  },
]

const clients = [
  'MERIDIAN',
  'ZANZARO',
  'NORTHBRIDGE',
  'SERENGETI CO.',
  'ATLAS HOLDINGS',
  'KILIMA GROUP',
  'VANTAGE',
  'BLUEHARBOR',
]

export function TrustMarquee() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-x divide-y divide-border py-2 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0 sm:divide-y-0 sm:py-12 lg:grid-cols-4 lg:gap-8 lg:py-14">
        {pillars.map((item) => (
          <div key={item.title} className="py-5 sm:border-t-0 sm:py-0 lg:py-0">
            <h2 className="font-display text-[0.9375rem] font-semibold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-border py-6 sm:py-8">
        <p className="mb-4 text-center text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:mb-5 sm:text-[0.6875rem] sm:tracking-[0.18em]">
          Trusted across Tanzania
        </p>
        <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="whitespace-nowrap font-display text-sm font-semibold tracking-[0.06em] text-foreground/25 sm:text-base"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
