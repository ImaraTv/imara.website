'use client'

import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState, Suspense } from 'react'
import { Button } from '@/components/Button'
import Image from 'next/image'
import Yt from '@/images/player.png'
import Recent from '@/images/recent.png'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Rating from '@/components/Rating'

const dates = [
  {
    id: 1,
    name: 'Jan',
  },
  {
    id: 2,
    name: 'Feb',
  },
  {
    id: 3,
    name: 'Mar',
  },
  {
    id: 4,
    name: 'Apr',
  },
  {
    id: 5,
    name: 'May',
  },
]

const qualities = [
  { id: 1, name: 'Medium', unavailable: false },
  { id: 2, name: '4D', unavailable: false },
  { id: 3, name: 'HD', unavailable: false },
  { id: 4, name: 'Standard', unavailable: true },
  { id: 5, name: 'Low', unavailable: false },
]

const suggestions = [
  {
    id: 1,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl: Recent,
  },
  {
    id: 2,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl: Recent,
  },
  {
    id: 3,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl: Recent,
  },
  {
    id: 4,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl: Recent,
  },
  {
    id: 5,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl: Recent,
  },
]
interface File {
  id: number
  name: string
  category: string
  duration: number
  description: string
  image: string
  creator: string
  rating: number | null
  stars: number
  // Other properties
}

export function Recommended() {
  const [selected, setSelected] = useState(qualities[0])
  const [active, setActive] = useState(dates[0])
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  )
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState<
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
      creator: string
      rating: number
      stars: number
    }[]
  >([])

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const numCards = 4;
  const numCards2 = 3;
  let [isOpen, setIsOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState(null)
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
    // Reset isOpen state when the component unmounts
    return () => {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://dashboard.imara.tv/api/categories',
        )
        const data = await response.json()
        setCategories(data.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])


  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/videos');
        const data = await response.json();
        setVideos(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };

    const fetchFilteredVideos = async () => {
      setIsLoading(true);
      try {
        const query = selectedCategory ? `?category=${selectedCategory}` : '';
        const response = await fetch(`https://dashboard.imara.tv/api/videos${query}`);
        const data = await response.json();
        setVideos(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };

    fetchAllVideos();
    fetchFilteredVideos();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName: any) => {
    setSelectedCategory(categoryName);
    setIsLoading(true);
    fetch(`https://dashboard.imara.tv/api/videos?category=${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      });
  };


  return (
    <>
      <Container>
      <div className="mr-[43px] text-center text-[20px] font-bold text-[#2B2B2B] md:text-left md:text-[40px]">
            Recommended
          </div> 
        <div className="mt-[20px] justify-between md:flex">
          
          <div className="gap-4 md:flex">

            {categories.map((category, index) => (
              <button
                type="button"
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`text-12px] inline-flex items-center rounded-md bg-white px-[13px] py-2 font-medium text-[#525252] shadow-sm md:text-[14px] ${selectedCategory === category.id
                    ? 'ring-525252 ring-1 ring-inset'
                    : 'hover:bg-gray-50'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="hidden px-6 md:flex">
            <div className="">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                    <span className="block truncate pr-1">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {qualities.map((quality, qualityIdx) => (
                        <Listbox.Option
                          key={qualityIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                            }`
                          }
                          value={quality}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {quality.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="">
              <Listbox value={active} onChange={setActive}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                    <span className="block truncate pr-1">{active.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {dates.map((date, dateIdx) => (
                        <Listbox.Option
                          key={dateIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                            }`
                          }
                          value={date}
                        >
                          {({ active }) => (
                            <>
                              <span
                                className={`block truncate ${active ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {date.name}
                              </span>
                              {active ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <Link
              href="#"
              className="group inline-flex items-center justify-center rounded-lg bg-[#007BFF] px-[28px] py-1.5 text-sm font-medium text-white focus:outline-none"
            >
              Filter
            </Link>
          </div>
        </div>

        <div className="mt-[90px] justify-between gap-32 md:flex">
          {isLoading ? (
            <div className="flex gap-4">
              {Array.from({ length: numCards }, (_, index) => (
                <div
                  key={index}
                  role="status"
                  className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
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
            <div className="md:w-3/4">
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-[25px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[100px] lg:grid-cols-2 xl:gap-x-8"
              >
                {videos.map((video) => (
                  <li key={video.id} className="relative">
                    <Link href={`/videos/${encodeURIComponent(video.name.toLowerCase().replace(/\s+/g, '-'))}`}>

                      <div
                        onClick={() => openModal(video)}
                        className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                      >
                        <Image
                          src={video.image}
                          alt=""
                          width={168}
                          height={97}
                          className="pointer-events-none h-full w-full object-cover group-hover:opacity-75"
                        />
                        <Image
                          className="absolute inset-0 m-auto h-[23.13px] w-[32.81px] object-cover md:h-auto md:w-[61px]"
                          width={50}
                          height={43}
                          src={Yt}
                          alt={'ÿt'}
                        />
                      </div>
                      <div className="mt-[18px] flex gap-3 md:mt-5">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 rounded-md bg-white px-2 py-1.5 text-[12px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50 md:px-6 md:text-[17px]"
                        >
                          {video.duration} min
                        </button>
                        <p className="pointer-events-none mt-2 block truncate text-[12px] font-medium text-[#525252] md:text-[16px]">
                          {video.category}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-3">
                        <Rating
                          videoId={video.id}
                          initialRating={video.stars || 0}
                        />
                        <div className="text-sm italic text-gray-500">
                          {video.creator}
                        </div>
                      </div>

                      <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                        {video.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              <Container>
                <div className="mb-[60px] flex items-center justify-end space-x-2 text-[#F2970F] md:hidden">
                  <span className="text-[18px] font-bold">Load more </span>
                  <ArrowDownIcon className="h-[18px] w-[18px]" />
                </div>
              </Container>
            </div>
          )}


          <div className="md:w-1/4">
            {isLoading ? (

              <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div>

                <div className="mb-[48px] text-[20px] font-bold text-[#2B2B2B] md:mb-[53px] md:text-[40px]">
                  Latest
                </div>
                <ul
                  role="list"
                  className="-mt-12 space-y-[26px] md:space-y-12 xl:col-span-3"
                >
                  {videos.map((video) => (
                    <li
                      key={video.id}

                    >
                      <Link href={`/videos/${encodeURIComponent(video.name.toLowerCase().replace(/\s+/g, '-'))}`} className='group'>
                        <div className="flex items-center justify-center gap-[26px] sm:flex-row md:gap-10">

                          <Image
                            width={131}
                            height={118}
                            className="w-[131px] rounded-l-2xl object-cover"
                            src={video.image}
                            alt=""
                          />
                          <div className="max-w-xl flex-auto space-y-[26px]">
                            <p className="text-[17px] font-medium text-[#525252]">
                              {video.category}
                            </p>
                            <h3 className="text-[19px] font-bold text-[#525252]">
                              {video.name}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
      <div className="mb-[44px] mt-[44px] hidden w-full border-t-[1px] border-[#D9D9D9] md:block" />

      <Container>
        <div className="mb-[60px] hidden items-center justify-end space-x-[34px] text-[#F2970F] md:flex">
          <span className="text-[26px] font-bold">Watch more </span>
          <ArrowRightIcon className="h-[36px] w-[36px]" />
        </div>
      </Container>
    </>
  )
}
