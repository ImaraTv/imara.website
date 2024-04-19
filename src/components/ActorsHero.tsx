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

export function ActorsHero() {
  const [creators, setCreators] = useState<
    { id: number; name: string; image: string; stage_name: string }[]
  >([])

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/creators')
        const data = await response.json()
        setCreators(data.data)
      } catch (error) {
        console.error('Error fetching creators:', error)
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
            <Button href="#" color="blue">
              <span>All actors</span>
            </Button>
            <Link
              href="#"
              className="group inline-flex items-center justify-center rounded-lg px-10 py-2 text-[12px] font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-lg"
            >
              Become a creator
            </Link>
          </div>
        </div>
        <div>
          <div className="flex h-60 items-stretch gap-[14px] md:gap-[56px]">
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
                  src={creator.image}
                  alt="avatar"
                  className="w-full rounded-[3px] object-cover sm:w-full md:h-auto"
                />
                <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">
                  {creator.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[34px] flex h-60 items-stretch gap-[14px] md:mt-[66px] md:gap-[56px]">
            {creators.slice(2).map((creator, index) => (
              <div
                key={creator.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'md:self-end' : ''
                }`}
              >
                <Image
                  width={194}
                  height={120}
                  src={creator.image}
                  alt="avatar"
                  className="w-full rounded-[3px] object-cover sm:w-full md:h-auto"
                />
                <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">
                  {creator.name}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-[33px] md:hidden">
            <Button href="#" color="blue">
              <span>All actors</span>
            </Button>
            <Link
              href="#"
              className="group inline-flex items-center justify-center rounded-lg px-10 py-2 text-[12px] font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-lg"
            >
              Become an actor
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
