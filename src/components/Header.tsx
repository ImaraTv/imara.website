'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'
import Logo2 from '@/images/logos/logo.png'
import User from '@/images/user.svg'
import Profile from '@/images/profile.svg'
import Watch from '@/images/watch.svg'
import Bookmark from '@/images/bookmark.svg'
import Settings from '@/images/settings.svg'
import Create from '@/images/create.svg'
import Logout from '@/images/logout.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

const solutions = [
  { name: 'All videos', href: '/videos' },
  { name: 'Pg 18+', href: '#' },
  { name: 'Teens Corner', href: '#' },
]

const items = [
  {
    name: 'Profile details',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Continue watching',
    href: '/continue-watching',
    icon: IconTwo,
  },
  {
    name: 'Saved films',
    href: '##',
    icon: IconThree,
  },
  {
    name: 'All settings',
    href: '##',
    icon: IconFour,
  },
  {
    name: 'Create on Imara',
    href: '##',
    icon: IconFive,
  },
  {
    name: 'Log out',
    href: '##',
    icon: IconSix,
  },
  
]

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
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
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

const cardStyle = {
  boxShadow: '0px 7px 18px 4px #00000021'
};

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image
                src={Logo2}
                width={103}
                height={48}
                alt="logo"
              />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <Popover className="relative">
                <Popover.Button className="inline-flex items-center gap-x-1 rounded-lg px-2 py-1 font-bold text-lg text-[#525252] hover:bg-slate-100 hover:text-slate-900">
                  <span>Watch Now</span>
                  <ChevronDownIcon className="h-5 w-5 font-bold" aria-hidden="true" />
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
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                    <div className="w-56 shrink rounded-xl bg-white p-4 text-[17px] leading-6 text-[#474747] shadow-lg ring-1 ring-gray-900/5">
                      {solutions.map((item) => (
                        <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <NavLink href="/actors">Actors</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#525252] font-medium" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full rounded-[15px] border-0 bg-[#E2E2E2] py-[10px] pl-[14px] text-[#525252] ring-1 ring-inset ring-gray-300 placeholder:text-[#525252] placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <Button href="/sign-up" color="blue">
              <span>
                Create on Imara
              </span>
            </Button>
            <Link
              href="/sign-in"
              className="group inline-flex ring-2 ring-[#007BFF] items-center justify-center rounded-lg py-2 px-10 text-lg font-medium text-[#525252] focus:outline-none"
            >
              Login
            </Link>

            <div className=" px-4">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-full bg-[#525252] px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                    >
                      <Image src={User} alt={"user"} width={20} height={20} />
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
                      <Popover.Panel className="absolute left-1/3 z-10 mt-3 w-[220px] h-auto -translate-x-1/2 transform px-4 sm:px-0">
                        <div className="overflow-hidden rounded-lg ring-1 ring-black/5" style={cardStyle}>
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
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

function IconOne() {
  return (
    <Image src={Profile} alt={"profile"} width={20} height={20} />
  )
}

function IconTwo() {
  return (
    <Image src={Watch} alt={"watch"} width={20} height={20} />
  )
}

function IconThree() {
  return (
    <Image src={Bookmark} alt={"bookmark"} width={20} height={20} />
  )
}

function IconFour() {
  return (
    <Image src={Settings} alt={"settings"} width={20} height={20} />
  )
}

function IconFive() {
  return (
    <Image src={Create} alt={"create"} width={20} height={20} />
  )
}

function IconSix() {
  return (
    <Image src={Logout} alt={"logout"} width={20} height={20} />
  )
}
