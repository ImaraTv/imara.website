import { Roboto } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import React from "react";
import CookieConsentComponent from '@/components/CookieConsent';

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
      <body className="flex h-full flex-col">
        {children} 
        <CookieConsentComponent />
      </body>
    </html>
  )
}
