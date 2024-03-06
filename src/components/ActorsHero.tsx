"use client"

import {CheckIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {Button} from "@/components/Button";
import Image from "next/image";
import Yt from "@/images/yt.png";
import Link from "next/link";
import {Container} from "@/components/Container";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import Avatar1 from "@/images/avatars/avatar-1.png"
import Avatar2 from "@/images/avatars/avatar-2.png"
import Avatar3 from "@/images/avatars/avatar-3.png"
import Avatar4 from "@/images/avatars/avatar-4.png"
import Actor from "@/images/actor.png"


const actors = [
    {
        id: 1,
        name: 'Issac Jin',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 2,
        name: 'Moses Gabi',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 3,
        name: 'Wambui Kirui',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        id: 4,
        name: 'Ruth Kerubo',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
]

export function ActorsHero() {
    return (
        <>
            <div className="grid grid-cols-2 gap-[150px] py-[56px] px-[46px] bg-[#F3F3F3]">
                <div className="flex flex-col gap-10">
                    <div className="text-[40px] text-[#2B2B2B] font-bold">Actors</div>
                    <p className="text-[18px] text-[#525252]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className="flex gap-[33px]">
                        <Button href="#" color="blue">
                          <span>
                            All actors
                          </span>
                        </Button>
                        <Link
                            href="#"
                            className="group inline-flex ring-2 ring-[#007BFF] items-center justify-center rounded-lg py-2 px-10 text-lg font-medium text-[#525252] focus:outline-none"
                        >
                            Become an actor
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="row-end-3 row-span-2">
                            <div
                                className="group w-[194px] h-[120px] overflow-hidden rounded-[3px] focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <Image width={194} height={120} src={Actor} alt="avatar"
                                       className="pointer-events-none object-cover group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for Issac Jin</span>
                                </button>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                        <div className="row-start-2 row-span-12">
                            <div
                                className="group w-[194px] h-[120px] overflow-hidden rounded-[3px] focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <Image width={194} height={120} src={Actor} alt="avatar"
                                       className="pointer-events-none object-cover group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for Issac Jin</span>
                                </button>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div className="row-end-3 row-span-2">
                            <div
                                className="group w-[194px] h-[120px] overflow-hidden rounded-[3px] focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <Image width={194} height={120} src={Actor} alt="avatar"
                                       className="pointer-events-none object-cover group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for Issac Jin</span>
                                </button>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                        <div className="row-start-2 row-span-12">
                            <div
                                className="group w-[194px] h-[120px] overflow-hidden rounded-[3px] focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <Image width={194} height={120} src={Actor} alt="avatar"
                                       className="pointer-events-none object-cover group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for Issac Jin</span>
                                </button>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
