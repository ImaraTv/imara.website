"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Image5 from "@/images/image5.png"
import Banner from "@/images/1.jpg"
import Image from "next/image"
import Link from 'next/link'
import LoginForm from '@/components/Forms/LoginForm'

export default function SignIn() {
    return (
        <>
            <Header />
            <main>

                {/* Hero card */}
                <div className="">
                    <div className="relative sm:overflow-hidden h-[546px]">
                        <div className="absolute inset-0">
                            <Image
                                className="h-full w-full object-cover"
                                src={Banner}
                                alt={"contact"}
                                width={1440}
                                height={546}
                            />

                        </div>
                        <div className="absolute inset-y-[200px] w-full h-96 bg-gradient-to-t from-gray-900 mix-blend-multiply" />

                        <div className="relative px-6 pt-[300px]">
                            <div className='flex content-end'>
                                <div className='px-6 lg:px-8'>
                                    <h1 className="text-xl md:text-[40px] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Welcome back, pick right from where you left!!</span>
                                    </h1>
                                    <p className="mt-8 text-sm md:text-lg text-white">
                                        Save a film to your personal playlist and share our films with your friends.
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
                            <h2 className="text-xl md:text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl">Welcome back</h2>
                        </div>
                    
                      {/* Google Sign-In Button */}
                        <div className="mt-8 flex justify-center">
                            <a
                                href="https://imara.tv/admin/admin/oauth/google"
                                style={{ '--c-400': 'var(--primary-400)', '--c-500': 'var(--primary-500)', '--c-600': 'var(--primary-600)' }as React.CSSProperties}
                                className="fi-btn relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus-visible:ring-2 rounded-lg fi-color-custom fi-btn-color-primary fi-color-primary fi-size-md fi-btn-size-md gap-1.5 px-3 py-2 text-sm inline-grid fi-btn-outlined ring-1 text-custom-600 ring-custom-600 hover:bg-custom-400/10 dark:text-custom-400 dark:ring-custom-500"
                            >
                                <svg className="fi-btn-icon transition duration-75 h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                                <span className="fi-btn-label">Google</span>
                            </a>
                        </div>

                        <LoginForm />
                        <div className='mt-5 flex justify-end'>
                            <div className='flex gap-2'>
                                <div className='font-medium text-[#767676] text-xs md:text-xl'>Don’t have an account?</div>
                                <Link
                                    href="/sign-up"
                                    className="inline-block font-bold text-[#F2970F] text-xs md:text-xl"
                                >
                                    Create account
                                </Link>
                            </div>
                        </div>
                        <div className='mt-5 flex justify-end'>
                            <div className='flex gap-2'>
                                <div className='font-medium text-[#767676] text-xs md:text-xl'>Forgot password? </div>
                                <Link
                                    href="/forgot-password"
                                    className="inline-block font-bold text-[#F2970F] text-xs md:text-xl"
                                >
                                    Reset
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>

                <Newsletter />

                <div className="bg-[#89CFF1] h-[193px] py-4 md:py-10 px-4 text-center flex items-center justify-center">
                    <p className='text-sm md:text-xl leading-[36px] md:leading-[46px]'>Visit us at The Nailab Accelerator, 4th Floor, Bishop Magua Center, <br/> Ngong Road, Nairobi, Kenya, Africa</p>
                </div>

            </main>
            <Footer />
        </>
    )
}
