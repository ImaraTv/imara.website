"use client"
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {Fragment, useState} from 'react'
import {Listbox, Dialog, Transition} from '@headlessui/react'
import {Container} from '@/components/Container'
import Image from "next/image"
import Link from 'next/link'
import Yt from "@/images/yt.png"
import Address from "@/components/Address";
import {CheckIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Button} from "@/components/Button";

const cardStyle = {
    boxShadow: '0px 4px 28px 3px #0000001A'
};


const categories = [
    {
        id: 1,
        name: "Continue Watching",
    },
    {
        id: 2,
        name: "Saved Films",
    },
    {
        id: 3,
        name: "Edit profile ",
    },
    {
        id: 4,
        name: "All settings",
    },
]
const filters = [
    {
        id: 1,
        name: "Continue Watching",
    },
    {
        id: 2,
        name: "Saved Films",
    },
    {
        id: 3,
        name: "Edit profile ",
    },
    {
        id: 4,
        name: "All settings",
    },
]
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
export default function ProfileEdit() {

    let [isOpen, setIsOpen] = useState(true)
    const [selected, setSelected] = useState(qualities[0])
    const [active, setActive] = useState(dates[0])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <div className='font-bold text-[40px] text-[#2B2B2B] mt-14'>Welcome back Joy !</div>

                    <div className='flex px-6 mb-[70px] mt-[33px] -ml-4'>
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category.id}
                                className="inline-flex mr-2 items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[20px] font-bold text-[#525252] shadow-sm ring-2 ring-inset ring-[#007BFF] hover:bg-gray-50"
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </Container>

                <div className="flex flex-col bg-[#F3F3F3] space-y-[60px] p-[60px] mb-[105px]">
                    <div className="text-[24px] text-[#767676] font-medium text-center">Edit and update your profile
                        details
                    </div>

                    <form action="#" method="POST" className="mt-16 sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                            <div>
                                <div className="mt-10">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder='User name'
                                        autoComplete="given-name"
                                        className="block w-full bg-transparent rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-10">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        placeholder='Phone number or Email'
                                        autoComplete="family-name"
                                        className="block w-full bg-transparent rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md w-1/2 bg-[#007BFF] px-10 py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className='mt-5 flex justify-end'>
                        <div className='flex gap-2'>
                            <div className='font-medium text-[#767676] text-xl'>Want to change password?</div>
                            <Link
                                href="/reset-password"
                                className="inline-block font-bold text-[#F2970F] text-xl"
                            >
                                Go reset password
                            </Link>
                        </div>
                    </div>
                </div>

                <Address />

            </main>
            <Footer/>
        </>
    )
}
