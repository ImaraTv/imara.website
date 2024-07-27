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

import Link from 'next/link'

import Actor1 from '@/images/actors/isaac.png'
import Actor2 from '@/images/actors/moses.png'
import Actor3 from '@/images/actors/wambui.png'
import Actor4 from '@/images/actors/ruth.png'
import Actor from '@/images/actor.png'
import defaultImage from '@/images/default.jpg'

export function ActorsHero() {
  const [creators, setCreators] = useState<
    { id: number; name: string; image: string; stage_name: string }[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  const numCards3 = 2

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/creators')
        const data = await response.json()
        setCreators(data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching creators:', error)
        setIsLoading(false)
      }
    }

    fetchCreators()
  }, [])
  return (
    <>
      <div className="mt-[47px] grid grid-cols-1 gap-5 bg-[#F3F3F3] px-5 py-8 sm:grid-cols-2 md:mt-0 md:gap-[150px] md:px-[46px] md:py-[56px]">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start md:justify-start md:gap-10">
          <div className="text-[20px] font-bold text-[#2B2B2B] md:text-[40px]">
            Creators
          </div>
          <p className="text-center text-[18px] text-[#525252] md:text-left">
            Do you want to earn an income from your creative talents? Join other
            creators on Imara Tv and collaborate to create films that edutain
            the public and earn you royalties forever. Express yourself and grow
            your craft. Let your star shine for the world to see you. Become
            part of a community and grow your network. Sign up today as a
            creator and start your career journey in the film industry
          </p>
          <div className="hidden gap-[33px] md:flex">
            <Button href="/creators" color="blue">
              <span>All creators</span>
            </Button>
            <Link
              href="https://dashboard.imara.tv/admin/register?=creator"
              className="group inline-flex items-center justify-center rounded-lg px-10 py-2 text-[12px] font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-lg"
            >
              Become a creator
            </Link>
          </div>
        </div>
        <div>
        {isLoading ? (
        <div className="flex gap-4">
          {Array.from({ length: numCards3 }, (_, index) => (
            <div
              key={index}
              role="status"
              className="max-w-xl animate-pulse rounded p-1 shadow dark:border-gray-700 md:p-0"
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
              
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <div>

          <div className="flex h-auto items-stretch gap-[14px] md:gap-[56px]">
            {creators.slice(0, 2).map((creator, index) => (
              <div
                key={creator.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:self-end' : ''
                }`}
              >
                <Image
                  width={194}
                  height={120}
                  src={creator.image || defaultImage}
                  alt="avatar"
                  className="w-[194px] h-[120px] rounded-[3px] sm:w-full md:h-auto"
                />
                <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">
                  {creator.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[34px] flex h-auto items-stretch gap-[14px] md:mt-[96px] md:gap-[56px]">
            {creators.slice(2, 4).map((creator, index) => (
              <div
                key={creator.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:self-end' : ''
                }`}
              >
                <Image
                  width={194}
                  height={120}
                  src={creator.image || defaultImage}
                  alt="avatar"
                  className="w-[194px] h-[120px] rounded-[3px] sm:w-full md:h-auto"
                />
                <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">
                  {creator.name}
                </p>
              </div>
            ))}
          </div>
        </div>
)}
          <div className="flex items-center justify-center gap-[33px] md:hidden">
            <Button href="/creators" color="blue">
              <span>All creators</span>
            </Button>
            <Link
              href=""
              className="group inline-flex items-center justify-center rounded-lg px-10 py-2 text-[12px] font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-lg"
            >
              Become a creator
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
