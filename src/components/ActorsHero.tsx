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
import Actor1 from "@/images/actors/isaac.png"
import Actor2 from "@/images/actors/moses.png"
import Actor3 from "@/images/actors/wambui.png"
import Actor4 from "@/images/actors/ruth.png"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-[150px] py-8 md:py-[56px] px-5 md:px-[46px] bg-[#F3F3F3] mt-[47px] md:mt-0">
                <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-8 md:gap-10">
                    <div className="text-[20px] md:text-[40px] text-[#2B2B2B] font-bold">Actors</div>
                    <p className="text-[18px] text-[#525252] text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className="hidden md:flex gap-[33px]">
                        <Button href="#" color="blue">
                          <span>
                            All actors
                          </span>
                        </Button>
                        <Link
                            href="#"
                            className="group inline-flex ring-2 ring-[#007BFF] items-center justify-center rounded-lg py-2 px-10 text-[12px] md:text-lg font-medium text-[#525252] focus:outline-none"
                        >
                            Become an actor
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[14px] md:gap-[56px] items-stretch h-60">
                        <div className="flex flex-col">
                            <Image width={194} height={120} src={Actor1} alt="avatar"
                                   className="w-full md:h-auto sm:w-full object-cover rounded-[3px]" />
                            <p
                              className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>

                        <div className="flex flex-col md:self-end">
                            <Image width={194} height={120} src={Actor2} alt="avatar"
                                   className="w-full md:h-auto sm:w-full object-cover rounded-[3px]" />
                            <p
                              className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                    </div>
                    <div className="flex gap-[14px] md:gap-[56px] items-stretch h-60 mt-[34px] md:mt-[66px]">
                        <div className="flex flex-col">
                            <Image width={194} height={120} src={Actor3} alt="avatar"
                                   className="w-full md:h-auto sm:w-full object-cover rounded-[3px]" />
                            <p
                              className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>

                        <div className="flex flex-col md:self-end">
                            <Image width={194} height={120} src={Actor4} alt="avatar"
                                   className="w-full md:h-auto sm:w-full object-cover rounded-[3px]" />
                            <p
                              className="pointer-events-none mt-2 block truncate text-[20px] font-bold text-[#2B2B2B]">Issac
                                Jin</p>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center justify-center gap-[33px]">
                        <Button href="#" color="blue">
                          <span>
                            All actors
                          </span>
                        </Button>
                        <Link
                          href="#"
                          className="group inline-flex ring-2 ring-[#007BFF] items-center justify-center rounded-lg py-2 px-10 text-[12px] md:text-lg font-medium text-[#525252] focus:outline-none"
                        >
                            Become an actor
                        </Link>
                    </div>
                </div>
            </div>


        </>

    )
}
