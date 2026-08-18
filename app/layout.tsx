import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const publicSans = localFont({
  src: [
    {
      path: './fonts/PublicSans-latin.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/PublicSans-Italic-latin.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-public-sans',
  display: 'swap',
})

const newsreader = localFont({
  src: [
    {
      path: './fonts/Newsreader-latin.woff2',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: './fonts/Newsreader-Italic-latin.woff2',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'November 28 — Company Secretarial, Accounting, Tax & Advisory',
    template: '%s | November 28',
  },
  description:
    'November 28 is a corporate services firm in Dar es Salaam providing company formation, secretarial services, accounting, tax compliance and business advisory for SMEs, startups and corporations across Tanzania.',
  keywords: [
    'company secretarial services Tanzania',
    'company formation Dar es Salaam',
    'accounting services Tanzania',
    'tax compliance BRELA',
    'business advisory',
    'corporate compliance',
    'November 28',
  ],
  metadataBase: new URL('https://eleven-twentyeight.example'),
  openGraph: {
    title: 'November 28 — Corporate Services & Compliance',
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
    <html lang="en" className={`light ${publicSans.variable} ${newsreader.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
