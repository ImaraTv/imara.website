import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Youtube from "@/images/youtube.png"
import Banner from "@/images/carousel.png"
import VideoBanner from "@/images/video.png"
import Image from "next/image"
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import Yt from "@/images/yt.png"

const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029'
};


const files = [
  {
    title: 'Chills for Who',
    category: 'Mental health',
    time: '1hr 23 min',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'The Circle',
    category: 'Politics',
    time: '45 min',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Hapa nje kwetu',
    category: 'Mental health',
    time: '45 min',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Against my will short film',
    category: 'GBV',
    time: '22 min',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
]

export default function Watch() {
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

            <div className="relative px-6 pt-[250px]">
              <div className='flex items-center justify-center'>
                <Image src={Youtube} width={52.5} height={52.5} alt={"youtube icon"} />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex items-center justify-center gap-5 mt-5'>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Auto Play
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <CloudArrowDownIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Download
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Save
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <ShareIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Share
          </button>
        </div>

        <Container>
          {/* Video details */}
          <div className='flex justify-between my-[148px]'>
            <div className="flex w-3/4 gap-12">
              <div className="mr-4 flex-shrink-0">
                <Image src={VideoBanner} alt={"video image"} className="h-[391px] w-[316px]" />
              </div>
              <div className='flex flex-col gap-[30px]'>
                <h4 className="text-[40px] text-[#2B2B2B] font-bold">Friend Zone short film</h4>
                <div className='flex gap-7 items-center'>
                  <button className='px-2 py-1 bg-[#F2970F] rounded-lg font-bold text-[18px] text-white'>HD</button>
                  <div className='font-medium text-[18px] text-[#525252]'>2023</div>
                  <div className='font-medium text-[18px] text-[#525252]'>43 min </div>
                  <div className='font-medium text-[18px] text-[#525252]'>Ranked : 4.7</div>
                </div>
                <p className="mt-1 text-[18px] text-[#525252]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='flex flex-col'>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold text-[#525252]'>Type:</span>
                    <span className='text-[18px] text-[#525252]'>Short Film</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold text-[#525252]'>Pg:</span>
                    <span className='text-[18px] text-[#525252]'>18 plus</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold text-[#525252]'>Date:</span>
                    <span className='text-[18px] text-[#525252]'>2 Jan 2024</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold text-[#525252]'>Director:</span>
                    <span className='text-[18px] text-[#525252]'>Imara Tv crew</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold text-[#525252]'>Categories:</span>
                    <span className='text-[18px] text-[#525252]'>Adovocacy, Sexual health, Decision making, SRH</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-1/4 gap-12">
              <div className="flex items-center justify-center px-4 gap-2 bg-white rounded h-12" style={cardStyle}>
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
              </div>
            </div>

          </div>
        </Container>


        {/* Related */}
        <Container>
          <div className="isolate mt-[110px] px-6 py-12 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">Other related films</h2>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {files.map((file) => (
                <li key={file.title} className="relative">
                  <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />

                    <button type="button" className="absolute inset-0 focus:outline-none">
                      <span className="sr-only">View details for {file.title}</span>
                    </button>
                  </div>
                  <Image className='absolute inset-0 top-1/4 left-1/2' width={50} height={43} src={Yt} alt={"ÿt"} />
                  <div className='flex gap-3 mt-5'>
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50"
                    >
                      {file.time}
                    </button>
                    <p className="pointer-events-none mt-2 block truncate text-[16px] font-medium text-[#525252]">{file.category}</p>
                  </div>

                  <p className="pointer-events-none block text-[19px] mt-9 font-bold text-[#525252]">{file.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <div className="bg-[#F3F3F3] h-[372px] mb-[142px] mt-20 py-10 text-center">
          <h1 className='text-[40px] text-[#2B2B2B] font-bold'>How did you find this film?</h1>
          <p className='text-[18px] text-[#525252] leading-[34px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='flex items-center justify-center gap-3'>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
          </div>
          <button
            type="button"
            className="mt-5 rounded-md bg-[#007BFF] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit    
          </button>
        </div>

      </main>
      <Footer />
    </>
  )
}
