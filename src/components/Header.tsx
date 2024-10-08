'use client'

import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Container2 } from '@/components/Container2'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'
import Logo2 from '@/images/logos/logo.png'
import MobileLogo from '@/images/logos/mobile-logo.png'
import User from '@/images/user.svg'
import Profile from '@/images/profile.svg'
import Watch from '@/images/watch.svg'
import Bookmark from '@/images/bookmark.svg'
import Settings from '@/images/settings.svg'
import Create from '@/images/create.svg'
import Logout from '@/images/logout.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { isLoggedIn } from '@/../utils/authUtils'
import { useRouter } from 'next/navigation'
import { logout } from '@/../utils/authUtils'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} passHref>
      <Popover.Button as="a" className="block w-full p-2">
        {children}
      </Popover.Button>
    </Link>
  )
}

const solutions = [{ name: 'All videos', href: '/videos' }]

const items = [
  {
    name: 'Profile details',
    href: '/continue-watching',
    icon: IconOne,
  },
  {
    name: 'Continue watching',
    href: '/continue-watching',
    icon: IconTwo,
  },
  {
    name: 'Saved films',
    href: '/saved',
    icon: IconThree,
  },
  {
    name: 'All settings',
    href: '##',
    icon: IconFour,
  },
  {
    name: 'Create on Imara',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/create-film-project`,
    icon: IconFive,
  },
]

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3333 24C24.2538 24 25 24.7462 25 25.6666C25 26.5871 24.2538 27.3333 23.3333 27.3333H6.66667C5.74619 27.3333 5 26.5871 5 25.6666C5 24.7462 5.74619 24 6.66667 24H23.3333ZM28.3333 12.3333C29.2538 12.3333 30 13.0795 30 14C30 14.9204 29.2538 15.6666 28.3333 15.6666H1.66667C0.746193 15.6666 0 14.9204 0 14C0 13.0795 0.746192 12.3333 1.66667 12.3333H28.3333ZM23.3333 0.666626C24.2538 0.666626 25 1.41282 25 2.33329C25 3.25377 24.2538 3.99996 23.3333 3.99996H6.66667C5.74619 3.99996 5 3.25377 5 2.33329C5 1.41282 5.74619 0.666626 6.66667 0.666626H23.3333Z"
        fill="white"
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <>
      <Popover>
        <Popover.Button
          className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MobileNavIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
            >
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/videos">Watch Now</MobileNavLink>
              <MobileNavLink href="/creators">Creators</MobileNavLink>
              <MobileNavLink href="/sponsors">Sponsors</MobileNavLink>
              <MobileNavLink href="https://blog.imara.tv">Blog</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>

              <hr className="m-2 border-slate-300/40" />
              <div className="flex gap-2">
                <MobileNavLink
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/create-film-project`}
                >
                  Create on Imara
                </MobileNavLink>
                <MobileNavLink href="/sign-in">Login</MobileNavLink>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </>
  )
}

const cardStyle = {
  boxShadow: '0px 7px 18px 4px #00000021',
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search?q=${searchQuery}`)
  }

  const handleLogout = () => {
    logout()
    router.push('/sign-in') // Redirect to the login page
  }

  return (
    <header className="bg-[#0033AB] py-6 md:bg-white">
      <Container2>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="md:hidden">
            <MobileNavigation />
          </div>

          <div className="md:hidden">
            <Link href="/" aria-label="Home">
              <Image src={MobileLogo} width={150} height={50} alt="logo" />
            </Link>
          </div>

          <div className="hidden items-center md:flex md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image src={Logo2} width={200} height={100} alt="logo" />
            </Link>
            <div className="hidden md:flex md:gap-x-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/videos">Watch Now</NavLink>
              <NavLink href="/creators">Creators</NavLink>
              <NavLink href="/sponsors">Sponsors</NavLink>
              <NavLink href="https://blog.imara.tv">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-5 md:gap-x-4">
            {/* Search */}
            <div className="flex items-center justify-end px-2 lg:ml-6 lg:justify-end">
              <div className="w-3/4 max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 font-medium text-white md:text-[#525252]"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                    }}
                    className="block w-full rounded-[15px] border-0 bg-[#C4C4C433] py-[10px] pl-[14px] text-white ring-1 ring-inset ring-[#C4C4C433] ring-gray-300 placeholder:font-medium placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:bg-[#E2E2E2] md:text-[#525252] md:placeholder:text-[#525252]"
                    placeholder="Search..."
                  />
                  {searchResults.length > 0 && (
                    <ul className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                      {searchResults.map((result) => (
                        <li
                          key={result.id}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <a
                            href={`/videos/${encodeURIComponent(result.name.toLowerCase().replace(/\s+/g, '-'))}`}
                          >
                            {result.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <Button
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/create-film-project`}
              color="blue"
              className="hidden md:flex"
            >
              <span>Create a Film</span>
            </Button>
            {!isLoggedIn() && (
              <Link
                href="/sign-in"
                className="group hidden items-center justify-center rounded-lg px-10 py-2 text-lg font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:inline-flex"
              >
                Login
              </Link>
            )}
            {isLoggedIn() && (
              <div className="hidden px-4 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-full bg-[#525252] px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                      >
                        <Image src={User} alt={'user'} width={20} height={20} />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute -left-20 z-10 mt-3 h-auto w-[220px] -translate-x-1/2 transform px-4 sm:px-0">
                          <div
                            className="overflow-hidden rounded-lg ring-1 ring-black/5"
                            style={cardStyle}
                          >
                            <div className="relative grid gap-8 bg-white p-7">
                              {items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-6 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                >
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-[15px] font-medium text-[#616161]">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              ))}
                              <a
                                href="#"
                                onClick={handleLogout}
                                className="-m-6 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                                  <IconSix aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                  <p className="text-[15px] font-medium text-[#616161]">
                                    Logout
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            )}
          </div>
        </nav>
      </Container2>
    </header>
  )
}

function IconOne() {
  return <Image src={Profile} alt={'profile'} width={20} height={20} />
}

function IconTwo() {
  return <Image src={Watch} alt={'watch'} width={20} height={20} />
}

function IconThree() {
  return <Image src={Bookmark} alt={'bookmark'} width={20} height={20} />
}

function IconFour() {
  return <Image src={Settings} alt={'settings'} width={20} height={20} />
}

function IconFive() {
  return <Image src={Create} alt={'create'} width={20} height={20} />
}

function IconSix() {
  return <Image src={Logout} alt={'logout'} width={20} height={20} />
}
