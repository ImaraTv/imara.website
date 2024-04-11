import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { Hero } from '@/components/Hero'
import { CarouselHome } from '@/components/Carousel'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import Image5 from '@/images/image5.png'
import About1 from '@/images/about1.png'
import About2 from '@/images/about2.png'
import About3 from '@/images/about.jpg'
import Image3 from '@/images/vector2.svg'

import logo1 from '@/images/partners/hnn.svg'
import logo2 from '@/images/partners/ic.svg'
import logo3 from '@/images/partners/iapb.svg'
import logo4 from '@/images/partners/lf.svg'
import logo5 from '@/images/partners/pepfar.svg'

import CEO from '@/images/members/maina.png'
import CTO from '@/images/members/fred.png'
import Duncan from '@/images/members/Duncan.png'
import Image from 'next/image'

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

const people = [
  {
    name: 'Stephen Maina',
    role: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Fred Onyango',
    role: 'CTO',
    imageUrl: CTO,
  },
  {
    name: 'Duncan M',
    role: 'Content Lead',
    imageUrl: Duncan,
  },
]

const cardStyle = {
  boxShadow: '0px 4px 11px 1px #00000040',
}

export default function About() {
  return (
    <>
      <Header2 />
      <main>
        <div className="relative isolate overflow-hidden bg-[#FCFCFC]">
          <Image
            src={Image3}
            alt={'chane'}
            className="absolute right-1/4 top-0 -z-10 hidden h-auto w-[704px] origin-top-right sm:-mr-80 md:block lg:-mr-96"
          />
          <div className="mx-[16px] max-w-[1440px] md:mx-[47px]">
            <div className="mx-auto max-w-2xl pt-40 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-[20px] font-bold text-gray-900 sm:text-6xl md:text-[40px] lg:col-span-2 xl:col-auto">
                Imara TV: Bridging Entertainment and Education
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Imara.Tv will make you laugh and learn. Watch positive
                  wholesome content that makes the world a better place”
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
                  >
                    Watch our videos
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3.5 py-1 text-xs font-semibold leading-6 text-gray-900 ring-2 ring-[#007BFF] md:text-sm"
                  >
                    Become a creator
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
                      About Imara Tv
                    </p>
                    <p className="mt-[51px] text-lg leading-8 text-gray-600">
                      Did you know that in Kenya, 42% of all new HIV infections
                      occur among adolescents and young people aged 15-24 ?
                      Moreover, over 300,000 girls aged between 10-19 becomes
                      pregnant every year!<br></br> <br></br> Our research shows
                      this is caused mainly by poverty and ignorance. Lack of
                      jobs lead idle young people to engage in risky activities
                      like prostitution to earn an income which exposes them to
                      the virus.
                    </p>
                  </div>
                </div>
                <Image
                  src={About1}
                  alt={'about'}
                  className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={667}
                  height={409}
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:ml-auto lg:pl-2 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                      Imara Tv kills these two birds with one stone:
                      edutainment. Imara TV educates the public using
                      entertainment films.
                    </p>
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                      What&#39;s even better, we harness the creative talents of
                      young people to produce short funny films that engage our
                      audience in continuous learning.
                    </p>
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                      This creates sustainable artistic jobs for out of work
                      youth in the film industry paid for by advertising.
                    </p>
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                      The young people also own the films as digital assets for
                      their economic empowerment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <Image
                    src={About2}
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
                    <p className="mt-[51px] text-lg leading-8 text-gray-600">
                    Imara.Tv is the outcome of a hackathon sponsored by UNFPA, the United Nations Population Fund and the Kenya Government Ministry of Health in collaboration with Nailab, a technology driven business incubator. <br></br> <br></br> Imara.Tv is one of four winning social entreprices from the I.AM iAccelerator co-creation event in August 2016 to scale up access to youth friendly sexual reproductive health (SRH) information and services.<br></br> Read more on the <a className='text-[#F54029]' href="https://kenya.unfpa.org/en/news/unfpa-announces-winners-innovation-accelerator-focused-promoting-youth-sexual-reproductive">UNFPA-K website</a>
                    </p>
                  </div>
                </div>
                <Image
                  src={About3}
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

        <div className="bg-[#F3F3F3] py-24 sm:py-32">
          <Container>
            <div className="mx-auto">
              <div className="mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Imara Tv core members
                </h2>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-40 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <Image
                      width={286}
                      height={192}
                      className="aspect-[3/2] w-full rounded-2xl object-cover"
                      src={person.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {person.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>

        <Container>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto">
              <div className="mx-auto">
                <div className="flex items-center gap-4">
                  <h2 className="text-[20px] font-bold text-[#2B2B2B] md:text-[40px]">
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

                <div className="mx-auto mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-6 sm:gap-x-10 md:gap-x-8 lg:mx-0 lg:grid-cols-5">
                  <div className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]">
                    <Image
                      className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                      src={logo1}
                      alt={'Transistor'}
                      width={158}
                      height={48}
                    />
                  </div>
                  <div className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]">
                    <Image
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={logo2}
                      alt={'Transistor'}
                      width={158}
                      height={48}
                    />
                  </div>
                  <div className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]">
                    <Image
                      className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                      src={logo3}
                      alt={'Transistor'}
                      width={158}
                      height={48}
                    />
                  </div>
                  <div className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]">
                    <Image
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={logo4}
                      alt={'Transistor'}
                      width={158}
                      height={48}
                    />
                  </div>
                  <div className="flex h-[90px] w-[180px] items-center justify-center bg-white px-[14px] text-center shadow-lg md:h-[126px] md:w-[239px] md:px-[28px]">
                    <Image
                      className="col-span-2 max-h-12 w-full object-cover lg:col-span-1"
                      src={logo5}
                      alt={'Transistor'}
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
        </Container>
      </main>
      <Footer />
    </>
  )
}
