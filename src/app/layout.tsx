import { Roboto } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import '@/styles/global.css'
import { type Metadata } from 'next'
import React from "react";
import { Suspense } from 'react'
import CookieConsentComponent from '@/components/CookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    template: '%s - ImaraTv',
    default: 'ImaraTv - Bridging Entertainment & Education',
  },
  description:
    'Bridging Entertainment & Education.',
}

const ubuntu = Ubuntu({
  weight: ["300","400","500","700"],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        ubuntu.className,
      )}
    >
      <Head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ImaraTv" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="flex h-full flex-col">
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        <CookieConsentComponent />
      </body>
      <GoogleAnalytics gaId="G-WZXW1066ZR" />
    </html>
  )
}
