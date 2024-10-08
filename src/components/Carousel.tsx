'use client'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CarouselImage from '@/images/carousel.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { css } from '@emotion/react'
import Slide1 from '@/images/carousel.png'
import defaultImage from '@/images/default.jpg'
import Link from 'next/link'
import { Suspense } from 'react'
import BookmarkButton from '@/components/BookmarkButton'

const items = [
  {
    id: 1,
    title: 'Friend Zone short film ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.',
    year: 2024,
    duration: '43 min',
    category: 'Sexual Health',
    source: Slide1,
  },
  {
    id: 2,
    title: 'No Means No',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.',
    year: 2023,
    duration: '1 hour',
    category: 'Sexual Health',
    source: Slide1,
  },
]

const carouselStyle = {
  imageStyles: css`
    @media (max-width: 767px) {
      width: 430px;
      height: 280px;
    }
  `,
}

export function CarouselHome(props: any) {
  const BASE_URL = process.env.BASE_URL;
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState<
    {
      id: number
      name: string
      slug: string
      release_date: string
      duration: number | null
      category: string
      topics: string[]
      description: string
      vimeo_link: string
      call_to_action_btn: string | null
      call_to_action_link: string | null
      image: string
      creator: {
        id: number
        name: string
        stage_name: string | null
        about: string | null
        skills: string
      }
      rating: string
      sponsor: {
        name: string
        about: string
        website: string
        logo: string
      }
      location: {
        id: number | null
        name: string | null
      }
      stars: number
      media: {
        poster: string
        trailer: string | null
        trailer_vimeo: string | null
        hd_film: string
        hd_film_vimeo: string
      }
    }[]
  >([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`, {
          cache: 'force-cache',
        })
        const data = await response.json()
        setVideos(data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching categories:', error)
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex h-[280px] w-full animate-pulse flex-col bg-gray-300 md:h-[560px]">
          <div className="flex flex-auto flex-col items-center justify-center p-4 md:p-5">
            <div className="flex justify-center">
              <div
                className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-12 py-4">
            <div className="mb-4 h-4 w-48 rounded-full bg-gray-600 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-600 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-600 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-600 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-600 dark:bg-gray-700"></div>
            <div className="h-2 max-w-[360px] rounded-full bg-gray-600 dark:bg-gray-700"></div>
          </div>
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-ex4',
            prevEl: '.swiper-button-prev-ex4',
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="swiper relative isolate mb-[75px] h-[280px] w-full md:h-[560px]"
          id="slider2"
        >
          <Suspense fallback={<p className="text-4xl">Loading sliders...</p>}>
            {videos.map((item) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.image || defaultImage}
                  width={1440}
                  height={560}
                  className={`absolute inset-0 -z-10 h-full w-full object-cover ${carouselStyle.imageStyles}`}
                  alt="itemImage"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10" />
                <div className="absolute bottom-[64px] z-[999] px-12 text-white ltr:left-12 rtl:right-12">
                  <div className="mb-[26px] text-[20px] font-bold md:text-[35px]">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-7 text-white">
                    <button className="rounded-lg bg-[#F2970F] px-2 py-1 text-[14px] font-bold md:text-[18px]">
                      HD
                    </button>
                    <div className="text-[14px] font-medium md:text-[18px]">
                      2023
                    </div>
                    <div className="text-[14px] font-medium md:text-[18px]">
                      {item.duration} min
                    </div>
                    <div className="text-[14px] font-medium md:text-[18px]">
                      Ranked : 4.7
                    </div>
                  </div>
                  <div className="mt-1 hidden w-4/5 text-[18px] text-[#B0B0B0] sm:mt-5 sm:block">
                    {item.description}
                  </div>

                  <div className="mt-[43px] flex gap-10">
                    <Link
                      href={`/videos/${item.slug}`}
                      className="group inline-flex items-center justify-center rounded-lg bg-[#007BFF] px-2 py-2 text-[12px] font-medium text-white focus:outline-none md:px-10 md:text-[17px]"
                    >
                      Watch Now
                    </Link>
                    <BookmarkButton videoId={item.id} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Suspense>

          <button className="swiper-button-prev-ex4 text-primary border-primary hover:border-primary hover:bg-primary absolute bottom-[60px] right-20 z-[999] hidden -translate-y-1/2 place-content-center  rounded-lg border p-2 transition hover:text-white md:grid ltr:left-2 rtl:right-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.84112 7.72852L10.7533 3.12045C10.9031 3.02054 11.1056 3.06104 11.2055 3.21084C11.2412 3.26445 11.2603 3.32738 11.2603 3.39175L11.2603 12.6079C11.2603 12.788 11.1143 12.934 10.9342 12.934C10.8698 12.934 10.8068 12.915 10.7533 12.8793L3.84112 8.27119C3.69132 8.17128 3.65082 7.96878 3.75073 7.81897C3.7746 7.78317 3.80532 7.75239 3.84112 7.72852Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="swiper-button-next-ex4 text-primary border-primary hover:border-primary hover:bg-primary absolute bottom-[60px] right-10 z-[999] hidden -translate-y-1/2 place-content-center  rounded-lg border p-2 transition hover:text-white md:grid ltr:right-2 rtl:left-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5056 8.27104L6.59339 12.8791C6.44355 12.979 6.24109 12.9385 6.14119 12.7887C6.10548 12.7351 6.08643 12.6722 6.08643 12.6078V3.39162C6.08643 3.21153 6.23242 3.06554 6.41251 3.06554C6.47689 3.06554 6.53983 3.08459 6.59339 3.1203L13.5056 7.72837C13.6554 7.82828 13.6959 8.03078 13.596 8.18058C13.5721 8.21639 13.5414 8.24717 13.5056 8.27104Z"
                fill="white"
              />
            </svg>
          </button>
        </Swiper>
      )}
    </>
  )
}
