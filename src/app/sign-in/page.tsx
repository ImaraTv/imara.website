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
