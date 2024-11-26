import { Roboto } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import '@/styles/global.css'
import { type Metadata, type Viewport } from 'next'
import React from "react";
import { Suspense } from 'react'
import CookieConsentComponent from '@/components/CookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: {
    template: '%s - ImaraTv',
    default: 'ImaraTv - Bridging Entertainment & Education',
  },
  description: 'Bridging Entertainment & Education.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico' }
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'application-name': 'ImaraTv',
    'apple-mobile-web-app-title': 'ImaraTv',
    'theme-color': '#000000',
    'msapplication-navbutton-color': '#000000',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-starturl': '/',
  }
}


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
      <body className={clsx(
        'flex h-full flex-col',
        roboto.className,
      )}>
        <Suspense fallback={null}>
          <CookieConsentComponent />
        </Suspense>
        {children}
        <GoogleAnalytics gaId="G-WZXW1066ZR" />
      </body>
    </html>
  )
}
