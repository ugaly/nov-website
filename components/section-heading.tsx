import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  invert = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  invert?: boolean
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'text-[0.6875rem] font-semibold uppercase tracking-[0.16em]',
          invert ? 'text-brand-muted' : 'text-brand',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-2.5 text-balance font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight sm:mt-3 sm:text-[1.85rem] lg:text-[2.125rem]',
          invert ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-3 max-w-xl text-pretty text-sm leading-relaxed sm:mt-4 sm:text-[0.975rem]',
            invert ? 'text-ink-foreground/58' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
