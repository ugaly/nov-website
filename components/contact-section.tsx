'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Clock, CircleCheck, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  'Company Formation',
  'Company Secretarial',
  'Accounting Services',
  'Tax Compliance',
  'Financial Reporting',
  'Business Advisory',
  'Full retained package',
  'Other',
]

const contactInfo = [
  { icon: MapPin, label: 'Office', value: 'Morocco Square, Dar es Salaam' },
  { icon: Mail, label: 'Email', value: 'companie@companies.co.tz', href: 'mailto:companie@companies.co.tz' },
  { icon: Phone, label: 'Phone', value: '+255 700 000 000', href: 'tel:+255700000000' },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri · 08:00 – 17:00 EAT' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad scroll-mt-20 bg-white sm:scroll-mt-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Form first on mobile for conversion */}
        <div className="order-1 border border-border bg-background p-5 sm:p-8 lg:order-2">
          {submitted ? (
            <div className="flex min-h-[20rem] flex-col items-center justify-center text-center sm:min-h-[24rem]">
              <CircleCheck className="size-10 text-brand" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                Message received.
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                A specialist will respond with next steps — typically within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-brand hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Request a consultation
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name" required>
                  <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                </Field>
                <Field label="Company" htmlFor="company">
                  <input id="company" name="company" placeholder="Acme Ltd." className={inputClass} />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+255 700 000 000"
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field label="Service" htmlFor="service" required>
                <select id="service" name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="How can we help?" htmlFor="message" required>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your company stage and what you need…"
                  className={`${inputClass} resize-none`}
                />
              </Field>
              <button type="submit" className="btn-primary mt-1">
                Send request
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          )}
        </div>

        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need. Clear next steps back."
            description="Share a short brief — formation, cleanup, tax, or advisory. A specialist replies, not a generic inbox."
          />

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={1.75} />
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm font-medium transition-colors hover:text-brand"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden border border-border sm:mt-10">
            <iframe
              title="November 28 office — Morocco Square, Dar es Salaam"
              src="https://maps.google.com/maps?q=Morocco%20Square%2C%20Dar%20es%20Salaam%2C%20Tanzania&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-44 w-full grayscale-[40%] sm:h-48"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-sm border border-border bg-white px-3.5 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/55 focus:border-brand focus:ring-2 focus:ring-brand/12 sm:text-sm'

function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      {children}
    </div>
  )
}
