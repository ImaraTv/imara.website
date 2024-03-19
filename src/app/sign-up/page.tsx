import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Image5 from "@/images/image5.png"
import Banner from "@/images/signup.png"
import Image from "next/image"
import Link from 'next/link'

export default function SignUp() {
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
                                        <span className="block text-white">Personalize your films by signing up now!</span>
                                    </h1>
                                    <p className="mt-8 text-sm md:text-lg text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
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
                            <h2 className="text-xl md:text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl">Create Account</h2>
                        </div>
                        <form action="#" method="POST" className="mt-16 sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder='User name'
                                            autoComplete="given-name"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder='Phone number or Email'
                                            autoComplete="family-name"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                                <div>
                                    <div className="mt-10">
                                        <input
                                            type="password"
                                            name="first-name"
                                            id="first-name"
                                            placeholder='Set password'
                                            autoComplete="given-name"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-10">
                                        <input
                                            type="password"
                                            name="last-name"
                                            id="last-name"
                                            placeholder='Repeat password'
                                            autoComplete="family-name"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#007BFF] px-10 py-2.5 text-center text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className='mt-5 flex justify-end'>
                            <div className='flex gap-2'>
                                <div className='font-medium text-[#767676] text-xs md:text-xl'>Have an account?</div>
                                <Link
                                    href="/sign-in"
                                    className="inline-block font-bold text-[#F2970F] text-xs md:text-xl"
                                >
                                    Login
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
