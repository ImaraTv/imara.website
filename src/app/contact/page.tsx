import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CarouselHome } from '@/components/Carousel'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Image5 from "@/images/image5.png"
import About1 from "@/images/about1.png"
import About2 from "@/images/about2.png"
import Banner from "@/images/contact.png"

import logo1 from "@/images/partners/hnn.svg"
import logo2 from "@/images/partners/ic.svg"
import logo3 from "@/images/partners/iapb.svg"
import logo4 from "@/images/partners/lf.svg"
import logo5 from "@/images/partners/pepfar.svg"


import Image from "next/image"

const values = [
    {
        name: 'Mission',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'To enable the Kenyan youth get easy and safe access to information and resources on Health',
    },
    {
        name: 'Vision',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'To create celebrity stars who are positive social media influencers and role models to promote good behavior and attitude change towards health among the youth and general public.',
    },
    // More values...
]

const people = [
    {
        name: 'Stephen Maina',
        role: 'CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Fred Onyango',
        role: 'CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Duncan M',
        role: 'Content Lead',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
]

export default function Contact() {
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
                        <div className="absolute inset-y-0 right-0 w-[1200px] bg-gradient-to-l from-gray-500 mix-blend-multiply" />
                        <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                            <div className='flex justify-between'>
                                <div className=''></div>
                                <div className='px-6 lg:px-8'>
                                    <h1 className="text-[60px] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Contact us</span>
                                        <span className="block text-white">today</span>
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-lg text-3xl text-white sm:max-w-3xl">
                                        Call : +254780674252
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Form */}
                <Container>
                    <div className="isolate mt-[110px] bg-[#F3F3F3] px-6 py-24 sm:py-32 lg:px-8">
                        <div
                            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="max-w-2xl">
                            <h2 className="text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl">Talk to us now</h2>
                        </div>
                        <form action="#" method="POST" className="mt-16 sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder='Full Name'
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
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Write your message here.....'
                                            rows={4}
                                            className="block w-full bg-[#E2E2E2] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#007BFF] px-10 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>

                <Newsletter />

                <div className="bg-[#89CFF1] h-[193px] py-10 text-center">
                    <p className='text-xl leading-[46px]'>Visit us at The Nailab Accelerator, 4th Floor, Bishop Magua Center, <br/> Ngong Road, Nairobi, Kenya, Africa</p>
                </div>

            </main>
            <Footer />
        </>
    )
}
