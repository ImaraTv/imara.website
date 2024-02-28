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
import Image3 from "@/images/vector2.svg"
import Image from "next/image"

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

            </main>
            {/* <Footer /> */}
        </>
    )
}
