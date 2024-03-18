"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, {Fragment, useEffect, useState} from "react";
import {Dialog, Listbox, Transition} from "@headlessui/react";
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Youtube from "@/images/youtube.png"
import Banner from "@/images/carousel.png"
import VideoBanner from "@/images/video.png"
import Image from "next/image"
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import Yt from "@/images/yt.png"
import styled from 'styled-components';
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029'
};

interface File {
    title: string;
    category: string;
    time: string;
    description: string;
    source: string;
    // Add other properties as needed
}
const files: File[] = [
    {
        title: 'Chills for Who',
        category: 'Mental health',
        time: '1hr 23 min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'The Circle',
        category: 'Politics',
        time: '45 min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Hapa nje kwetu',
        category: 'Mental health',
        time: '45 min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Against my will short film',
        category: 'GBV',
        time: '22 min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
]


export default function Watch() {

  let [isOpen, setIsOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const openModal = (file: File) => {
      setSelectedFile(file);
      setIsOpen(true);
  };

  const closeModal = () => {
      setIsOpen(false);
      setSelectedFile(null);
  };

  useEffect(() => {
      // Reset isOpen state when the component unmounts
      return () => {
          setIsOpen(false);
      };
  }, []);
  return (
    <>
      <Header />
      <main>

        {/* Hero card */}
        <div className="">
          <div className="relative isolate sm:overflow-hidden h-[240px] md:h-[546px]">
              <Image
                className="h-[240px] md:h-full w-full object-cover absolute inset-0 -z-10"
                src={Banner}
                alt={"contact"}
                width={1440}
                height={546}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40"/>
              <div className="absolute inset-0 -z-10 rounded-md ring-1 ring-inset ring-gray-900/10"/>

              <Image className="absolute inset-0 m-auto" src={Youtube} width={52.5} height={52.5} alt={"youtube icon"} />

          </div>
        </div>

        {/* Buttons */}
        <Container>
        <div className='flex flex-wrap items-center justify-center gap-5 mt-5'>
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
            <CloudArrowDownIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Download
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Save
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <ShareIcon className="-ml-0.5 h-5 w-5 text-[#F2970F]" aria-hidden="true" />
            Share
          </button>
        </div>
        </Container>

        <Container>
          {/* Video details */}
          <div className='flex justify-between my-[58px] md:my-[148px] rounded-md'>
            <div className="flex relative flex-col md:flex-row w-full md:w-3/4 gap-12 rounded-md md:rounded-none h-[580px] md:h-auto shadow-10xl md:shadow-none">
              <Image width={405} height={352} src={VideoBanner} alt={"video image"} className="absolute md:relative rounded-md inset-0 -z-10 md:mr-4 flex-shrink-0 h-[352px] md:h-[391px] w-full md:w-[316px] object-cover" />
              <div className='absolute bottom-0 md:relative flex flex-col gap-[30px] px-[25px] md:px-0 pb-4'>
                <h4 className="text-[40px] md:text-[#2B2B2B] text-white font-bold">Friend Zone short film</h4>
                <div className='flex gap-7 items-center'>
                  <button className='px-2 py-1 bg-[#F2970F] rounded-lg font-bold text-[18px] text-white'>HD</button>
                  <div className='font-medium text-[18px] md:text-[#525252] text-white'>2023</div>
                  <div className='font-medium text-[18px] md:text-[#525252] text-white'>43 min </div>
                  <div className='font-medium text-[18px] md:text-[#525252] text-white'>Ranked : 4.7</div>
                </div>
                <p className="mt-1 text-[18px] md:text-[#525252] text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='flex flex-col'>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold md:text-[#525252] text-white'>Type:</span>
                    <span className='text-[18px] md:text-[#525252] text-white'>Short Film</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold md:text-[#525252] text-white'>Pg:</span>
                    <span className='text-[18px] md:text-[#525252] text-white'>18 plus</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold md:text-[#525252] text-white'>Date:</span>
                    <span className='text-[18px] md:text-[#525252] text-white'>2 Jan 2024</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold md:text-[#525252] text-white'>Director:</span>
                    <span className='text-[18px] md:text-[#525252] text-white'>Imara Tv crew</span>
                  </div>
                  <div className='flex gap-2'>
                    <span className='text-[18px] font-bold md:text-[#525252] text-white'>Categories:</span>
                    <span className='text-[18px] md:text-[#525252] text-white'>Adovocacy, Sexual health, Decision making, SRH</span>
                  </div>
                </div>
              </div>
              <div className="absolute md:relative inset-0 -z-10 bg-gradient-to-t from-[#000000] via-[#000000]"/>
              <div className="absolute md:relative inset-0 -z-10 rounded-md ring-1 ring-inset ring-[#000000]"/>

              <div className="md:hidden md:w-1/4 gap-12 absolute top-[19px] right-[18px] md:relative">
                <div className="flex items-center justify-center px-4 gap-2 bg-white rounded h-12" style={cardStyle}>
                  <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex md:w-1/4 gap-12 absolute right-[18px] md:relative">
              <div className="flex items-center justify-center px-4 gap-2 bg-white rounded h-12" style={cardStyle}>
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
                <StarIcon className="h-5 w-5 text-[#F2970F]" aria-hidden="true" />
              </div>
            </div>

          </div>
        </Container>


        {/* Related */}
        <Container>
          <div className="isolate mt-[58px] md:mt-[110px] px-6 py-12 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-[20px] md:text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">Other related films</h2>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {files.map((file) => (
                <li key={file.title} className="relative">
                    <div onClick={() => openModal(file)}
                         className="relative group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <img src={file.source} alt=""
                             className="pointer-events-none h-full w-full object-cover group-hover:opacity-75"/>
                        <Image className='w-[32.81px] md:w-[61px] h-[23.13px] md:h-[43px] absolute inset-0 m-auto' width={50} height={43} src={Yt}
                               alt={"ÿt"}/>
                    </div>
                    <div className='flex gap-3 mt-[18px] md:mt-5'>
                        <button
                            type="button"
                            className="inline-flex items-center gap-x-2 rounded-md bg-white px-2 md:px-6 py-1.5 text-[12px] md:text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50"
                        >
                            {file.time}
                        </button>
                        <p className="pointer-events-none mt-2 block truncate text-[12px] md:text-[16px] font-medium text-[#525252]">{file.category}</p>
                    </div>

                    <p className="pointer-events-none block text-[15px] md:text-[19px] mt-4 md:mt-9 font-bold text-[#525252]">{file.title}</p>
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
                        <div className="fixed inset-0 bg-black/25"/>
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
                                <Dialog.Panel
                                    className="w-[342px] h-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-[19px] font-bold text-[#525252]"
                                    >
                                        {selectedFile && selectedFile.title}
                                    </Dialog.Title>
                                    <div className='flex gap-7 items-center mt-5'>
                                        <button
                                            className='px-2 py-1 bg-[#F2970F] rounded-lg font-bold text-[18px] text-white'>HD
                                        </button>
                                        <div className='font-medium text-[15px] text-[#525252]'>{selectedFile && selectedFile.time}</div>
                                    </div>
                                    <div className='flex gap-1 items-center mt-[55px] mb-[27px]'>
                                        <div className='font-bold text-[20px] text-[#525252]'>Category:
                                        </div>
                                        <div className='font-medium text-[17px] text-[#525252]'>{selectedFile && selectedFile.category}</div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-[15px] text-[#525252]">
                                            {selectedFile && selectedFile.description}
                                        </p>
                                    </div>

                                    <div className="mt-9">
                                        <Link href="/watch"
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
            <div className="md:hidden flex items-center justify-end text-[#F2970F] space-x-2 mb-[60px]">
                <span className="text-[18px] font-bold">Load more </span>
                <ArrowDownIcon className="h-[18px] w-[18px]"/>
            </div>
        </Container>

        <div className="bg-[#F3F3F3] h-[372px] mb-[142px] mt-20 py-10 text-center">
          <h1 className='text-[40px] text-[#2B2B2B] font-bold'>How did you find this film?</h1>
          <p className='text-[18px] text-[#525252] leading-[34px] py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='flex items-center justify-center gap-3'>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
              </svg>
            </span>
            <span>
              <svg className='h-6 w-6 text-[#F2970F]' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
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
