'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Suspense } from 'react'

const EmailVerifiedContent = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const email = searchParams.get('email')
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/verify`,
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
        }
      } catch (error) {
        console.error('Error verifying email:', error)
        setIsVerified(false)
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

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Verifying your email...
                </h1>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              {isVerified ? (
                <>
                  <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600" />
                  <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Email verified successfully!
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Your email has been verified. You can now{' '}
                    <Link href="/login" className="text-blue-600 hover:text-blue-500">
                      log in
                    </Link>{' '}
                    to your account.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Email verification failed
                  </h1>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    We couldn't verify your email. The verification link might be expired or
                    invalid.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const EmailVerified = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="py-16 sm:py-24">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                  <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Loading...
                  </h1>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <EmailVerifiedContent />
    </Suspense>
  )
}

export default EmailVerified

function CheckCircleIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
