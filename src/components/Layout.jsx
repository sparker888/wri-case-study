'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Head from 'next/head'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import gravitalLogo from '@/images/gravital.png'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { ThemeSelector } from '@/components/ThemeSelector'
import PlausibleProvider from 'next-plausible'
import ContactForm from '@/components/ContactForm'

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  )
}

function Header() {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent',
      )}
    >
      <div className="flex mr-6 lg:hidden">
        <MobileNavigation />
      </div>
      <div className="relative flex items-center flex-grow basis-0">
        <Link href="/" aria-label="Home page" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src={gravitalLogo}
              alt="Logo"
              width={35}
              height={35}
              className="mr-4"
            />
            <span className="text-2xl font-logo text-sky-600">Gravital</span>
            <span className="ml-1 text-2xl font-logo text-amber-600">
              Digital
            </span>
          </div>
        </Link>
      </div>
      <div className="relative flex justify-end gap-6 basis-0 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <Link
          href="https://github.com/sparker888"
          className="group"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-6 h-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  )
}

export function Layout({ children }) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'

  return (
    <PlausibleProvider domain="gravital-wri-case-study.netlify.app">
      <div className="flex flex-col w-full">
        <Head>
          <title>Gravital Digital</title>
          <meta
            name="description"
            content="A Gravital Digital Case Study on the WRI 2024 Conference event website."
          />
          <meta property="og:title" content="Gravital Digital - Case Study" />
          <meta
            property="og:description"
            content="A Gravital Digital Case Study for the WRI 2024 Conference event website."
          />
          <meta property="og:image" content="/wri-case-study-website.jpg" />
          <meta
            property="og:url"
            content="https://gravital-wri-case-study.netlify.app/"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gravital Digital - Case Study" />
          <meta
            name="twitter:description"
            content="A Gravital Digital Case Study on the WRI 2024 Conference event website."
          />
          <meta name="twitter:image" content="/wri-case-study-website.jpg" />
        </Head>
        <Header />

        {isHomePage && <Hero />}

        <div className="relative flex justify-center flex-auto w-full mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
          {/* Left navigation */}
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 hidden w-px top-28 bg-slate-800 dark:block" />
            <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
              <Navigation />
            </div>
          </div>

          {/* Main content and right navigation */}
          <div className="flex flex-auto min-w-0 px-4 sm:px-6 xl:px-8">
            {children}
          </div>
        </div>

        {/* Full-width ContactForm */}
        <div className="w-full mt-16">
          <ContactForm />
        </div>
      </div>
    </PlausibleProvider>
  )
}