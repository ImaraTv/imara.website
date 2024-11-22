'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import Rating from '@/components/Rating'
import Image from 'next/image'
import Link from 'next/link'

import Yt from '@/images/player.png'
import Fallback from '@/images/video.png'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

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

interface FilterState {
  topic: string | null
  category: string | null
  location: { id: number; name: string } | null
}

interface FilterData {
  topics: Array<{ id: number; name: string }>
  categories: Array<{ id: number; name: string }>
  locations: Array<{ id: number; name: string }>
}

export default function Videos() {
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    topic: 'all',
    category: null,
    location: null,
  })

  const [filterData, setFilterData] = useState<FilterData>({
    topics: [],
    categories: [],
    locations: [],
  })
  const [videos, setVideos] = useState<File[]>([])
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<Record<string, string>>({})
  const videosPerPage = 12

  useEffect(() => {
    fetchFilterData()
  }, [])

  useEffect(() => {
    fetchVideos(1, true) // Reset and fetch with new filters
  }, [filters])

  const fetchFilterData = async () => {
    try {
      const [topicsRes, categoriesRes, locationsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics`),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/locations`),
      ])

      const [topics, categories, locations] = await Promise.all([
        topicsRes.json(),
        categoriesRes.json(),
        locationsRes.json(),
      ])

      setFilterData({
        topics: topics.data?.length ? topics.data : [],
        categories: categories.data?.length ? categories.data : [],
        locations: locations.data?.length ? locations.data : [],
      })

      setError({
        topics: !topics.data?.length ? 'No topics available' : '',
        categories: !categories.data?.length ? 'No categories available' : '',
        locations: !locations.data?.length ? 'No locations available' : '',
      })
    } catch (error) {
      console.error('Error fetching filter data:', error)
      setError({
        topics: 'Failed to load topics',
        categories: 'Failed to load categories',
        locations: 'Failed to load locations',
      })
    }
  }

  const generateQueryParams = (pageNumber: number) => {
    const queryParams = new URLSearchParams()
    queryParams.append('page', pageNumber.toString())
    queryParams.append('limit', videosPerPage.toString())

    if (filters.topic && filters.topic !== 'all') {
      queryParams.append('topic', filters.topic)
    }
    if (filters.category) {
      queryParams.append('genre', filters.category)
    }
    if (filters.location) {
      queryParams.append('location_id', filters.location.id.toString())
    }
    return queryParams.toString()
  }

  const fetchVideos = async (pageNumber: number, reset: boolean = false) => {
    setIsLoading(true)
    try {
      const queryParams = generateQueryParams(pageNumber)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos/latest?${queryParams}`,
      )
      const data = await response.json()
      const placeholderImage = Fallback

      const processedVideos = await Promise.all(
        data.data.map(async (video: any) => {
          if (!video.image) {
            video.image = placeholderImage
          } else {
            try {
              const imageResponse = await fetch(video.image, { method: 'HEAD' })
              if (!imageResponse.ok) {
                video.image = placeholderImage
              }
            } catch (error) {
              video.image = placeholderImage
            }
          }
          return video
        }),
      )

      setVideos(videos => reset ? processedVideos : [...videos, ...processedVideos])
      setHasMore(data.meta.last_page > pageNumber)
      setPage(pageNumber)
    } catch (error) {
      console.error('Error fetching videos:', error)
      setError({ videos: 'Error fetching videos. Please try again.' })
    } finally {
      setIsLoading(false)
      setLoadingMore(false)
    }
  }

  const handleFilterChange = (type: string, value: any) => {
    if (value === 'all') {
      setFilters({
        topic: 'all',
        category: null,
        location: null,
      })
    } else {
      setFilters(prev => ({ ...prev, [type]: value }))
    }
  }

  const loadMoreVideos = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true)
      fetchVideos(page + 1)
    }
  }

  return (
    <>
      <Header />
      <main>
        <Container className="mt-16 sm:mt-20">
          <div className="mr-[43px] text-center text-[20px] font-bold text-[#2B2B2B] md:text-left md:text-[40px]">
            Videos
          </div>
          <div className="mt-[20px] w-full justify-between md:flex">
            <div className="gap-4 md:flex md:flex-wrap">
              {error.topics && <p className="text-sm text-red-500 mb-2">{error.topics}</p>}
              <button
                type="button"
                onClick={() => handleFilterChange('topic', 'all')}
                className={`inline-flex items-center rounded-md px-[13px] py-2 text-[12px] font-medium shadow md:text-[14px] ${filters.topic === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-[#525252] hover:bg-gray-50'
                  }`}
              >
                All
              </button>
              {filterData.topics.map((topic) => (
                <button
                  type="button"
                  key={topic.id}
                  onClick={() => handleFilterChange('topic', topic.name)}
                  className={`inline-flex items-center rounded-md px-[13px] py-2 text-[12px] font-medium shadow md:text-[14px] ${filters.topic === topic.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-[#525252] hover:bg-gray-50'
                    }`}
                >
                  {topic.name}
                </button>
              ))}
            </div>
            <div className="hidden w-2/5 justify-end px-6 md:flex">
              <div className="mr-2">
                <Listbox
                  value={filters.category}
                  onChange={(value) => handleFilterChange('category', value)}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                      <span className="block truncate pr-1">
                        {filters.category || 'Select genre'}
                      </span>
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {error.categories && (
                          <div className="py-2 px-4 text-sm text-red-500">
                            {error.categories}
                          </div>
                        )}
                        {filterData.categories.map((category) => (
                          <Listbox.Option
                            key={category.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                              }`
                            }
                            value={category.name}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {category.name}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div>
                <Listbox
                  value={filters.location}
                  onChange={(value) => handleFilterChange('location', value)}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                      <span className="block truncate pr-1">
                        {filters.location ? filters.location.name : 'Select a location'}
                      </span>
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {error.locations && (
                          <div className="py-2 px-4 text-sm text-red-500">
                            {error.locations}
                          </div>
                        )}
                        {filterData.locations.map((location) => (
                          <Listbox.Option
                            key={location.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                              }`
                            }
                            value={location}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {location.name}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>

          {error.videos && (
            <div className="mt-4 rounded-md bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">{error.videos}</h3>
                </div>
              </div>
            </div>
          )}

          <div className="mt-[90px] flex flex-col justify-between gap-32 md:flex-row">
            {isLoading ? (
              <div className="flex gap-4">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    role="status"
                    className="h-96 max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
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
              <div className="">
                {videos && videos.length > 0 ? (
                  <>
                    <ul
                      role="list"
                      className="grid grid-cols-2 gap-x-4 gap-y-[12px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[50px] lg:grid-cols-4 xl:gap-x-8"
                    >

                      {videos.map((file) => (
                        <li key={file.id} className="relative">
                          <Link href={`/videos/${file.slug}`}>
                            <div className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                              <img
                                src={file.image}
                                alt=""
                                className="pointer-events-none h-full w-full object-cover group-hover:opacity-75"
                              />
                              <Image
                                className="absolute inset-0 m-auto h-[23.13px] w-[32.81px] object-contain md:h-auto md:w-[61px] md:object-cover"
                                width={150}
                                height={150}
                                src={Yt}
                                alt={'yt'}
                              />
                            </div>
                            <div className="mt-[18px] flex gap-3 md:mt-5">
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-md bg-white px-2 py-1.5 text-[12px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50 md:px-6 md:text-[17px]"
                              >
                                {file.duration} min
                              </button>
                              <p className="pointer-events-none mt-2 block truncate text-[12px] font-medium text-[#525252] md:text-[16px]">
                                {file.category}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center gap-3">
                              <Rating
                                videoId={file.id}
                                initialRating={file.stars || 0}
                              />
                              <div className="text-sm italic text-gray-500">
                                {file.creator.name}
                              </div>
                            </div>
                            <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                              {file.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-4 mt-8 flex justify-center">
                      {hasMore && (
                        <button
                          onClick={loadMoreVideos}
                          className="mx-auto mt-8 block rounded-lg bg-blue-600 px-6 py-3 text-[14px] font-semibold text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-200"
                        >
                          {loadingMore ? 'Loading...' : 'Load More'}
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-md bg-yellow-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <ExclamationTriangleIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">
                          No videos found for selected filters
                          </h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>
                              We couldn&apos;t find any videos at the moment.
                              Please search another topic or try refreshing the
                              page.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
