'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type Stat = {
  end: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
}

const stats: Stat[] = [
  { end: 1200, suffix: '+', label: 'Companies assisted', duration: 2000 },
  { end: 12, suffix: ' yrs', label: 'Practice depth', duration: 1600 },
  { end: 98.7, decimals: 1, suffix: '%', label: 'On-time filings', duration: 1800 },
  { end: 4, prefix: '< ', suffix: ' hrs', label: 'First response', duration: 1400 },
]

function formatValue(value: number, decimals = 0) {
  if (decimals > 0) return value.toFixed(decimals)
  return Math.round(value).toLocaleString('en-US')
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function AnimatedStat({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  duration = 1600,
  active,
}: Stat & { active: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(end)
      return
    }

    let frame = 0
    let cancelled = false
    const start = performance.now()

    const tick = (now: number) => {
      if (cancelled) return
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(end * easeOutExpo(progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(end)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [active, end, duration])

  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block font-display text-[1.75rem] font-semibold tracking-tight tabular-nums sm:text-3xl lg:text-[2.25rem]">
          {prefix}
          {formatValue(display, decimals)}
          {suffix}
        </span>
        <span className="mt-1 block text-xs text-muted-foreground sm:mt-1.5 sm:text-sm">{label}</span>
      </dd>
    </div>
  )
}

export function AnimatedStats({ className }: { className?: string }) {
  const ref = useRef<HTMLDListElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <dl
      ref={ref}
      className={cn(
        'grid grid-cols-2 gap-x-4 gap-y-8 border-t border-border pt-8 sm:gap-8 sm:pt-10 lg:grid-cols-4',
        className,
      )}
    >
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} {...stat} active={active} />
      ))}
    </dl>
  )
}
