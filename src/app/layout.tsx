import { Roboto } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import { Montserrat } from 'next/font/google'
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
  description: 'Bridging Entertainment & Education.',
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ImaraTv',
  },
  applicationName: 'ImaraTv',
  formatDetection: {
    telephone: false,
  },
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

const ubuntu = Ubuntu({
  weight: ["300","400","500","700"],
  subsets: ['latin'],
  display: 'swap',
})
const montserrat = Montserrat({
  weight: ["300","400","500","600","700"],
  subsets: ['latin'],
  display: 'swap',
})
const roboto = Roboto({
  weight: ["100","300","400","500","700","900"],
    style: ["normal" ,"italic"],
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
        roboto.className,
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
      <body className={clsx(
        'flex h-full flex-col',
        roboto.className,
      )}>
      
        <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        <CookieConsentComponent />
      </body>
      <GoogleAnalytics gaId="G-WZXW1066ZR" />
    </html>
  )
}
