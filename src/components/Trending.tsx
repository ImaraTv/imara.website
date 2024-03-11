"use client"
import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Trend1 from '@/images/trend1.png';
import Trend2 from '@/images/trend2.png';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/Container';


const posts = [
    {
        id: 1,
        title: 'No Means No',
        href: '#',
        imageUrl: Trend1,
        categories: [
            {
                id: 1,
                name: 'Sexual Health'
            },
            {
                id: 2,
                name: 'Educative'
            },
        ],
    },
    {
        id: 2,
        title: 'The sweet ride',
        href: '#',
        imageUrl: Trend2,
        categories: [
            {
                id: 1,
                name: 'Comedy'
            },
            {
                id: 2,
                name: 'Educative'
            },
        ],
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        imageUrl: Trend1,
        categories: [
            {
                id: 1,
                name: 'Awareness'
            },
        ],
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        imageUrl: Trend1,
        categories: [
            {
                id: 1,
                name: 'Educative'
            },
        ],
    },

]
const cardStyle = {
    boxShadow: '0px 4px 28px 3px #0000001A'
};

export function Trending() {
    return (
        <>
            <div className="flex items-center justify-center gap-3 mb-[47px]">
                <span className="text-[20px] md:text-[40px] text-[#2B2B2B] font-bold">Trending</span>

                <svg className="" width="30" height="30" viewBox="0 0 20 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 27.75C4.82233 27.75 0.625 23.5526 0.625 18.375C0.625 15.6828 1.75983 13.2556 3.57724 11.5458C5.25504 9.96719 9.375 7.12439 8.75 0.875C16.25 5.875 20 10.875 12.5 18.375C13.75 18.375 15.625 18.375 18.75 15.287C19.0871 16.254 19.375 17.2931 19.375 18.375C19.375 23.5526 15.1776 27.75 10 27.75Z"
                        fill="#F2970F"/>
                </svg>

            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className="mb-[105px]"
                breakpoints={{
                    481: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1441: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {posts.map((post) => (
                    <SwiperSlide key={post.id}>
                        <article
                            className="relative isolate flex flex-col justify-end overflow-hidden ml-[16px] md:ml-[47px] rounded-[5px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                            style={cardStyle}
                        >
                            <Image src={post.imageUrl} width={524} height={273} alt="trend1" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40"/>
                            <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10"/>

                            <h3 className="mt-3 text-[18px] md:text-[26px] font-semibold text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0"/>
                                    {post.title}
                                </a>
                            </h3>
                            <div className="flex gap-2 font-medium text-sm md:text-[16px] text-white">
                                {post.categories.map((category) => (
                                  <div key={category.id}>{category.name}</div>
                                ))}
                            </div>
                        </article>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
