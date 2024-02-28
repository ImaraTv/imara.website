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
import Image5 from "@/images/image5.png"
import About1 from "@/images/about1.png"
import About2 from "@/images/about2.png"
import Image3 from "@/images/vector2.svg"

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

export default function About() {
    return (
        <>
            <Header />
            <main>

                <div className="relative isolate overflow-hidden bg-[#FCFCFC]">
                    <Image src={Image3} alt={"chane"} className="absolute top-0 right-1/4 -z-10 origin-top-right sm:-mr-80 lg:-mr-96 w-[704px] h-[593px]" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                Imara TV: Bridging Youth & Health
                                through Innovation
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-gray-600">
                                    Empowering the Online Generation with Sexual Reproductive
                                    Health Rights Education.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Watch our videos
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        Become a creator
                                    </a>
                                </div>
                            </div>
                            <Image src={Image5} width={616} height={409} alt={"image"} className="aspect-[6/5] w-full object-cover lg:max-w-none xl:row-span-2 xl:row-end-2" />
                        </div>
                    </div>
                </div>


                <div className="overflow-hidden bg-white pt-24 sm:pt-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Imara Tv</p>
                                    <p className="mt-[51px] text-lg leading-8 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <Image
                                src={About1}
                                alt={"about"}
                                className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                                width={667}
                                height={443}
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:ml-auto lg:pl-2 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-10 text-lg leading-8 text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <p className="mt-10 text-lg leading-8 text-gray-600">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="mt-10 text-lg leading-8 text-gray-600">
                                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <p className="mt-10 text-lg leading-8 text-gray-600">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image
                                    src={About2}
                                    alt={"about"}
                                    className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem]"
                                    width={667}
                                    height={443}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission & Vision</h2>
                            </div>
                            <ul
                                role="list"
                                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-20 xl:max-w-none"
                            >
                                {values.map((value) => (
                                    <li key={value.name} className="flex flex-col gap-6 xl:flex-row bg-white shadow-md px-6 py-10">
                                        <div className="flex-auto">
                                            <h3 className="text-xl font-bold leading-8 tracking-tight text-[#474747]">{value.name}</h3>
                                            <p className="mt-6 text-base leading-7 text-[#525252]">{value.bio}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
                <div className="bg-[#F3F3F3] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Imara Tv core members</h2>
                        </div>
                        <ul
                            role="list"
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                        >
                            {people.map((person) => (
                                <li key={person.name}>
                                    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-base leading-7 text-gray-600">{person.role}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className='flex gap-4 items-center'>
                                <h2 className="text-4xl font-bold text-[#2B2B2B]">
                                    Our partners and clients
                                </h2>
                                <button
                                    type="button"
                                    className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-gray-50"
                                >
                                    Partners
                                </button>
                                <div>Clients</div>
                            </div>

                            <div className="mx-auto mt-10 grid grid-cols-5 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                                <div className='w-[239px] h-[126px] bg-white shadow-lg flex text-center items-center justify-center px-[28px]'>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                                        src={logo1}
                                        alt={"Transistor"}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className='w-[239px] h-[126px] bg-white shadow-lg flex text-center items-center justify-center px-[28px]'>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={logo2}
                                        alt={"Transistor"}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className='w-[239px] h-[126px] bg-white shadow-lg flex text-center items-center justify-center px-[28px]'>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                                        src={logo3}
                                        alt={"Transistor"}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className='w-[239px] h-[126px] bg-white shadow-lg flex text-center items-center justify-center px-[28px]'>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={logo4}
                                        alt={"Transistor"}
                                        width={158}
                                        height={48}
                                    />
                                </div>
                                <div className='w-[239px] h-[126px] bg-white shadow-lg flex text-center items-center justify-center px-[28px]'>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                                        src={logo5}
                                        alt={"Transistor"}
                                        width={158}
                                        height={48}
                                    />
                                </div>

                            </div>

                            <div className="bg-white py-16 sm:py-24">
                                <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
                                    <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-20">
                                        <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">
                                            Don’t miss out on any of our content
                                        </h2>
                                        <p className="mx-auto mt-2 text-center text-lg leading-8 text-[#2B2B2B]">
                                            Subscribe to our newsletter and get personalised upskilling material today.
                                        </p>
                                        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                                            <label htmlFor="email-address" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email-address"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#3F4C5373] focus:ring-2 focus:ring-inset focus:ring-[#3F4C5373] sm:text-sm sm:leading-6"
                                                placeholder="Email"
                                            />
                                            <button
                                                type="submit"
                                                className="flex-none rounded-md bg-[#007BFF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                            >
                                                Subscribe Now
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}
