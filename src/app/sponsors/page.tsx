'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { Container } from '@/components/Container'
import Image5 from '@/images/image5.png'
import Sponsors1 from '@/images/Sponsors_Page_Tile_1.jpg'
import Sponsors2 from '@/images/SPonsors_Page_Tile_2.jpeg'
import Sponsors3 from '@/images/Sponsors_Page_Tile_3.jpeg'
import Image3 from '@/images/vector2.svg'
import star from '@/images/imara_star.ico'
import { Button } from '@/components/Button'
import logo1 from '@/images/partners/gov.svg'
import logo2 from '@/images/partners/icrh.png'
import logo3 from '@/images/partners/nailab.webp'
import logo4 from '@/images/partners/ukaid.png'
import logo5 from '@/images/partners/unfpa.png'
import logo6 from '@/images/partners/unhabitat.png'
import logo7 from '@/images/partners/actionaid.png'
import logo8 from '@/images/partners/crowdsourseafrica.jpg'
import logo from '@/images/logos/logo.png'



import Image from 'next/image'
import { StaticImageData } from 'next/image'

const values = [
  {
    name: 'Mission',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'To harness the power of digital innovations to create engaging, entertaining and educational content, that fosters a culture of continuous learning among our viewers',
  },
  {
    name: 'Vision',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'A safe, prosperous and healthy future for all',
  },
  // More values...
]


const partners = [
  {
    id: 1,
    image: logo1,
    url: 'http://www.parliament.go.ke',
  },
  {
    id: 2,
    image: logo2,
    url: 'https://www.icrhk.org/',
  },
  {
    id: 3,
    image: logo3,
    url: 'https://nailab.co/',
  },
  {
    id: 4,
    image: logo4,
    url: 'https://www.ukaiddirect.org/',
  },
  {
    id: 5,
    image: logo5,
    url: 'https://www.unfpa.org/',
  },
  {
    id: 6,
    image: logo6,
    url: 'https://unhabitat.org/',
  },
  {
    id: 7,
    image: logo7,
    url: 'https://actionaid-kenya.org/',
  },
  {
    id: 8,
    image: logo8,
    url: 'https://www.facebook.com/crowdsourceafrica/',
  },
]

const cardStyle = {
  boxShadow: '0px 4px 11px 1px #00000040',
}

export default function About() {
  let [isOpen, setIsOpen] = useState(false)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const openModal = (file: File) => {
    setSelectedFile(file)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedFile(null)
  }

  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])
  return (
    <>
      <Header2 />
      <main>
        <div className="relative isolate overflow-hidden bg-[#FCFCFC]">
          <Image
            src={Image3}
            alt={'chane'}
            className="absolute top-0 -z-10 hidden h-auto w-[704px] origin-top-right md:block right-0"
          />
          <div className="mx-[16px] max-w-[1440px] md:mx-[47px]">
            <div className="mx-auto max-w-2xl pt-40 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-[20px] font-bold text-gray-900 sm:text-6xl md:text-[40px] lg:col-span-2 xl:col-auto">
              Advertise your goods and services on our films.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                Do you have a product, service or message you want to share with our viewers? 
                Showcase your brand to a targeted audience and attract more customers to grow your business. 
                Sign up as a Sponsor today and let your brand shine
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/sign-up"
                    className="rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
                  >
                    Sponsor a Film
                  </a>
                  <a
                    href="/creators"
                    className="rounded-md px-3.5 py-2 text-xs font-semibold leading-6 text-gray-900 ring-2 ring-[#007BFF] md:text-sm"
                  >
                    View Our Creators
                  </a>
                </div>
              </div>
              <Image
                src={Image5}
                width={616}
                height={409}
                alt={'image'}
                className="w-full object-cover xl:row-span-2 xl:row-end-2"
              />
            </div>
          </div>
        </div>

        <Container>
          <div className="overflow-hidden bg-white pt-24 sm:pt-32">
            <div className="mx-auto">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      For Businesses
                    </p>
                    <p className="mt-[51px] text-lg leading-8 text-gray-600">
                      <div className='flex'>
                          <Image src={star} alt={''}>
                            </Image> Boost your business visibility in one or more countries.
                      </div> <br></br>
                      <div className='flex'><Image src={star} alt={''}>
                      </Image> Build strong customer loyalty and brand recoginition.</div> <br></br>
                      <div className='flex'><Image src={star} alt={''}>
                      </Image> Drive up sales with compelling Calls to Action.</div> <br></br>
                      <div className='flex'><Image src={star} alt={''}>
                      </Image> Highlight your CSR initiatives effectively.</div> <br></br>

                    </p>
                  </div>
                </div>  
                <Image
                  src={Sponsors1}
                  alt={'about'}
                  className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={667}
                  height={409}
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white">
            <div className="mx-auto max-w-100 px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:ml-20 lg:pl-2 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        For Non-Profit Organizations
                        </p>
                        <p className="mt-[51px] text-lg leading-8 text-gray-600">
                        <div className='flex'><Image src={star} alt={''}>
                        </Image> Highlight your impact and elevate your brand visibility.</div> <br></br>
                        <div className='flex'><Image src={star} alt={''}>
                        </Image> Amplify public awareness of your advocacy message.</div> <br></br>
                        <div className='flex'><Image src={star} alt={''}>
                        </Image> Raise more donations with effective Calls To Action.</div> <br></br>
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <Image
                    src={Sponsors2}
                    alt={'about'}
                    className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem]"
                    width={667}
                    height={443}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white">
            <div className="mx-auto">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      For National and Local Governments
                    </p>
                    <p className="mt-[51px] text-lg leading-8 text-gray-600">
                      <div className='flex'><Image src={star} alt={''}>
                      </Image> Educate the public about government policies.</div> <br></br>
                      <div className='flex'><Image src={star} alt={''}>
                      </Image> Raise awareness on crucial social issues.</div> <br></br>
                      <div className='flex'>
                        <div>
                            <Image 
                                src={star} alt={''}>
                            </Image>
                        </div>
                        <div><p>Showcase public projects progress to promote public accountability.</p></div>
                      </div> <br></br>

                    </p>
                  </div>
                </div>
                <Image
                  src={Sponsors3}
                  alt={'about'}
                  className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={667}
                  height={409}
                />
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Mission & Vision
                </h2>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-20 xl:max-w-none"
              >
                {values.map((value) => (
                  <li
                    key={value.name}
                    className="flex flex-col gap-6 bg-white px-6 py-10 xl:flex-row"
                    style={cardStyle}
                  >
                    <div className="flex-auto">
                      <h3 className="text-[20px] font-bold text-[#474747]">
                        {value.name}
                      </h3>
                      <p className="mt-[25px] text-[18px] text-[#525252]">
                        {value.bio}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

    
        <Container>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto">
              <div className="mx-auto">
                <div className="flex items-center gap-4">
                  <h2 className="text-[20px] font-bold text-[#2B2B2B] md:text-[40px]">
                    Our Sponsors
                  </h2>

                  <Button href="https://teststudio.imara.tv/admin/register?r=sponsor" color="blue" className="hidden md:flex">
              <span>
                Become a Sponsor
              </span>
            </Button>
                </div>

                <div className="mx-auto mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-6 sm:gap-x-10 md:gap-x-8 lg:mx-0 lg:grid-cols-5">
                  {partners.map((partner) => (
                    <a href={partner.url} key={partner.id} target='_blank'>
                    <div
                      
                      className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]"
                    >
                        <Image
                          className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                          src={partner.image}
                          alt={'Transistor'}
                          width={158}
                          height={48}
                        />
                    </div>
                      </a>
                  ))}
                </div>

                <div className="bg-white py-16 sm:py-24">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
                    <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-20">
                      <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">
                        Don’t miss out on any of our content
                      </h2>
                      <p className="mx-auto mt-2 text-center text-lg leading-8 text-[#2B2B2B]">
                        Subscribe to our newsletter and get personalised
                        upskilling material today.
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
                          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-[#3F4C5373] focus:ring-2 focus:ring-inset focus:ring-[#3F4C5373] sm:text-sm sm:leading-6"
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
        </Container>
      </main>
      <Footer />
    </>
  )
}