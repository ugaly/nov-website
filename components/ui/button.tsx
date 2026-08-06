import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent bg-clip-padding text-sm font-semibold tracking-tight whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-brand text-brand-foreground shadow-[0_1px_0_rgba(255,255,255,0.12)_inset] hover:bg-[#0d6b64] active:translate-y-px',
        ink: 'bg-ink text-ink-foreground hover:bg-ink/90 active:translate-y-px',
        outline:
          'border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5',
        'outline-light':
          'border-ink-foreground/25 bg-transparent text-ink-foreground hover:border-ink-foreground/50 hover:bg-ink-foreground/8',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'gap-1 px-0 text-brand underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 rounded-md px-5',
        sm: 'h-9 rounded-md px-3.5 text-[0.8125rem]',
        lg: 'h-12 rounded-md px-7 text-[0.9375rem]',
        xl: 'h-14 rounded-md px-8 text-base',
        icon: 'size-11 rounded-md',
        'icon-sm': 'size-9 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
