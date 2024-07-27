"use client"
import React, { Fragment, useEffect, useState } from "react";
import { Footer } from '@/components/Footer'
import { Header2 } from '@/components/Header2'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image7 from '@/images/actors.png'
import Image3 from '@/images/vector2.svg'

import Kerubo from '@/images/actors/kerubo.png'
import Michael from '@/images/actors/michael.png'
import Faith from '@/images/actors/faith.png'
import Sunnah from '@/images/actors/sunnah.png'
import Byron from '@/images/actors/byron.png'
import Rama from '@/images/actors/rama.png'
import defaultImage from '@/images/default.jpg'

import Image from 'next/image'
import { Newsletter } from '@/components/Newsletter'
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

interface File {
  name: string
  role: string
  imageUrl: string
}
const files: File[] = [
  {
    name: 'Stephen Maina',
    role: 'CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Fred Onyango',
    role: 'CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Duncan M',
    role: 'Content Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

const cardStyle = {
  boxShadow: '0px 7px 18px 4px #00000021',
}

export default function Actors() {
  let [isOpen, setIsOpen] = useState(false)
  const [creators, setCreators] = useState<{ id: number; name: string; image: string; stage_name: string }[]>([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const openModal = (file: File) => {
    setSelectedFile(file)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedFile(null)
  }

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch('https://dashboard.imara.tv/api/creators');
        const data = await response.json();
        setCreators(data.data);
      } catch (error) {
        console.error('Error fetching creators:', error);
      }
    };

    fetchCreators();
  }, []);

  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!recaptchaToken) {
    alert("Please complete the reCAPTCHA challenge.");
    return;
  }
    if (!acceptedTerms) {  
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

  const formData = new FormData(e.currentTarget);
  formData.append('recaptchaToken', recaptchaToken);
  fetch('https://dashboard.imara.tv/api/creators', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Form submission successful:', data);
  })
  .catch(error => {
    console.error('Error submitting form:', error);
  });
};

  return (
    <>
      <Header2 />
      <main>
        {/* Hero */}

        <div className="relative isolate overflow-hidden bg-[#FCFCFC]">
          <Image
            src={Image3}
            alt={'chane'}
            className="absolute right-0 top-0 -z-10 hidden h-auto w-[704px] origin-top-right md:block"
          />
          <div className="mx-[16px] max-w-[1440px] md:mx-[47px]">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl pt-40 text-[20px] font-bold text-gray-900 sm:text-6xl md:text-[40px] lg:col-span-2 xl:col-auto">
                Earn money making films
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-sm leading-8 text-gray-600 md:text-lg">
                  Do you want to earn an income from your creative talents? Join
                  other creators on Imara Tv and collaborate to create films
                  that edutain the public and earn you royalties forever.
                  Express yourself and grow your craft. Let your star shine for
                  the world to see you. Become part of a community and grow your
                  network. Sign up today as a creator and start your career
                  journey in the film industry
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/videos"
                    className="rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
                  >
                    Watch our videos
                  </a>
                  <a
                    href="/sign-up"
                    className="rounded-md px-3.5 py-1 text-xs font-semibold leading-6 text-gray-900 ring-2 ring-[#007BFF] md:text-sm"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <Image
                src={Image7}
                width={616}
                height={409}
                alt={'image'}
                className="mt-10 w-full object-cover xl:row-span-2 xl:row-end-2"
              />
            </div>
          </div>
        </div>

        {/* Team */}
        <Container>
          <div className="mt-6 overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-left lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-[20px] font-bold tracking-tight text-[#2B2B2B] sm:text-4xl md:text-3xl">
                  Our Creators
                </h2>
                <p className="mt-4 text-sm leading-8 text-gray-400 md:text-lg">
                  Collaborate with other creators to produce films, earn an
                  income and entertain the public
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
              >
                {creators.map((creator) => (
                  <li
                    key={creator.name}
                    className="rounded-[5px] pb-10"
                    style={cardStyle}
                  >
                    <Image
                      className="h-48 w-full rounded-t-[5px] object-cover shadow-xl md:h-56"
                      src={creator.image || defaultImage}
                      alt=""
                      width={192}
                      height={192}
                    />
                    <h3 className="mt-6 px-8 text-xl font-bold tracking-tight text-[#474747] md:text-2xl">
                      {creator.name}
                    </h3>
                    <p className="mb-7 px-8 text-sm font-medium text-[#474747] md:text-lg">
                      {creator.stage_name}
                    </p>
                    <a
                      href="#"
                      className="mx-8 rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
                    >
                      View profile
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>

            <div className="mt-10 flex items-center justify-end text-sm font-bold text-[#F2970F] md:mt-20 md:text-[24px]">
              <div className="flex items-center gap-2">
                <h2>Load full list</h2>
                <svg
                  className="h-6 w-6 md:h-[24px] md:w-[24px]"
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
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </Container>

        <div className="isolate mt-20 bg-[#F3F3F3] px-6 py-12 md:mt-[110px] lg:px-8">
          <Container>
            <div className="flex justify-center">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-4xl md:text-[40px]">
                Join our community of creatives today
              </h2>
            </div>
            <form action="#" method="POST" className="mt-4 md:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 md:gap-y-6">
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Full Name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Phone number or Email"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 md:gap-y-6">
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Country of origin"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="What else can you do?"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 md:gap-y-6">
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="account-number"
                        id="account-number"
                        className="block w-full rounded-md border-0 bg-transparent py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Upload your picture"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className="h-5 w-5 text-[#F2970F]"
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
                            d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-[20px] md:mt-[52px]">
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="account-number"
                        id="account-number"
                        className="block w-full rounded-md border-0 bg-transparent py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Upload some of your work"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg
                          className="h-5 w-5 text-[#F2970F]"
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
                            d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                required 
              />
              <label htmlFor="terms" className="text-gray-700">
                I have read and accept the{' '}
                <Link
                  href="https://imara.tv/terms-of-use"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>

              <div className="mt-6">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={(token) => setRecaptchaToken(token)}
          />
        </div>
              <div className="mt-10 flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-[#007BFF] px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </Container>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
