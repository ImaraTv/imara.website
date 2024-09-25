'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import Rating from '@/components/Rating'
import Image from 'next/image'
import Link from 'next/link'

import Yt from '@/images/player.png'
import Fallback from '@/images/video.png'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'
import { url } from 'inspector'

const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029',
}

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
  { id: 1, name: '4D', unavailable: false },
  { id: 2, name: 'HD', unavailable: false },
  { id: 3, name: 'Medium', unavailable: false },
  { id: 4, name: 'Standard', unavailable: true },
  { id: 5, name: 'Low', unavailable: false },
]

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

export default function Videos() {
  const [selected, setSelected] = useState(qualities[0])
  const [active, setActive] = useState(dates[0])
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  )
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([])
  const [locations, setLocations] = useState<{ id: number; name: string }[]>([])

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

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchVideos(currentPage)
  }, [currentPage])

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  let [isOpen, setIsOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedGenre, setSelectedGenre] = useState<{
    id: number
    name: string
  } | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<{
    id: number
    name: string
  } | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

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

  const fetchVideos = async (page: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos/latest?page=${page}`,
      )
      const data = await response.json()
      const placeholderImage = Fallback

      const processedVideos = await Promise.all(
        data.data.map(async (video: any) => {
          // Check if image is null or empty
          if (!video.image) {
            video.image = placeholderImage
          } else {
            try {
              // Attempt to fetch the image using the HEAD method
              const imageResponse = await fetch(video.image, {
                method: 'HEAD',
              })
              if (!imageResponse.ok) {
                // If the image doesn't exist, use the placeholder
                video.image = placeholderImage
              }
            } catch (error) {
              // If fetching the image fails (e.g., network error), use the placeholder
              video.image = placeholderImage
            }
          }
          return video
        }),
      )
      setVideos(processedVideos)
      setTotalPages(data.meta.last_page)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching videos:', error)
      setIsLoading(false)
    }
  }

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
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
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`,
        )
        const data = await response.json()
        setGenres(data.data)
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }

    fetchGenres()
  }, [])

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/locations`,
        )
        const data = await response.json()
        setLocations(data.data)
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    }
    fetchLocations()
  }, [])

  // const fetchVideos = async (pageNumber: number, category: number | null) => {
  //   try {
  //     const query = category
  //       ? `?category=${category}&page=${pageNumber}`
  //       : `?page=${pageNumber}`
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos${query}`,
  //     )
  //     const data = await response.json()
  //     if (data.data.length === 0) {
  //       setHasMore(false)
  //     } else {
  //       setVideos((prevVideos) => [...prevVideos, ...data.data])
  //     }
  //   } catch (error) {
  //     console.error('Error fetching videos:', error)
  //   }
  // }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !hasMore
      )
        return
      setPage((prevPage) => prevPage + 1)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !hasMore
      )
        return
      setPage((prevPage) => prevPage + 1)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore])

  const handleCategoryClick = (categoryName: any) => {
    setSelectedCategory(categoryName)
    setIsLoading(true)
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?category=${categoryName}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
        setIsLoading(false)
      })
  }

  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?search=${query}`,
      )
      const data = await response.json()
      setSearchResults(data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchQuery.length > 2) {
      fetchSearchResults(searchQuery)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])
  const numCards = 3

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="mt-5 text-[20px] font-bold text-[#2B2B2B] md:mt-14 md:text-[40px]">
            All our videos
          </div>

          <div className="mt-[20px] justify-between md:flex">
            <div className="gap-4 md:flex">
              {categories.map((category, index) => (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`inline-flex items-center rounded-md px-[13px] py-2 text-[12px] font-medium shadow-sm md:text-[14px] ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white' // Active category styling
                      : 'bg-white text-[#525252] hover:bg-gray-50' // Inactive category styling
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex">
              <div className="">
                <Listbox value={selectedGenre} onChange={setSelectedGenre}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-xs font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50 md:text-[14px]">
                      <span className="block truncate pr-1">
                        {selectedGenre ? selectedGenre.name : 'Select a genre'}
                      </span>
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
                      <Listbox.Options className="absolute mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {genres.map((genre, genreIdx) => (
                          <Listbox.Option
                            key={genreIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? 'bg-amber-100 text-amber-900'
                                  : 'text-gray-900'
                              }`
                            }
                            value={genre}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {genre.name}
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
                <Listbox
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-xs font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50 md:text-[14px]">
                      <span className="block truncate pr-1">
                        {selectedLocation
                          ? selectedLocation.name
                          : 'Select a location'}
                      </span>
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
                      <Listbox.Options className="absolute mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black/5 focus:outline-none md:text-base">
                        {locations.map((location, locationIdx) => (
                          <Listbox.Option
                            key={locationIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? 'bg-amber-100 text-amber-900'
                                  : 'text-gray-900'
                              }`
                            }
                            value={location}
                          >
                            {({ active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    active ? 'font-sm' : 'font-xs'
                                  }`}
                                >
                                  {location.name}
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
            </div>
          </div>

          <div className="mt-[90px] flex flex-col justify-between md:flex-row">
            {isLoading ? (
              <div className="flex gap-4">
                {Array.from({ length: numCards }, (_, index) => (
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
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-x-4 gap-y-[25px] sm:grid-cols-3 sm:gap-x-6 md:gap-y-[100px] lg:grid-cols-3 xl:gap-x-8"
                >
                  {videos.map((video) => (
                    <li key={video.name} className="relative">
                      <Link
                        href={`/videos/${encodeURIComponent(
                          video.name.toLowerCase().replace(/\s+/g, '-'),
                        )}-${video.id}`}
                      >
                        <div className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                          <img
                            src={video.image}
                            alt=""
                            className="pointer-events-none h-full w-full object-cover group-hover:opacity-75"
                          />
                          <Image
                            className="absolute inset-0 m-auto h-[23.13px] w-[32.81px] object-contain md:object-cover md:h-auto md:w-[61px]"
                            width={150}
                            height={150}
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
                        <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                          {video.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 mt-8 flex justify-center">
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                    >
                      <span className="sr-only">Previous</span>
                      &larr;
                    </button>
                    {[...Array(totalPages).keys()].map((page) => (
                      <button
                        key={page + 1}
                        onClick={() => handlePageChange(page + 1)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page + 1 ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
                      >
                        {page + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                    >
                      <span className="sr-only">Next</span>
                      &rarr;
                    </button>
                  </nav>
                </div>
              </div>
            )}
            <div>
              <ul
                role="list"
                className="mt-10 space-y-12 md:-mt-12 xl:col-span-3"
              >
                {videos.map((video) => (
                  <li key={video.name}>
                    <Link
                      href={`/videos/${encodeURIComponent(
                        video.name.toLowerCase().replace(/\s+/g, '-'),
                      )}-${video.id}`}
                    >
                      <div className="flex flex-row items-center gap-10 pt-12 sm:flex-row md:flex-col">
                        <img
                          className="aspect-[4/5] w-[131px] flex-none rounded-l-2xl object-cover"
                          src={video.image}
                          alt=""
                        />
                        <div className="max-w-xl flex-col space-y-[26px]">
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
          </div>

          {/* Pagination Controls */}
        </Container>
      </main>
      <Footer />
    </>
  )
}
