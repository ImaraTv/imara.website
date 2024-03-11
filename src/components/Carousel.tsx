"use client"
import React, {useRef, useState} from "react";
import Image from "next/image"
import CarouselImage from "@/images/carousel.png"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import { css } from '@emotion/react';
import Slide1 from "@/images/carousel.png"
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "Friend Zone short film ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.",
        year: 2024,
        duration: "43 min",
        category: "Sexual Health",
        source: Slide1,
    },
    {
        id: 2,
        title: "No Means No",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.",
        year: 2023,
        duration: "1 hour",
        category: "Sexual Health",
        source: Slide1,
    },
]

const carouselStyle = {
    imageStyles: css`
        @media (max-width: 767px) {
            width: 430px;
            height: 280px;
        }
    `,
};


export function CarouselHome() {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{clickable: true}}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            loop={true}
            autoplay={{delay: 5000}}
            className="relative isolate swiper w-full h-[280px] md:h-[560px] mb-[75px]"
            id="slider2"
        >

            {items.map((item) => (
              <SwiperSlide key={item.id}>
                  <Image
                    src={item.source}
                    width={1440}
                    height={560}
                    className={`absolute inset-0 -z-10 w-full h-full object-cover ${carouselStyle.imageStyles}`}
                    alt="itemImage"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#000000] via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-[5px] ring-1 ring-inset ring-gray-900/10" />
                  <div className="absolute z-[999] text-white bottom-[64px] ltr:left-12 rtl:right-12 px-12">
                      <div className="text-[20px] md:text-[35px] font-bold mb-[26px]">{item.title}</div>
                      <div className="flex gap-7 items-center text-white">
                          <button className="px-2 py-1 bg-[#F2970F] rounded-lg font-bold text-[14px] md:text-[18px]">HD
                          </button>
                          <div className="font-medium text-[14px] md:text-[18px]">2023</div>
                          <div className="font-medium text-[14px] md:text-[18px]">43 min</div>
                          <div className="font-medium text-[14px] md:text-[18px]">Ranked : 4.7</div>
                      </div>
                      <div className="sm:mt-5 mt-1 w-4/5 text-[18px] text-[#B0B0B0] sm:block hidden">
                          {item.description}
                      </div>

                      <div className="flex gap-10 mt-[43px]">
                          <Link
                            href="/sign-in"
                            className="group inline-flex bg-[#007BFF] items-center justify-center rounded-lg py-2 px-2 md:px-10 text-[12px] md:text-[17px] font-medium text-white focus:outline-none"
                          >
                              Watch Now
                          </Link>
                          <Link
                            href="/sign-in"
                            className="group inline-flex gap-3 items-center justify-center rounded-lg py-2 px-10 text-[12px] md:text-[17px] font-medium text-white focus:outline-none"
                          >

                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
                                    fill="white" />
                              </svg>

                              <span>Save</span>
                          </Link>
                      </div>
                  </div>
              </SwiperSlide>
            ))}
            <button
              className="swiper-button-prev-ex4 hidden md:grid place-content-center ltr:left-2 rtl:right-2 p-2 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-lg absolute z-[999] bottom-[60px] right-20 -translate-y-1/2">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.84112 7.72852L10.7533 3.12045C10.9031 3.02054 11.1056 3.06104 11.2055 3.21084C11.2412 3.26445 11.2603 3.32738 11.2603 3.39175L11.2603 12.6079C11.2603 12.788 11.1143 12.934 10.9342 12.934C10.8698 12.934 10.8068 12.915 10.7533 12.8793L3.84112 8.27119C3.69132 8.17128 3.65082 7.96878 3.75073 7.81897C3.7746 7.78317 3.80532 7.75239 3.84112 7.72852Z"
                        fill="white"/>
                </svg>
            </button>
            <button
                className="swiper-button-next-ex4 hidden md:grid place-content-center ltr:right-2 rtl:left-2 p-2 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-lg absolute z-[999] bottom-[60px] right-10 -translate-y-1/2">

                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5056 8.27104L6.59339 12.8791C6.44355 12.979 6.24109 12.9385 6.14119 12.7887C6.10548 12.7351 6.08643 12.6722 6.08643 12.6078V3.39162C6.08643 3.21153 6.23242 3.06554 6.41251 3.06554C6.47689 3.06554 6.53983 3.08459 6.59339 3.1203L13.5056 7.72837C13.6554 7.82828 13.6959 8.03078 13.596 8.18058C13.5721 8.21639 13.5414 8.24717 13.5056 8.27104Z"
                        fill="white"/>
                </svg>
            </button>
        </Swiper>

    );
}
