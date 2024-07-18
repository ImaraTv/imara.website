// src\app\email-verified\page.tsx
'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Suspense } from 'react'

const EmailVerified = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') // Access the token query parameter
  const email = searchParams.get('email') // Access the email query parameter
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          'https://imara.tv/admin/api/auth/verify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, email }),
          },
        )

        if (response.ok) {
          setIsVerified(true)
        } else {
          setIsVerified(false)
          console.error('Email verification failed')
        }
      } catch (error) {
        setIsVerified(false)
        console.error('Error verifying email:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (token && email) {
      verifyEmail()
    } else {
      setIsLoading(false)
    }
  }, [token, email])

  return (
    <>
      <Header />
      <main>
<Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
          <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
            {isLoading ? (
              <div>Loading...</div>
            ) : !isVerified ? (
              <div>Email verification failed. Please try again.</div>
            ) : (
              <>
                <div className="space-y-2 text-center">
                  <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
                  <h1 className="text-3xl font-bold">Email Verified</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Congratulations! Your email has been successfully verified. You can now proceed to login.
                  </p>
                </div>
                <Link
                  className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/sign-in"
                >
                  Go to Login
                </Link>
              </>
            )}
          </div>
        </div>
</Suspense>
      </main>
      <Footer />
    </>
  )
}

export default EmailVerified

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
