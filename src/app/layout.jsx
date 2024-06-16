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
    default:
      'The WRI 2024 Conference broke records! 🎉 Go behind the scenes of a Jamstack website redesign.🔎',
  },
  description:
    'A Gravital Digital Case Study for the redesign of the WRI 2024 Conference event website using Jamstack technology and how it drove attendance records.',
  openGraph: {
    title:
      'The WRI 2024 Conference broke records! 🎉 Go behind the scenes of a Jamstack website redesign.🔎',
    description:
      'A Gravital Digital Case Study for the redesign of the WRI 2024 Conference event website using Jamstack technology and how it drove attendance records.',
    url: 'https://gravital-wri-case-study.netlify.app/',
    type: 'website',
    images: [
      {
        url: 'https://gravital-wri-case-study.netlify.app/images/wri-case-study-website.jpg',
        width: 1200,
        height: 628,
        alt: 'The WRI 2024 Conference broke records! 🎉 Go behind the scenes of a Jamstack website redesign.🔎',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The WRI 2024 Conference broke records! 🎉 Go behind the scenes of a Jamstack website redesign.🔎',
    description:
      'A Gravital Digital Case Study for the redesign of the WRI 2024 Conference event website using Jamstack technology and how it drove attendance records.',
    image:
      'https://gravital-wri-case-study.netlify.app/images/wri-case-study-website.jpg',
  },
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
      <head>
        <title>Gravital Digital</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className="flex min-h-full bg-white dark:bg-black">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
