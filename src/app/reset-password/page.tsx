'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Banner from '@/images/signup.png'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const ResetPasswordContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const email = searchParams.get('email')
  const [isPasswordReset, setIsPasswordReset] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password: data.newPassword,
            password_confirmation: data.confirmPassword,
            token,
          }),
        },
      )

      if (response.ok) {
        Swal.fire({
          title: 'Your password has been reset successfully!',
          text: 'Contiune to login page.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Redirect to the login page
          router.push('/sign-in') // Assuming you have a /login page
        })
        setIsPasswordReset(true)
      } else {
        setIsPasswordReset(false)
        console.error('Password reset failed')
      }
    } catch (error) {
      setIsPasswordReset(false)
      console.error('Error resetting password:', error)
    } finally {
      setIsLoading(false)
    }
    if (token && email) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!token || !email) {
      router.push('/forgot-password')
    } else {
      setIsLoading(false)
    }
  }, [token, email, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Container>
            <div className="text-center">Loading...</div>
          </Container>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero card */}
        <div className="">
          <div className="relative h-[546px] sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={Banner}
                alt={'contact'}
                width={1440}
                height={546}
              />
            </div>
            <div className="absolute inset-y-[200px] h-96 w-full bg-gradient-to-t from-gray-900 mix-blend-multiply" />

            <div className="relative px-6 pt-[300px]">
              <div className="flex content-end">
                <div className="px-6 lg:px-8">
                  <h1 className="text-[40px] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Reset your password to continue watching.
                    </span>
                  </h1>
                  <p className="mt-8 text-lg text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <Container>
          <div className="isolate mt-[110px] bg-[#F3F3F3] px-6 py-12 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Reset Password
              </h2>
              <p className="mt-10 text-xl font-medium text-[#767676]">
                Enter your new password to reset your account password.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-16 sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                <div>
                  <div className="mt-10">
                    <input
                      type="password"
                      {...register('newPassword', {
                        required: 'New password is required',
                        minLength: {
                          value: 8,
                          message:
                            'Password must be at least 8 characters long',
                        },
                      })}
                      placeholder="New Password"
                      autoComplete="new-password"
                      className={`block w-full rounded-md border-0 bg-transparent px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 ${
                        errors.newPassword ? 'ring-red-500' : ''
                      }`}
                    />
                    {errors.newPassword && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.newPassword.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mt-10">
                    <input
                      type="password"
                      {...register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                          value === getValues('newPassword') ||
                          'Passwords do not match',
                      })}
                      placeholder="Confirm Password"
                      autoComplete="confirm-password"
                      className={`block w-full rounded-md border-0 bg-transparent px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6 ${
                        errors.confirmPassword ? 'ring-red-500' : ''
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.confirmPassword.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  className="w-1/2 rounded-md bg-[#007BFF] px-10 py-4 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                >
                  Reset Password
                </button>
              </div>
            </form>
            
            
            <div className="mt-5 flex justify-end">
              <div className="flex gap-2">
                <div className="text-xl font-medium text-[#767676]">
                  Remember password?
                </div>
                <Link
                  href="/sign-in"
                  className="inline-block text-xl font-bold text-[#F2970F]"
                >
                  Go back to sign in
                </Link>
              </div>
            </div>
          </div>
        </Container>

        <Newsletter />

        <div className="h-[193px] bg-[#89CFF1] py-10 text-center">
          <p className="text-xl leading-[46px]">
            Visit us at The Nailab Accelerator, 4th Floor, Bishop Magua Center,{' '}
            <br /> Ngong Road, Nairobi, Kenya, Africa
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Container>
              <div className="text-center">Loading...</div>
            </Container>
          </main>
          <Footer />
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  )
}
