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
import Image7 from "@/images/actors.png"
import Image3 from "@/images/vector2.svg"

import Image from "next/image"
import { Newsletter } from '@/components/Newsletter'

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

const cardStyle = {
    boxShadow: '0px 7px 18px 4px #00000021'
};

export default function Actors() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <div className="relative isolate overflow-hidden bg-[#FCFCFC]">
                    <Image src={Image3} alt={"chane"} className="absolute top-0 right-1/4 -z-10 origin-top-right sm:-mr-80 lg:-mr-96 w-[704px]" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                We are better together!
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
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
                            <Image src={Image7} width={616} height={409} alt={"image"} className="aspect-[6/5] w-full object-cover lg:max-w-none xl:row-span-2 xl:row-end-2" />
                        </div>
                    </div>
                </div>

                {/* Team */}
                <Container>
                    <div className="mt-6 py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
                            <div className="max-w-2xl">
                                <h2 className="text-[20px] md:text-3xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">All Actors</h2>
                                <p className="mt-4 text-sm md:text-lg leading-8 text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <ul
                                role="list"
                                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                            >
                                {people.map((person) => (
                                    <li key={person.name} className="rounded-[5px] pb-10" style={cardStyle}>
                                        <img className="h-48 w-full rounded-t-[5px] object-cover md:h-56 shadow-xl" src={person.imageUrl} alt="" />
                                        <h3 className="mt-6 px-8 text-xl md:text-2xl font-bold tracking-tight text-[#474747]">{person.name}</h3>
                                        <p className="text-sm md:text-lg mb-7 px-8 font-medium text-[#474747]">{person.role}</p>
                                        <a
                                            href="#"
                                            className="mx-8 rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            View profile
                                        </a>

                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='mt-10 md:mt-20 flex items-center justify-end text-[#F2970F] text-sm md:text-[24px] font-bold'>
                            <div className='flex gap-2 items-center'>
                                <h2>Load full list</h2>
                                <svg className='w-6 md:w-[24px] h-6 md:h-[24px]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="isolate mt-20 md:mt-[110px] bg-[#F3F3F3] px-6 py-12 lg:px-8">
                    <Container>
                    <div className="flex justify-center">
                        <h2 className="text-xl md:text-[40px] font-semibold text-gray-900 sm:text-4xl">Become an actor</h2>
                    </div>
                    <form action="#" method="POST" className="mt-16 sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-[52px]">
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
                                <div className="mt-[52px]">
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
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-[52px]">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder='Country of origin'
                                        autoComplete="given-name"
                                        className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-[52px]">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        placeholder='What else can you do?'
                                        autoComplete="family-name"
                                        className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-[52px]">
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="account-number"
                                            id="account-number"
                                            className="block w-full bg-transparent rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Upload your picture"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg className="h-5 w-5 text-[#F2970F]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="mt-[52px]">
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="account-number"
                                            id="account-number"
                                            className="block w-full bg-transparent rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Upload some of your work"
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg className="h-5 w-5 text-[#F2970F]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-[#007BFF] px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    </Container>
                </div>


                <Newsletter />

            </main>
            <Footer />
        </>
    )
}
