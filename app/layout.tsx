import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Figtree, Sora } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '11.28 — Company Secretarial, Accounting, Tax & Advisory',
    template: '%s | 11.28',
  },
  description:
    '11.28 is a corporate services firm in Dar es Salaam providing company formation, secretarial services, accounting, tax compliance and business advisory for SMEs, startups and corporations across Tanzania.',
  keywords: [
    'company secretarial services Tanzania',
    'company formation Dar es Salaam',
    'accounting services Tanzania',
    'tax compliance BRELA',
    'business advisory',
    'corporate compliance',
    '11.28',
  ],
  metadataBase: new URL('https://eleven-twentyeight.example'),
  openGraph: {
    title: '11.28 — Corporate Services & Compliance',
    description:
      'Company formation, secretarial services, accounting, tax compliance and business advisory in Dar es Salaam, Tanzania.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0a1018',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${figtree.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
