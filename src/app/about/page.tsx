'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { Container } from '@/components/Container'
import { Faq2 } from '@/components/Faq2'
import Image5 from '@/images/About_Page_Top_Banner.png'
import About1 from '@/images/About_Tile_1.jpg'
import About2 from '@/images/About_Page_Tile_2.jpg'
import About3 from '@/images/About_page_tile_3.jpg'
import Image3 from '@/images/vector2.svg'
import { Button } from '@/components/Button'

import CEO from '@/images/members/stevemaina.jpg'
import CTO from '@/images/members/fred.png'
import Emmah from '@/images/members/emmah.jpg'
import Founder from '@/images/members/founder.jpg'
import Fred from '@/images/members/fred.jpeg'
import Mercy from '@/images/members/cfo.jpg'
import Jerusha from '@/images/members/jerusha.jpeg'
import Ruth from '@/images/members/ruth.jpeg'
import Tony from '@/images/members/tony.jpeg'
import Sammy from '@/images/members/sammymwangangi.jpg'

import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { Newsletter } from '@/components/Newsletter'

const values = [
  {
    name: 'Mission',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'To harness the power of digital innovations to create engaging, entertaining and educational content that fosters a culture of continuous learning among our viewers',
  },
  {
    name: 'Vision',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'A safe, prosperous and healthy future for all.',
  },
  // More values...
]

interface File {
  name: string
  role: string
  imageUrl: string | StaticImageData
  description: string
}
const files: File[] = [
  {
    name: 'The Late Harrison Kariuki',
    role: 'Co-founder',
    description:
      'For Harrison Kariuki Gachago (The Late) Personal Information:  Name: Harrison Kariuki Gachago  Date of Birth: 9 th September 1980  Date of Demise: December 2021 Harrison Kariuki was a dedicated professional known for his significant contributions to the digital media space and insurance industries. Harrison had a successful career in the insurance sector prior to his involvement with Imara TV. With a solid background in insurance, he transitioned into the media sector, where he co-founded Imara TV in 2016. As co-founder he played a key role in the establishment of Imara TV, contributing to its inception and early development. Throughout his tenure, he held pivotal roles within the organization, notably as a Director and Chief Operating Officer. In the role of director, he provided strategic direction and decision-making expertise to drive the company’s growth. In the capacity of Chief Operations Officer, he oversaw day to day operations, spearheading initiatives to expand Imara Tv’s market presences Kariuki demonstrated strong leadership abilities, strategic planning and operations management in guiding Imara TV as a co-founder, director, and COO Legacy: Harrison Kariuki&#39;s legacy extends beyond his professional accomplishments. He leaves behind a lasting impact on Imara TV, having played a vital role in its establishment and growth. His dedication, leadership, and contributions to the organization will be remembered and cherished by colleagues and the industry alike.',
    imageUrl: Founder,
  },
  {
    name: 'Stephen Maina',
    role: 'Co-founder and CEO',
    description:
      'Stephen Maina is a Computer Scientist and technology evangelist who is using IT to make the world a better place. While pursuing his BSc. Computer Science at the University of Nairobi in 2010, he co- founded the Millman Group of companies to design, develop and deploy mobile, web and cloud applications for organizations around the world. He is also a certified Agile Scrum Master (PSM 1) project management practitioner from 2015. In 2016, he co-founded Imara Tv, a media platform that entertains and educates the public to create sustainable jobs for young people in the film industry. In 2020, he co-founded JiBambe Wifi an internet service provision company delivering affordable internet connectivity to urban and rural communities in Kenya. Stephen is passionate about developing Africa’s untapped potential to build a sustainable future that benefits humanity.',
    imageUrl: CEO,
  },
  {
    name: 'Fredrick Onyango',
    role: 'Co-founder and CTO',
    description:
      'Fredrick Onyango is a proficient Software Engineer and accomplished entrepreneur with over a decade of hands-on experience spanning full-stack development, software team leadership, and client relationship management. With a proven track record in both startup and established environments, he excels in guiding teams to create innovative applications that enhance operational efficiency. Fredrick is deeply passionate about building robust, reliable, and maintainable systems. During his pursuit of a BSc. in Computer Science at the University of Nairobi in 2010, Fredrick co-founded the Millman Group of companies, specializing in the design, development, and deployment of mobile, web, and cloud applications for organizations globally. In 2016, he further demonstrated his social entrepreneurial spirit by co-founding Imara Tv, a dynamic media platform aimed at entertaining and educating the public while fostering sustainable job opportunities for young talents in the film industry.',
    imageUrl: Fred,
  },
  {
    name: 'Emmah Kanyara',
    role: 'Co-founder and COO',
    description:
      'Emmah Kanyara is a dynamic leader with a Bachelors degree in Counselling psychology and brings a unique blend of psychological insights, operational expertise and motivation to her role as the Chief Operations Officer at Imara TV. She aims at positioning Imara Tv as a leading destination for edutainment content, and making a positive impact on the society one viewer at a time Emmah is passionate about the power of media to inspire, educate and empower individuals, she believes in the value of partnerships and collaboration within the industry. And actively seeks out opportunities to collaborate with content creators, advertisers and other stake holders to expand Imara Tv’s reach and impact',
    imageUrl: Emmah,
  },
  {
    name: 'Mercy Ngethe',
    role: 'Chief Finance Officer',
    description: '',
    imageUrl: Mercy,
  },
  {
    name: 'Olela Tonny',
    role: 'Program Development',
    description: `
      Olela Tonny is a development professional with over 5 years of experience. He specializes in program development, partnership building, strategic communication, advocacy, and community projects, focusing on Gender mainstreaming, Child protection, Reproductive Health, and policy. His achievements include training innovators, leading impactful projects, and supporting marginalized groups. 
  
      Tonny is skilled in resource mobilization, public speaking, M&E, and design thinking, and has enhanced youth participation & policy development with UNFPA, UNICEF & UNESCO. He has successfully expanded meaningful engagement for youth, women, girls, and men while strengthening civil action, particularly in Gender mainstreaming, Child Protection, Sexual Reproductive Health Rights (SRHR), and policy development.
  
      Notably, he trained 30 young innovators for Kectil Community Kenya's "Innovation by Design Thinking for Sustainable Development" program, resulting in a team (EcoBana) winning $1 million USD in the 2022 Hult Prize Challenge. He also led a self-initiated 3-month project (Tree Seedling & Pad Drive), supporting over 8,522 marginalized girls, teen mothers, and persons with disabilities across several Kenyan counties.
  
      His work with UNFPA involved developing youth-led policies, coordinating advocacy strategies, and enhancing youth participation in national policies. At UNESCO Youth Kenya Forum, he organized SDG awareness campaigns and facilitated youth-led projects. He also served as a Regional Program Coordinator for Kectil Center for Youth Excellence, training young innovators and implementing capacity development strategies. His role at the Global Youth Consortium Against FGM, under the UNFPA-UNICEF Joint Program, involved developing administrative systems and advocacy programs for 58 countries.
  
      Contact: tonnyolela@gmail.com | Website: https://olelatonny.com
    `,
    imageUrl: Tony,
  },
  {
    name: 'Sammy mwangangi',
    role: 'Frontend Developer',
    description: `
      A skilled frontend developer dedicated to creating seamless and engaging user experiences. With expertise in modern web technologies, I focus on building responsive, user-centered interfaces that bring our project’s vision to life. Passionate about clean code and intuitive design, I ensure that each component functions flawlessly across all devices, enhancing both functionality and aesthetics for our users.
    `,
    imageUrl: Sammy,
  },
  {
    name: 'Jerusha Oketch',
    role: 'Film Production and Office Administrator',
    description: 'Jerusha Oketch is an enthusiastic Film Production and Office Administrator who has recently joined our team. With a solid background in film production and animation, she is deeply committed to the idea that media has the power to educate, inspire, and make a positive difference in society. Her proactive approach and organizational skills ensure that our projects run smoothly and effectively, helping to position Imara TV as a leading destination for meaningful and engaging content.',
    imageUrl: Jerusha,
  },
  
  {
    name: 'Ruth Njoroge',
    role: 'Digital Marketing and Social Media Manager',
    description: `Ruth Njoroge is a creative expert specializing in digital marketing and social media management. Renowned for her distinctive approach, Ruth oversees Imara TV's social media platforms, where her innovative strategies and engaging content drive exceptional brand presence. Ruth thrives in creative environments, passionate about filling creative spaces, she excels in crafting dynamic digital experiences that resonate with audiences constantly pushing boundaries to deliver exceptional results and elevate brand presence.`,
    imageUrl: Ruth,
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
                Bridging Entertainment and Education
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Imara.Tv will make you laugh and learn. Watch positive
                  wholesome content that makes the world a better place
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/videos"
                    className="rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
                  >
                    Watch Films Now
                  </a>
                  <a
                    href="/sign-up"
                    className="rounded-md px-3.5 py-2 text-xs font-semibold leading-6 text-gray-900 ring-2 ring-[#007BFF] md:text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <Image
                src={Image5}
                width={616}
                height={409}
                alt={'image'}
                className="w-50 object-contain xl:row-span-2 xl:row-end-2"
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
                    Imara.Tv educates the public using short entertainment films to make the world a 
                    better place. What’s even better, the films are made by young people in Kenya who 
                    self-employ their natural talents like acting and digital skills like animation to 
                    create wholesome films that edutain our viewers for free on wholesome themes.
                    <br></br> <br></br> Imara.Tv is the outcome of the I-AM co-creation hackathon by 
                    the United Nations Population Fund (UNFPA), Kenya Government Ministry of Health 
                    and UK Aid in collaboration with Nailab Accelerator to scale up access to youth 
                    friendly information and services. Read more on the 
                    {' '}
                      <a
                        className="text-[#F54029]"
                        href="https://kenya.unfpa.org/en/news/unfpa-announces-winners-innovation-accelerator-focused-promoting-youth-sexual-reproductive"
                      >
                        UNFPA-K website
                      </a>
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
            <div className="mx-auto max-w-100 px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:ml-20 lg:pl-2 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                    Did you know that in Kenya, 42% of all new HIV infections occur among adolescents 
                    and young people aged 15-24? Moreover, over 300,000 girls aged between 10-19 
                    becomes pregnant every year!
                    </p>
                    <p className="mt-10 text-lg leading-8 text-gray-600">
                    Our research found the main causes to be poverty and ignorance. Lack of jobs 
                    lead idle young people to engage in risky activities like prostitution to earn 
                    an income which exposes them to the HIV virus or unintended pregnancies. 
                    </p>

                    <p className="mt-10 text-lg leading-8 text-gray-600">
                      Imara Tv kills these two birds with one stone: edutainment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <Image
                    src={About2}
                    alt={'about'}
                    className="w-[48rem] max-w-none ring-1 ring-gray-400/10 sm:w-[57rem]"
                    width={667}
                    height={409}
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
                    <p className="mt-[50px] text-lg leading-8 text-gray-600">
                    Imara Tv harnesses the creative talents of young people to produce short funny films 
                    that engage our audience in continuous learning on wholesome themes. <br></br>
                      <br></br>We create sustainable artistic and digital jobs for out of work youth in 
                      the local film industry and support services paid for by advertising. The young 
                      people also own the films as digital assets for their economic empowerment and career development.
                      <br></br> <br></br>Our public viewers watch local, relatable and memorable edutainment content 
                      while our corporate sponsors get increased public brand visibility and new customers for business growth.
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
                  Team Imara
                </h2>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-20 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
              >
                {files.map((file) => (
                  <li key={file.name}>
                    <Image
                      onClick={() => openModal(file)}
                      width={286}
                      height={192}
                      className="aspect-[2/2] w-full cursor-pointer rounded-2xl object-cover"
                      src={file.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {file.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {file.role}
                    </p>
                  </li>
                ))}
              </ul>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className=" h-auto max-w-[1000px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-[19px] font-bold text-[#525252]"
                          >
                            {selectedFile && selectedFile.name}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-[15px] text-[#525252]">
                              {selectedFile && selectedFile.description}
                            </p>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </Container>
        </div>
        <Container>
          <div>
            <Faq2></Faq2>
          </div>
        </Container>
      
        <Newsletter/>

      </main>
      <Footer />
    </>
  )
}
