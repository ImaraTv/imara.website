'use client'
import React, { Fragment, useState, useEffect } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import Yt from '@/images/yt.png'
import Address from '@/components/Address'
// import { getLoggedInUser } from '../../../utils/authUtils';
import { useAuth } from '@/../hooks/useAuth'
import { isLoggedIn } from '@/../utils/authUtils'
import axios from 'axios'
import { getAccessToken } from '@/../utils/authUtils'

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
export default function ContinueWatching() {
  // const user = getLoggedInUser();

  const { user, isLoggedIn, logout } = useAuth()
  // const [categories, setCategories] = useState<{ id: number; name: string }[]>(
  //   [],
  // )
  const [selectedCategory, setSelectedCategory] = useState('')
  const [videos, setVideos] = useState([])
  const [userData, setUserData] = useState<UserData | null>(null)

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://dashboard.imara.tv/api/categories',
  //       )
  //       const data = await response.json()
  //       setCategories(data.data)
  //     } catch (error) {
  //       console.error('Error fetching categories:', error)
  //     }
  //   }

  //   fetchCategories()
  // }, [])

  const fetchVideosByCategory = async () => {
    try {
      const response = await fetch(
        `https://dashboard.imara.tv/api/videos?category=${selectedCategory}`,
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

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = getAccessToken()
        const response = await axios.get(
          'https://dashboard.imara.tv/api/profile',
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
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-[5px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                style={cardStyle}
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>

        <Container>
          <div className="mt-14 text-[40px] font-bold text-[#2B2B2B]">
            Other related films
          </div>

          <div className="mb-[160px] mt-[38px]">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {files.map((file) => (
                <li key={file.title} className="relative">
                  <div
                    onClick={openModal}
                    className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                  >
                    <img
                      src={file.source}
                      alt=""
                      className="pointer-events-none object-cover group-hover:opacity-75"
                    />

                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.title}
                      </span>
                    </button>
                  </div>
                  <Image
                    className="absolute inset-0 left-1/2 top-1/4"
                    width={50}
                    height={43}
                    src={Yt}
                    alt={'ÿt'}
                  />
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50"
                    >
                      {file.time}
                    </button>
                    <p className="pointer-events-none mt-2 block truncate text-[16px] font-medium text-[#525252]">
                      {file.category}
                    </p>
                  </div>

                  <p className="pointer-events-none mt-9 block text-[19px] font-bold text-[#525252]">
                    {file.title}
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
                          Making the right decision
                        </Dialog.Title>
                        <div className="mt-5 flex items-center gap-7">
                          <button className="rounded-lg bg-[#F2970F] px-2 py-1 text-[18px] font-bold text-white">
                            HD
                          </button>
                          <div className="text-[15px] font-medium text-[#525252]">
                            2023
                          </div>
                          <div className="text-[15px] font-medium text-[#525252]">
                            1 hr
                          </div>
                        </div>
                        <div className="mb-[27px] mt-[55px] flex items-center gap-1">
                          <div className="text-[20px] font-bold text-[#525252]">
                            Category:
                          </div>
                          <div className="text-[17px] font-medium text-[#525252]">
                            GBV awareness
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-[15px] text-[#525252]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
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

        <Address />
      </main>
      <Footer />
    </>
  )
}
