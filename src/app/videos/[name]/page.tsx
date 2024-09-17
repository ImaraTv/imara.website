'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from 'react'
// import { Rating } from 'react-simple-star-rating'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CloudArrowDownIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShareIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'
import Yt from '@/images/player.png'
import Fallback from '@/images/video.png'
import styled from 'styled-components'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import VimeoPlayer from '@/components/VimeoPlayer'
import Rating from '@/components/Rating'
import ReactPlayer from 'react-player'
import { useParams, useSearchParams } from 'next/navigation'
import SaveButton from '@/components/SaveButton'
import ShareButton from '@/components/ShareButton'
import { FC } from 'react'

const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029',
}

interface File {
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
}
const fallbackImage = Fallback
interface Sponsor {
  name: string
  about: string
  website: string
  logo: string | null
}

interface Video {
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
}

const VideoDetails = ({ params }: { params: { name: string } }) => {
  const { name } = params
  const { videoName } = useParams<{ videoName: string }>() // Get videoName from URL params
  const [videoDetails, setVideoDetails] = useState<Video | null>(null)
  const { id } = useParams()
  const [videoUrl, setVideoUrl] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [videos, setVideos] = useState<Video[]>([])
  const numCards = 4

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`)
        const data = await response.json()
        setVideos(data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching videos:', error)
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`)
        const data = await response.json()
        console.log('API Response:', data) // Log the entire response

        const videos = data.data
        console.log('Videos:', videos) // Log the videos array

        const decodedName = decodeURIComponent(name)

        const video = videos.find(
          (v: Video) =>
            v.name.toLowerCase().replace(/\s+/g, '-') === decodedName,
        )
        console.log(video)

        const vimeoVideoId = video.vimeo_link?.split('/').pop()
        setVideoUrl(
          `https://player.vimeo.com/video/${vimeoVideoId}?badge=0&autoplay=1&title=0&player_id=0&app_id=58479`,
        )

        setVideoDetails({ ...video })
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching video details:', error)
        setIsLoading(false)
      }
    }

    fetchVideoDetails()
  }, [name])

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
    console.log('videoDetails:', videoDetails)
    console.log('isLoading:', isLoading)
  }, [videoDetails, isLoading])

  return (
    <>
      <Header />
      <main>
        {/* Hero card */}
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
          <div className="">
            <div className="relative isolate h-[240px] sm:overflow-hidden md:h-[546px]">
              <div>
                <iframe
                  src={videoUrl}
                  allow="autoplay; picture-in-picture; clipboard-write; fullscreen"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        )}
        {/* Buttons */}
        <Container>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
            <span>Sponsored By: {videoDetails?.sponsor?.name} </span>

            <Image
              width={405}
              height={352}
              src={videoDetails?.sponsor?.logo || fallbackImage}
              alt={'sponsor logo'}
              className="h-[35px] w-full object-cover md:h-[50px] md:w-[150px]"
            />

            <Link href={`${videoDetails?.call_to_action_link}`} target="_blank" className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {videoDetails?.call_to_action_btn}
            </Link>

            {videoDetails && <SaveButton videoId={videoDetails.id} />}

            {videoDetails && <ShareButton videoId={videoDetails.id} />}
          </div>
        </Container>

        <Container>
          {/* Video details */}
          {isLoading ? (
            <div className="my-[58px] flex justify-between space-x-10">
              <div
                role="status"
                className="flex w-1/2 animate-pulse gap-10 rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
              >
                <div className="mb-4 flex h-60 w-60 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
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
                <div>
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
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div className="absolute right-[18px] hidden gap-12 md:relative md:flex md:w-1/4">
                <div
                  className="flex h-12 w-36 animate-pulse items-center justify-center gap-2 rounded bg-gray-300 px-4 dark:bg-gray-700"
                  style={cardStyle}
                ></div>
              </div>
            </div>
          ) : (
            <div>
              {videoDetails && (
                <div className="my-[58px] flex justify-between rounded-md md:my-[148px]">
                  <div className="relative flex h-[580px] w-full flex-col gap-12 rounded-md shadow-10xl md:h-auto md:w-3/4 md:flex-row md:rounded-none md:shadow-none">
                    <Image
                      width={405}
                      height={352}
                      src={videoDetails.image}
                      alt={'video image'}
                      className="absolute inset-0 -z-10 h-[352px] w-full flex-shrink-0 rounded-md object-cover md:relative md:mr-4 md:h-[391px] md:w-[316px]"
                    />
                    <div className="absolute bottom-0 flex flex-col gap-[30px] px-[25px] pb-4 md:relative md:px-0">
                      <h4 className="text-[20px] font-bold text-white md:text-[40px] md:text-[#2B2B2B]">
                        {videoDetails.name}
                      </h4>
                      <div className="flex items-center gap-7">
                        <button className="rounded-lg bg-[#F2970F] px-2 py-1 text-[18px] font-bold text-white">
                          HD
                        </button>
                        <div className="text-[18px] font-medium text-white md:text-[#525252]">
                          2023
                        </div>
                        <div className="text-[18px] font-medium text-white md:text-[#525252]">
                          {videoDetails.duration} min{' '}
                        </div>
                        <div className="text-[18px] font-medium text-white md:text-[#525252]">
                          Ranked : {videoDetails.rating}
                        </div>
                      </div>
                      <p className="mt-1 text-[18px] text-white md:text-[#525252]">
                        {videoDetails.description}
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
                            {videoDetails.creator.name}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[18px] font-bold text-white md:text-[#525252]">
                            Categories:
                          </span>
                          <span className="text-[18px] text-white md:text-[#525252]">
                            {videoDetails.category}
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
                      ></div>
                    </div>
                  </div>

                  <div className="absolute right-[18px] hidden gap-12 md:relative md:flex md:w-1/4">
                    <div
                      className="flex h-12 items-center justify-center gap-2 rounded bg-white px-4"
                      style={cardStyle}
                    >
                      <Rating
                        videoId={videoDetails.id}
                        initialRating={videoDetails.stars || 0}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
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
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-[25px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[100px] lg:grid-cols-4 xl:gap-x-8"
              >
                {videos.map((video) => (
                  <li key={video.name} className="relative">
                    <Link
                      href={`/videos/${encodeURIComponent(
                        video.name.toLowerCase().replace(/\s+/g, '-'),
                      )}`}
                    >
                      <div className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
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
                      <div className="mt-2 flex items-center gap-3">
                        <Rating
                          videoId={video.id}
                          initialRating={video.stars || 0}
                        />
                        <div className="text-sm italic text-gray-500">
                          {video.creator.name}
                        </div>
                      </div>

                      <p className="pointer-events-none mt-2 block text-[15px] font-bold text-[#525252] md:mt-4 md:text-[19px]">
                        {video.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
            Rate this film to help us create better films for you.
          </p>

          <div className="flex flex-col items-center justify-center py-2">
            {videoDetails && (
              <Rating
                videoId={videoDetails.id}
                initialRating={videoDetails.stars || 0}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default VideoDetails
