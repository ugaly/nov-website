import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  variant = 'dark',
  className,
  size = 'default',
}: {
  variant?: 'dark' | 'white'
  className?: string
  size?: 'default' | 'lg' | 'hero'
}) {
  const sizeClass =
    size === 'hero'
      ? 'h-11 w-auto sm:h-14 lg:h-[4.25rem]'
      : size === 'lg'
        ? 'h-10 w-auto sm:h-11'
        : 'h-8 w-auto sm:h-9 lg:h-10'

  return (
    <span className={cn('inline-flex items-center', className)}>
      <Image
        src={variant === 'white' ? '/logo-white.png' : '/logo-dark.png'}
        alt="November 28 corporate services"
        width={333}
        height={131}
        priority
        className={cn(sizeClass, 'object-contain object-left')}
      />
      <span className="sr-only">November 28 Corporate Services</span>
    </span>
  )
}
