import { Roboto } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: {
    template: '%s - ImaraTv',
    default: 'ImaraTv - Changing Africa, One film at a time',
  },
  description:
    'Changing Africa, One film at a time.',
}
const roboto = Roboto({
  weight: ["100","300","400","500","700","900"],
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
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
