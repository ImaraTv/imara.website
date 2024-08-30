"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Image5 from '@/images/image5.png'
import Banner from '@/images/signup.png'
import Image from 'next/image'
import Link from 'next/link'

type FormData = {
  email: string
  url: string
}

export default function ForgotPassword() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>()

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        'https://teststudio.imara.tv/api/auth/forgot-password',
        {
          ...data,
          url: 'https://imara.tv/reset-password',
        },
      )
      // Handle successful registration
      console.log(response.data)

      // Show a success message using SweetAlert
      Swal.fire({
        title: 'Reset password link sent Successfully',
        text: 'Contiune to login.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the login page
        router.push('/verify-email') // Assuming you have a /login page
      })
    } catch (error) {
      // Handle registration error
      console.error(error)
      Swal.fire({
        title: 'Form submission Failed',
        text: 'An error occurred during form submission. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    }
  }

  return (
    <>
      <Header />
      <main>
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
                Forgot password
              </h2>
              <p className="mt-10 text-xl font-medium text-[#767676]">
                We will send an email to your email, enter your email to set
                your new password.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-16 sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                <div>
                  <div className="mt-10">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                      {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.type === 'required'
                          ? 'Email is required'
                          : 'Invalid email address'}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mt-10 flex justify-end">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#007BFF] px-10 py-4 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Forget password
                    </button>
                  </div>
                </div>
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
    </>
  )
}
