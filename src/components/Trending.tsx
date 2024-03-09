"use client"
import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },

]
const cardStyle = {
    boxShadow: '0px 4px 28px 3px #0000001A'
};

export function Trending() {
    return (
        <>
            <div className="flex items-center justify-center gap-3 mb-[47px]">
                <span className="text-[40px] text-[#2B2B2B] font-bold">Trending</span>

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
                        spaceBetween: 20,
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
                            className="relative isolate flex flex-col justify-end overflow-hidden ml-[47px] rounded-[5px] bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                            style={cardStyle}
                        >
                            <img src={post.imageUrl} alt=""
                                 className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                            <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10"/>

                            <div
                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1}/>
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img src={post.author.imageUrl} alt=""
                                             className="h-6 w-6 flex-none rounded-full bg-white/10"/>
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0"/>
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
