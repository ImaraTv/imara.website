'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import Yt from '@/images/player.png'
import Fallback from '@/images/video.png'
import Address from '@/components/Address'
import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'
import axios from 'axios'
import { getAccessToken } from '@/../utils/authUtils'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const cardStyle = {
  boxShadow: '0px 4px 28px 3px #0000001A',
}

const categories = [
  {
    id: 1,
    name: 'Continue Watching',
    url: '/continue-watching',
  },
  {
    id: 2,
    name: 'Saved Films',
    url: '/saved',
  },
  {
    id: 3,
    name: 'Edit profile',
    url: '/profile-edit',
  },
  {
    id: 4,
    name: 'All settings',
    url: '/profile-edit',
  },
]

const filters = [
  {
    id: 1,
    name: 'Continue Watching',
  },
  {
    id: 2,
    name: 'Saved Films',
  },
  {
    id: 3,
    name: 'Edit profile ',
  },
  {
    id: 4,
    name: 'All settings',
  },
]
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
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const suggestions = [
  {
    id: 1,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'The bad choice',
    series: 'series/ ss2 / Eps 3',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

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

interface UserData {
  name: string
  email: string
  // Add any other properties that are part of the user data
}
export default function Saved() {
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

  const [recoms, setRecoms] = useState<
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
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([])
  const [locations, setLocations] = useState<{ id: number; name: string }[]>([])
  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null)
  let [isOpen, setIsOpen] = useState(false)
  let [isOpen2, setIsOpen2] = useState(false)
  const [selected, setSelected] = useState(qualities[0])
  const [active, setActive] = useState(dates[0])

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [selectedGenre, setSelectedGenre] = useState<{
    id: number
    name: string
  } | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<{
    id: number
    name: string
  } | null>(null)

  const openModal = (file: File) => {
    setSelectedFile(file)
    setIsOpen(true)
  }

  const openModal2 = (file: Video) => {
    setSelectedVideo(file)
    setIsOpen2(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedFile(null)
  }

  const closeModal2 = () => {
    setIsOpen2(false)
    setSelectedVideo(null)
  }

  useEffect(() => {
    return () => {
      setIsOpen(false)
      setIsOpen2(false)
    }
  }, [])

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const accessToken = getAccessToken()
        console.log(accessToken);
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        const data = await response.json()
        if (data.data && Array.isArray(data.data)) {
          setBookmarks(
            data.data.flatMap((bookmark: any) => bookmark.videos.data),
          )
        } else {
          setBookmarks([])
          console.error('Unexpected API response format')
        }
      } catch (error) {
        console.error('Error fetching bookmarks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookmarks()
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
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos/recommended`,
          {
            method: 'GET', // Specify the request method if not GET by default
            headers: {
              'Content-Type': 'application/json', // Ensure the content type is correct
              'Access-Control-Allow-Origin': 'https://test.imara.tv', // Only if you are controlling the server
              // Include any other headers required by the server, like authentication tokens
            },
          },
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
        // setVideos(data.data);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching videos:', error)
        setIsLoading(false)
      }
    }

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

    const fetchFilteredVideos = async () => {
      setIsLoading(true)
      try {
        // const query = selectedCategory ? `?category=${selectedCategory}` : ''
        // Initialize query parameters
        let query = ''

        // Add genre to query if selected
        if (selectedGenre) {
          query += query
            ? `&genre=${selectedGenre.id}`
            : `?genre=${selectedGenre.id}`
        }

        // Add location to query if selected
        if (selectedLocation) {
          query += query
            ? `&location=${selectedLocation.id}`
            : `?location=${selectedLocation.id}`
        }
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos/latest${query}`,
        )
        const data = await response.json()
        setVideos(data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching videos:', error)
        setIsLoading(false)
      }
    }

    fetchVideos()
    fetchLocations()
    fetchFilteredVideos()
  }, [selectedGenre, selectedLocation])

  const handleGenreClick = (genreName: any) => {
    setSelectedGenre(genreName)
    setIsLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?genre=${genreName}`)
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

  const handleLocationClick = (locationName: any) => {
    setSelectedLocation(locationName)
    setIsLoading(true)
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?location=${locationName}`,
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

  //profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = getAccessToken()
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        // Handle the response data
        const userData = response.data.data
        setUserData(userData[0])
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchUserProfile()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="mt-14 text-lg font-bold text-[#2B2B2B] md:text-[40px]">
            {userData ? (
              <div>
                <p>Welcome {userData.name}</p>
                {/* Render additional user details as needed */}
              </div>
            ) : (
              <p>Loading user...</p>
            )}
          </div>

          <div className="-ml-4 mb-10 mt-[33px] grid grid-cols-2 gap-y-2 px-4 md:mb-[70px] md:grid-cols-5">
            {categories.map((category) => (
              <Link
                href={category.url}
                key={category.id}
                className={`mr-2 flex items-center justify-center gap-1 rounded-md px-2 py-2 text-xs font-bold text-[#525252] shadow-sm ring-2 ring-inset ring-[#007BFF] hover:bg-blue-500 hover:text-white md:gap-2 md:px-6 md:text-[20px] ${
                  category.name === 'Saved Films'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Container>

        <div className="mb-10 flex flex-col space-y-[20px] bg-[#F3F3F3] p-10 md:mb-[105px] md:space-y-[60px] md:p-[60px]">
          <div className="text-lg font-medium text-[#767676] md:text-[24px]">
            You love a show? we allow you come back to it later.
          </div>

          <div className="mt-[53px] md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-2 px-0 md:grid-cols-4 md:gap-0 md:px-6">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter.id}
                  className="mr-2 inline-flex items-center justify-center gap-1 rounded-md bg-white px-2 py-2 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50 md:gap-2 md:px-6"
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="hidden w-2/5 justify-end px-6 md:flex">
              <div className="">
                <Listbox value={selectedGenre} onChange={setSelectedGenre}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
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
                        {genres.map((quality, qualityIdx) => (
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
                                  onClick={() => handleGenreClick(quality.name)}
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
                <Listbox
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                >
                  <div className="relative mt-1">
                    <Listbox.Button className="relative mr-2 inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[14px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
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
                      <Listbox.Options className="absolute mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {locations.map((date, dateIdx) => (
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
                                  onClick={() => handleLocationClick(date.name)}
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
            </div>
          </div>

          <div className="mb-[160px] mt-[38px]">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
            >
              {bookmarks.length > 0 ? (
                bookmarks.map((video: Video) => (
                  <li key={video.id} className="relative">
                    <Link href={`/videos/${video.slug}`}>
                      <div className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
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

                      <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                        {video.name}
                      </p>
                    </Link>
                  </li>
                ))
              ) : (
                <button
                  type="button"
                  className="relative block w-48 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-full"
                >
                  <QuestionMarkCircleIcon className="mx-auto h-12 w-12 text-gray-500" />
                  <span className="mt-2 block text-sm font-semibold text-gray-900">
                    No bookmarks found
                  </span>
                </button>
              )}
            </ul>
          </div>
        </div>

        <Container>
          <div className="mt-2 text-2xl font-bold text-[#2B2B2B] md:mt-14 md:text-[40px]">
            Other recommended films
          </div>

          <div className="mb-[160px] mt-[38px]">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {videos.map((video) => (
                <li key={video.id} className="relative">
                  <Link href={`/videos/${video.slug}`}>
                    <div className="group aspect-h-7 aspect-w-10 relative block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
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

                    <p className="pointer-events-none mt-4 block text-[15px] font-bold text-[#525252] md:mt-9 md:text-[19px]">
                      {video.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Address />
      </main>
      <Footer />
    </>
  )
}
