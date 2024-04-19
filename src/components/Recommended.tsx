'use client'

import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import Image from 'next/image'
import Yt from '@/images/player.png'
import Recent from '@/images/recent.png'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

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
  name: string
  category: string
  duration: number
  description: string
  image: string
  // Other properties
}

export function Recommended() {
  const [selected, setSelected] = useState(qualities[0])
  const [active, setActive] = useState(dates[0])
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  )
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
    }[]
  >([])
  
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

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
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/videos')
        const data = await response.json()
        setVideos(data.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchVideos()
  }, [])

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId)
  }

  const filteredVideos = selectedCategory
  ? videos.filter(video => Number(video.category) === selectedCategory)
  : videos;

  {console.log("Selected Category:", selectedCategory)}
    {console.log("Filtered Videos:", filteredVideos)}

  return (
    <>
      <Container>
        <div className="mt-[53px] justify-between md:flex">
          <div className="space-y-4 md:flex">
            <div className="mr-[43px] text-center text-[20px] font-bold text-[#2B2B2B] md:text-left md:text-[40px]">
              Recommended
            </div>
            
            {categories.map((category, index) => (
              <button
                type="button"
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`text-12px] mr-[24px] inline-flex items-center gap-x-2 rounded-md bg-white px-[13px] py-2 font-medium text-[#525252] shadow-sm md:text-[17px] ${
                  selectedCategory === category.id
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
                  <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
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
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={quality}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
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
                  <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
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
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={date}
                        >
                          {({ active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  active ? 'font-medium' : 'font-normal'
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
              className="group inline-flex items-center justify-center rounded-lg bg-[#007BFF] px-[28px] py-1.5 text-lg font-medium text-white focus:outline-none"
            >
              Filter
            </Link>
          </div>
        </div>

        <div className="mt-[90px] justify-between gap-32 md:flex">
          <div className="md:w-3/4">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-[25px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[100px] lg:grid-cols-2 xl:gap-x-8"
            >
              {videos.map((video) => (
                <li key={video.id} className="relative">
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
                      className="absolute inset-0 m-auto h-[23.13px] w-[32.81px] md:h-auto md:w-[61px] object-cover"
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

                  <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                    {video.name}
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
                      <Dialog.Panel className="h-auto w-[342px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-[19px] font-bold text-[#525252]"
                        >
                          {selectedFile && selectedFile.name}
                        </Dialog.Title>
                        <div className="mt-5 flex items-center gap-7">
                          <button className="rounded-lg bg-[#F2970F] px-2 py-1 text-[18px] font-bold text-white">
                            HD
                          </button>
                          <div className="text-[15px] font-medium text-[#525252]">
                            {selectedFile && selectedFile.duration} min
                          </div>
                        </div>
                        <div className="mb-[27px] mt-[55px] flex items-center gap-1">
                          <div className="text-[20px] font-bold text-[#525252]">
                            Category:
                          </div>
                          <div className="text-[17px] font-medium text-[#525252]">
                            {selectedFile && selectedFile.category}
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-[15px] text-[#525252]">
                            {selectedFile && selectedFile.description}
                          </p>
                        </div>

                        <div className="mt-9">
                          <Link
                            href="/watch"
                            className="inline-flex justify-center rounded-md border border-transparent bg-[#007BFF] px-4 py-2 text-[17px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Watch Now
                          </Link>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>

            <Container>
              <div className="mb-[60px] flex items-center justify-end space-x-2 text-[#F2970F] md:hidden">
                <span className="text-[18px] font-bold">Load more </span>
                <ArrowDownIcon className="h-[18px] w-[18px]" />
              </div>
            </Container>
          </div>

          <div className="md:w-1/4">
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
                  className="flex items-center justify-center gap-[26px] sm:flex-row md:gap-10"
                >
                  <Image
                    width={131}
                    height={118}
                    className="w-[131px] rounded-l-2xl object-cover"
                    src={video.image}
                    alt=""
                  />
                  <div className="max-w-xl flex-auto space-y-[26px]">
                    <p className="text-[17px] font-medium text-[#525252]">
                    series/ ss2 / Eps 3
                    </p>
                    <h3 className="text-[19px] font-bold text-[#525252]">
                      {video.name}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
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
