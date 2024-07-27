"use client"
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import Rating from '@/components/Rating'
import Image from "next/image"
import Link from 'next/link'

import Yt from "@/images/player.png"
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'
import { url } from 'inspector';


const cardStyle = {
  boxShadow: '0px 4px 22px 3px #00000029'
};


const dates = [
  {
    id: 1,
    name: "Jan",
  },
  {
    id: 2,
    name: "Feb",
  },
  {
    id: 3,
    name: "Mar",
  },
  {
    id: 4,
    name: "Apr",
  },
  {
    id: 5,
    name: "May",
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
  category: string
  duration: number
  description: string
  image: string
  creator: string
  rating: number | null
  stars: number
  // Other properties
}


export default function Videos() {
  const [selected, setSelected] = useState(qualities[0])
  const [active, setActive] = useState(dates[0])
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    [],
  )
  const [videos, setVideos] = useState<
    {
      id: number
      name: string
      duration: number
      category: string
      description: string
      vimeo_link: string
      call_to_action: string
      call_to_action_link: string
      image: string
      creator: string
      rating: number
      stars: number
    }[]
  >([])
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  let [isOpen, setIsOpen] = useState(false)

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://imara.tv/admin/api/categories',
        )
        const data = await response.json()
        setCategories(data.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const fetchVideos = async (pageNumber: number, category: number | null) => {
    try {
      const query = category
        ? `?category=${category}&page=${pageNumber}`
        : `?page=${pageNumber}`;
      const response = await fetch(`https://imara.tv/admin/api/videos${query}`);
      const data = await response.json();
      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        setVideos((prevVideos) => [...prevVideos, ...data.data]);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos(1, selectedCategory); // Initial fetch
  }, [selectedCategory]);

  useEffect(() => {
    fetchVideos(page, selectedCategory);
  }, [page, selectedCategory]);

  useEffect(() => {
    setPage(1);
    setVideos([]);
    setHasMore(true);
    fetchVideos(1, selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
      setPage((prevPage) => prevPage + 1);
    };
  });
    useEffect(() => {
      fetchVideos(1, selectedCategory); // Initial fetch
    }, [selectedCategory]);

    useEffect(() => {
      fetchVideos(page, selectedCategory);
    }, [page, selectedCategory]);

    useEffect(() => {
      setPage(1);
      setVideos([]);
      setHasMore(true);
      fetchVideos(1, selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
        setPage((prevPage) => prevPage + 1);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore]);


    const handleCategoryClick = (categoryName: any) => {
      setSelectedCategory(categoryName);
      setIsLoading(true);
      fetch(`https://imara.tv/admin/api/videos?category=${categoryName}`)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
          setIsLoading(false);
        });
    };


    const fetchSearchResults = async (query: string) => {
      try {
        const response = await fetch(`https://imara.tv/admin/api/videos?search=${query}`);
        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      if (searchQuery.length > 2) {
        fetchSearchResults(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, [searchQuery]);
    const numCards = 4

    return (
      <>
        <Header />
        <main>
          <Container>
            <div className='font-bold text-[20px] md:text-[40px] text-[#2B2B2B] mt-5 md:mt-14'>All our videos</div>

            <div className='flex flex-col md:flex-row gap-2 justify-between mt-[40px] md:mt-[53px]'>
              <div className='flex'>
                <div className="hidden md:flex flex-1 items-center justify-center px-2">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-[#525252] font-medium" aria-hidden="true" />
                      </div>
                      <input
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                        className="block w-full rounded-[15px] border-0 bg-[#E2E2E2] py-[10px] pl-[14px] text-[#525252] ring-1 ring-inset ring-gray-300 placeholder:text-[#525252] placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="text"
                      />
                      {searchResults.length > 0 && (
                        <ul className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                          {searchResults.map((result) => (
                            <li key={result.id} className="px-4 py-2 hover:bg-gray-100">
                              <a href={`/videos/${result.id}`}>{result.name}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'>
                  {categories.map((category, index) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => handleCategoryClick(category.name)}
                      className={`text-12px] mr-[24px] inline-flex items-center gap-x-2 rounded-md bg-white px-[13px] py-2 font-medium text-[#525252] shadow-sm md:text-[17px] ${selectedCategory === category.id
                        ? 'ring-525252 ring-1 ring-inset'
                        : 'hover:bg-gray-50'
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

              </div>
              <div className='flex'>
                <div className="">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative inline-flex mr-2 items-center gap-x-2 rounded-md bg-white px-6 py-2 text-xs md:text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                        <span className="block truncate pr-1">{selected.name}</span>
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
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {qualities.map((quality, qualityIdx) => (
                            <Listbox.Option
                              key={qualityIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                }`
                              }
                              value={quality}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {quality.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                  <Listbox value={active} onChange={setActive}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative inline-flex mr-2 items-center gap-x-2 rounded-md bg-white px-6 py-2 text-xs md:text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                        <span className="block truncate pr-1">{active.name}</span>
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
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs md:text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
                          {dates.map((date, dateIdx) => (
                            <Listbox.Option
                              key={dateIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                }`
                              }
                              value={date}
                            >
                              {({ active }) => (
                                <>
                                  <span
                                    className={`block truncate ${active ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {date.name}
                                  </span>
                                  {active ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                <Button href="#" color="blue">
                  <span>
                    Filter
                  </span>
                </Button>
              </div>

            </div>

            <div className='flex flex-col md:flex-row justify-between mt-[90px]'>
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
                <div>
                  <ul role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-[25px] md:gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {videos.map((video) => (
                      <li key={video.name} className="relative">
                        <Link href={`/videos/${encodeURIComponent(video.name.toLowerCase().replace(/\s+/g, '-'))}-${video.id}`}>
                          <div
                            className="relative group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={video.image} alt=""
                              className="pointer-events-none h-full w-full object-cover group-hover:opacity-75" />
                            <Image className='w-[32.81px] md:w-[61px] h-[23.13px] md:h-auto absolute inset-0 m-auto object-cover' width={150} height={150} src={Yt}
                              alt={"ÿt"} />
                          </div>
                          <div className='flex gap-3 mt-[18px] md:mt-5'>
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 rounded-md bg-white px-2 md:px-6 py-1.5 text-[12px] md:text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50"
                            >
                              {video.duration} min
                            </button>
                            <p className="pointer-events-none mt-2 block truncate text-[12px] md:text-[16px] font-medium text-[#525252]">{video.category}</p>
                          </div>
                          <div className="mt-2 flex items-center gap-3">
                            <Rating
                              videoId={video.id}
                              initialRating={video.stars || 0}
                            />
                            <div className='text-gray-500 italic text-sm'>{video.creator}</div>
                          </div>
                          <p className="pointer-events-none block text-[15px] md:text-[19px] mt-4 md:mt-9 font-bold text-[#525252]">{video.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <ul role="list" className="mt-10 md:-mt-12 space-y-12 xl:col-span-3">
                  {videos.map((video) => (
                    <li key={video.id}>
                      <Link href={`/videos/${encodeURIComponent(video.name.toLowerCase().replace(/\s+/g, '-'))}-${video.id}`}>
                        <div className="flex flex-row md:flex-col gap-10 pt-12 sm:flex-row items-center">
                          <img className="aspect-[4/5] w-[131px] flex-none rounded-l-2xl object-cover" src={video.image} alt="" />
                          <div className="max-w-xl flex-col space-y-[26px]">
                            <p className="text-[17px] font-medium text-[#525252]">{video.category}</p>
                            <h3 className="text-[19px] font-bold text-[#525252]">{video.name}</h3>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex items-center justify-center gap-8 mt-[112px] mb-[223px]'>
              <div className='flex items-center justify-center p-4 bg-[#007BFF] font-semibold text-[15px] text-white'>1</div>
              <div className='flex items-center justify-center p-4 bg-[#0000002E] font-semibold text-[15px] text-white'>2</div>
              <div className='flex items-center justify-center p-4 bg-[#0000002E] font-semibold text-[15px] text-white'>3</div>
              <div className='flex items-center justify-center p-4 bg-[#0000002E] font-semibold text-[15px] text-white'>4</div>
              <div className='flex items-center justify-center p-4 bg-[#0000002E] font-semibold text-[15px] text-white'>5</div>
            </div>

            <div className='flex flex-col md:flex-row justify-between mt-[90px]'>
              {isLoading ? (
                <div className="flex gap-4">
                  {/* Loading skeletons */}
                </div>
              ) : (
                <div>
                  <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-[25px] md:gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {videos.map((video) => (
                      <li key={video.id} className="relative">
                        <Link href={`/videos/${encodeURIComponent(video.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                          <div className="relative group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={video.image} alt="" className="pointer-events-none h-full w-full object-cover group-hover:opacity-75" />
                            <Image className='w-[32.81px] md:w-[61px] h-[23.13px] md:h-auto absolute inset-0 m-auto object-cover' width={150} height={150} src={Yt} alt={"ÿt"} />
                          </div>
                          <div className='flex gap-3 mt-[18px] md:mt-5'>
                            <button type="button" className="inline-flex items-center gap-x-2 rounded-md bg-white px-2 md:px-6 py-1.5 text-[12px] md:text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50">{video.duration} min</button>
                            <p className="pointer-events-none mt-2 block truncate text-[12px] md:text-[16px] font-medium text-[#525252]">{video.category}</p>
                          </div>
                          <div className="mt-2 flex items-center gap-3">
                            <Rating videoId={video.id} initialRating={video.stars || 0} />
                            <div className='text-gray-500 italic text-sm'>{video.creator}</div>
                          </div>
                          <p className="pointer-events-none block text-[15px] md:text-[19px] mt-4 md:mt-9 font-bold text-[#525252]">{video.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {!hasMore && <p>No more videos to load</p>}
            </div>

          </Container>

        </main>
        <Footer />
      </>
    )
  }
