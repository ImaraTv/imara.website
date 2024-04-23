'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Trend1 from '@/images/trend1.png'
import Trend2 from '@/images/trend2.png'
import Yt from '@/images/player.png'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

const posts = [
  {
    id: 1,
    title: 'No Means No',
    href: '#',
    imageUrl: Trend1,
    categories: [
      {
        id: 1,
        name: 'Sexual Health',
      },
      {
        id: 2,
        name: 'Educative',
      },
    ],
  },
  {
    id: 2,
    title: 'The sweet ride',
    href: '#',
    imageUrl: Trend2,
    categories: [
      {
        id: 1,
        name: 'Comedy',
      },
      {
        id: 2,
        name: 'Educative',
      },
    ],
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    imageUrl: Trend1,
    categories: [
      {
        id: 1,
        name: 'Awareness',
      },
    ],
  },
  {
    id: 4,
    title: 'Boost your conversion rate',
    href: '#',
    imageUrl: Trend1,
    categories: [
      {
        id: 1,
        name: 'Educative',
      },
    ],
  },
]
const cardStyle = {
  boxShadow: '0px 4px 28px 3px #0000001A',
}

export function Trending() {
  const [trending, setTrending] = useState<
    {
      id: number
      name: string
      duration: number
      category: string
      description: string
      vimeo_link: string
      call_to_action: string
      call_to_action_link: string
      image: string
    }[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  const numCards2 = 3

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/videos')
        const data = await response.json()
        setTrending(data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching trending videos:', error)
        setIsLoading(false)
      }
    }

    fetchTrending()
  }, [])
  return (
    <>
      <div className="mb-[47px] flex items-center justify-center gap-3">
        <span className="text-[20px] font-bold text-[#2B2B2B] md:text-[40px]">
          Trending
        </span>

        <svg
          className=""
          width="30"
          height="30"
          viewBox="0 0 20 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 27.75C4.82233 27.75 0.625 23.5526 0.625 18.375C0.625 15.6828 1.75983 13.2556 3.57724 11.5458C5.25504 9.96719 9.375 7.12439 8.75 0.875C16.25 5.875 20 10.875 12.5 18.375C13.75 18.375 15.625 18.375 18.75 15.287C19.0871 16.254 19.375 17.2931 19.375 18.375C19.375 23.5526 15.1776 27.75 10 27.75Z"
            fill="#F2970F"
          />
        </svg>
      </div>
      {isLoading ? (
        <div className="flex gap-4">
          {Array.from({ length: numCards2 }, (_, index) => (
            <div
              key={index}
              role="status"
              className="max-w-xl animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-4 flex items-center">
                <svg
                  className="me-3 h-10 w-10 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          className="mb-[105px]"
          breakpoints={{
            481: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1441: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {trending.map((item) => (
            <SwiperSlide key={item.id}>
              <article
                className="relative isolate ml-[16px] flex flex-col justify-end overflow-hidden rounded-[5px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 md:ml-[47px] lg:pt-80"
                style={cardStyle}
              >
                <Image
                  src={item.image}
                  width={524}
                  height={273}
                  alt="trend1"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10" />
                <Image
                  className="absolute inset-0 m-auto"
                  width={50}
                  height={43}
                  src={Yt}
                  alt={'ÿt'}
                />

                <h3 className="mt-3 text-[18px] font-semibold text-white md:text-[26px]">
                  <a href="/watch">
                    <span className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
                <div className="flex gap-2 text-sm font-medium text-white md:text-[16px]">
                  {item.category}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}
