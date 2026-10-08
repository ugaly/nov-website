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
    </section>
  )
}
