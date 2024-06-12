import clsx from 'clsx'
import localFont from 'next/font/local'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css' // Make sure this imports your global CSS where the Adobe Fonts are linked

// Use local version of Interstate Ultra Black so that we can use OpenType features
const tagline = localFont({
  src: '../fonts/interstate-ultra-black.woff',
  display: 'swap',
  variable: '--font-tagline',
})

// Use local version of Interstate Ultra Black so that we can use OpenType features
const display = localFont({
  src: '../fonts/interstate-black.woff',
  display: 'swap',
  variable: '--font-display',
})

// Use local version of Myriad Pro Bold so that we can use OpenType features
const logo = localFont({
  src: '../fonts/myriad-pro-bold.woff',
  display: 'swap',
  variable: '--font-logo',
})

// Use local version of Myriad Pro so that we can use OpenType features
const sans = localFont({
  src: '../fonts/myriad-pro.woff',
  display: 'swap',
  variable: '--font-sans',
})

// Use local version of Myriad Pro so that we can use OpenType features
const body = localFont({
  src: '../fonts/open-sans.woff',
  display: 'swap',
  variable: '--font-body',
})

// Use local version of Insterstate so that we can use OpenType features
const header = localFont({
  src: '../fonts/interstate.woff',
  display: 'swap',
  variable: '--font-header',
})

export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'WRI 2024 Website.',
  },
  description:
    'The Website built with Jamstack by Gravital Digital.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        logo.variable,
        display.variable,
        tagline.variable,
        sans.variable,
        body.variable,
        header.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-black">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
