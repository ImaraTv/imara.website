'use client'
import React, { Fragment, useState, useEffect } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import Yt from '@/images/player.png'
import Fallback from '@/images/video.png'
import Address from '@/components/Address'
// import { getLoggedInUser } from '../../../utils/authUtils';
import { useAuth } from '@/../hooks/useAuth'
import { isLoggedIn } from '@/../utils/authUtils'
import axios from 'axios'
import { getAccessToken } from '@/../utils/authUtils'
import Rating from '@/components/Rating'

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
    name: 'Edit profile ',
    url: '/profile-edit',
  },
  {
    id: 4,
    name: 'All settings',
    url: '/profile-edit',
  },
]

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
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
interface UserData {
  name: string
  email: string
  // Add any other properties that are part of the user data
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

export default function ContinueWatching() {
  // const user = getLoggedInUser();

  const { user, isLoggedIn, logout } = useAuth()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('')

  const [userData, setUserData] = useState<UserData | null>(null)
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
  const numCards = 4

  const fetchVideosByCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?category=${selectedCategory}`,
      )
      const data = await response.json()
      setVideos(data.data)
    } catch (error) {
      console.error('Error fetching videos by category:', error)
    }
  }

  const handleCategoryClick = (categoryName: any) => {
    setSelectedCategory(categoryName)
  }

  useEffect(() => {
    if (selectedCategory) {
      fetchVideosByCategory()
    }
  }, [selectedCategory])

  let [isOpen, setIsOpen] = useState(true)

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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`,
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

    fetchVideos()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="mt-14 text-[40px] font-bold text-[#2B2B2B]">
            {userData ? (
              <div>
                <p>Welcome {userData.name}</p>
                {/* Render additional user details as needed */}
              </div>
            ) : (
              <p>Loading user...</p>
            )}
          </div>

          <div className="-ml-4 mb-[70px] mt-[33px] flex px-6">
            {categories.map((category) => (
              <Link
                href={category.url}
                key={category.id}
                className={`mr-2 inline-flex items-center gap-x-2 rounded-md px-6 py-2 text-[20px] font-bold text-[#525252] shadow-sm ring-2 ring-inset ring-[#007BFF] hover:bg-gray-50 ${
                  category.name === 'Continue Watching'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Container>

        <div className="mb-[105px] flex flex-col space-y-[60px] bg-[#F3F3F3] p-[60px]">
          <div className="text-[24px] font-medium text-[#767676]">
            Continue watching from where you left on your favorite films
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {videos.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-[5px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                style={cardStyle}
              >
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-8">{post.duration} min</div>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.image}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.name}
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={`/videos/${post.name}`}>
                    <span className="absolute inset-0" />
                    {post.name}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* Related Films */}
        <Container>
          <div className="mt-14 text-[40px] font-bold text-[#2B2B2B]">
            Other related films
          </div>

          <div className="mb-[160px] mt-[38px]">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
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
                            href={`/videos/${selectedFile && encodeURIComponent(selectedFile.name.toLowerCase().replace(/\s+/g, '-'))}`}
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

        <Address />
      </main>
      <Footer />
    </>
  )
}
