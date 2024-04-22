'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Youtube from '@/images/youtube.png'
import Banner from '@/images/carousel.png'
import VideoBanner from '@/images/video.png'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CloudArrowDownIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShareIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'
import Yt from '@/images/player.png'
import styled from 'styled-components'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import VimeoPlayer from '@/components/VimeoPlayer'

const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029',
}

const playerWrapper = {
  position: 'relative',
  paddingTop: '56.25%',
}

const reactPlayer = {
  position: 'absolute',
  top: 0,
  left: 0,
}

interface File {
  name: string
  category: string
  duration: number
  description: string
  image: string
  // Other properties
}

export default function Watch() {
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
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
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/videos')
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

  const vimeoUrl = 'https://vimeo.com/video/929535298'

  return (
    <>
      <Header />
      <main>
        {/* Hero card */}
        <div className="">
          <div className="relative isolate h-[240px] sm:overflow-hidden md:h-[546px]">
            {/* <Image
              className="absolute inset-0 -z-10 h-[240px] w-full object-cover md:h-full"
              src={Banner}
              alt={'contact'}
              width={1440}
              height={546}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-md ring-1 ring-inset ring-gray-900/10" />

            <Image
              className="absolute inset-0 m-auto"
              src={Youtube}
              width={52.5}
              height={52.5}
              alt={'youtube icon'}
            /> */}
            {/* <VimeoPlayer videoUrl={vimeoUrl} /> */}
            <div>
              <iframe
                src="https://player.vimeo.com/video/929535298?badge=0&amp;autopause=0&amp;title=false&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; picture-in-picture; clipboard-write"
                style={{
                  position: 'absolute',
                  objectFit: 'cover',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '546px',
                }}
                title="The Diary of a College Girl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <Container>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Auto Play
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <CloudArrowDownIcon
                className="-ml-0.5 h-5 w-5 text-[#F2970F]"
                aria-hidden="true"
              />
              Download
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PlusIcon
                className="-ml-0.5 h-5 w-5 text-[#F2970F]"
                aria-hidden="true"
              />
              Save
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ShareIcon
                className="-ml-0.5 h-5 w-5 text-[#F2970F]"
                aria-hidden="true"
              />
              Share
            </button>
          </div>
        </Container>

        <Container>
          {/* Video details */}
          <div className="my-[58px] flex justify-between rounded-md md:my-[148px]">
            <div className="relative flex h-[580px] w-full flex-col gap-12 rounded-md shadow-10xl md:h-auto md:w-3/4 md:flex-row md:rounded-none md:shadow-none">
              <Image
                width={405}
                height={352}
                src={VideoBanner}
                alt={'video image'}
                className="absolute inset-0 -z-10 h-[352px] w-full flex-shrink-0 rounded-md object-cover md:relative md:mr-4 md:h-[391px] md:w-[316px]"
              />
              <div className="absolute bottom-0 flex flex-col gap-[30px] px-[25px] pb-4 md:relative md:px-0">
                <h4 className="text-[20px] font-bold text-white md:text-[40px] md:text-[#2B2B2B]">
                  Friend Zone short film
                </h4>
                <div className="flex items-center gap-7">
                  <button className="rounded-lg bg-[#F2970F] px-2 py-1 text-[18px] font-bold text-white">
                    HD
                  </button>
                  <div className="text-[18px] font-medium text-white md:text-[#525252]">
                    2023
                  </div>
                  <div className="text-[18px] font-medium text-white md:text-[#525252]">
                    43 min{' '}
                  </div>
                  <div className="text-[18px] font-medium text-white md:text-[#525252]">
                    Ranked : 4.7
                  </div>
                </div>
                <p className="mt-1 text-[18px] text-white md:text-[#525252]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="text-[18px] font-bold text-white md:text-[#525252]">
                      Type:
                    </span>
                    <span className="text-[18px] text-white md:text-[#525252]">
                      Short Film
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[18px] font-bold text-white md:text-[#525252]">
                      Pg:
                    </span>
                    <span className="text-[18px] text-white md:text-[#525252]">
                      18 plus
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[18px] font-bold text-white md:text-[#525252]">
                      Date:
                    </span>
                    <span className="text-[18px] text-white md:text-[#525252]">
                      2 Jan 2024
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[18px] font-bold text-white md:text-[#525252]">
                      Director:
                    </span>
                    <span className="text-[18px] text-white md:text-[#525252]">
                      Imara Tv crew
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[18px] font-bold text-white md:text-[#525252]">
                      Categories:
                    </span>
                    <span className="text-[18px] text-white md:text-[#525252]">
                      Adovocacy, Sexual health, Decision making, SRH
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-[#000000] md:relative" />
              <div className="absolute inset-0 -z-10 rounded-md ring-1 ring-inset ring-[#000000] md:relative" />

              <div className="absolute right-[18px] top-[19px] gap-12 md:relative md:hidden md:w-1/4">
                <div
                  className="flex h-12 items-center justify-center gap-2 rounded bg-white px-4"
                  style={cardStyle}
                >
                  <StarIcon
                    className="h-5 w-5 text-[#F2970F]"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-[#F2970F]"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-[#F2970F]"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-[#F2970F]"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-[#F2970F]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div className="absolute right-[18px] hidden gap-12 md:relative md:flex md:w-1/4">
              <div
                className="flex h-12 items-center justify-center gap-2 rounded bg-white px-4"
                style={cardStyle}
              >
                <StarIcon
                  className="h-5 w-5 text-[#F2970F]"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-[#F2970F]"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-[#F2970F]"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-[#F2970F]"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-5 w-5 text-[#F2970F]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Related */}
        <Container>
          <div className="isolate mt-[58px] px-6 py-12 md:mt-[110px] lg:px-8">
            <div className="max-w-2xl">
              <h2 className="mb-10 text-[20px] font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-[40px]">
                Other related films
              </h2>
            </div>
            {isLoading ? (
              <div className="mx-auto w-full max-w-sm rounded-md">
                <div className="flex animate-pulse flex-col space-x-4">
                  <div className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="mt-[18px] h-2 rounded bg-slate-700"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-2 rounded bg-slate-700"></div>
                        <div className="col-span-1 h-2 rounded bg-slate-700"></div>
                      </div>
                      <div className="h-2 rounded bg-slate-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-[25px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[100px] lg:grid-cols-4 xl:gap-x-8"
              >
                {videos.map((video) => (
                  <li key={video.name} className="relative">
                    <div
                      onClick={() => openModal(video)}
                      className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                    >
                      <img
                        src={video.image}
                        alt=""
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

                    <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                      {video.name}
                    </p>
                  </li>
                ))}
              </ul>
            )}
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
          </div>
        </Container>
        <Container>
          <div className="mb-[60px] flex items-center justify-end space-x-2 text-[#F2970F] md:hidden">
            <span className="text-[18px] font-bold">Load more </span>
            <ArrowDownIcon className="h-[18px] w-[18px]" />
          </div>
        </Container>

        <div className="mb-[142px] mt-20 h-[372px] bg-[#F3F3F3] py-10 text-center">
          <h1 className="text-[20px] font-bold text-[#2B2B2B] md:text-[40px]">
            How did you find this film?
          </h1>
          <p className="py-8 text-[14px] leading-[34px] text-[#525252] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span>
              <svg
                className="h-6 w-6 text-[#F2970F]"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="h-6 w-6 text-[#F2970F]"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="h-6 w-6 text-[#F2970F]"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="h-6 w-6 text-[#F2970F]"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                className="h-6 w-6 text-[#F2970F]"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
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
