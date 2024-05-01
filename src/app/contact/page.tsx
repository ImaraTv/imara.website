"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import Banner from "@/images/contact.png"
import Image from "next/image"
import { sendEmail } from "../../../utils/sendgrid"
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: new FormData(e.currentTarget),
            });

            if (response.ok) {
                setFormStatus('Email sent successfully');
                setFormData({ 'name': '', 'email': '', message: '' });
            } else {
                setFormStatus('Failed to send email');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('Failed to send email');
        }
    };


    return (
        <>
            <Header />
            <main>

                {/* Hero card */}
                <div className="">
                    <div className="relative sm:overflow-hidden h-[546px]">
                        <div className="absolute inset-0">
                            <Image
                                className="h-full w-full object-cover"
                                src={Banner}
                                alt={"contact"}
                                width={1440}
                                height={546}
                            />

                        </div>
                        <div className="absolute inset-y-0 right-0 w-[1200px] bg-gradient-to-l from-gray-500 mix-blend-multiply" />
                        <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                            <div className='flex justify-between'>
                                <div className=''></div>
                                <div className='px-6 lg:px-8'>
                                    <h1 className="text-2xl md:text-[60px] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Contact us</span>
                                        <span className="block text-white">today</span>
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-lg text-xl md:text-3xl text-white sm:max-w-3xl">
                                        Call : +254780674252
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Form */}
                <Container>
                    <div className="isolate mt-[110px] bg-[#F3F3F3] px-6 py-12 lg:px-8">
                        <div
                            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="max-w-2xl">
                            <h2 className="text-xl md:text-[40px] font-semibold tracking-tight text-gray-900 sm:text-4xl">Talk to us now</h2>
                        </div>
                        <form onSubmit={handleSubmit} action="#" method="POST" className="mt-16 sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder='Full Name'
                                            autoComplete="given-name"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={formData['name']}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Phone number or Email'
                                            autoComplete="email"
                                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={formData['email']}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Write your message here.....'
                                            rows={4}
                                            className="block w-full bg-[#E2E2E2] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-[#007BFF] px-10 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send
                                </button>
                            </div>
                            {formStatus && <p>{formStatus}</p>}
                        </form>
                    </div>
                </Container>

                <Newsletter />

                <div className="bg-[#89CFF1] h-[193px] py-4 md:py-10 px-4 text-center flex items-center justify-center">
                    <p className='text-sm md:text-xl leading-[36px] md:leading-[46px]'>Visit us at The Nailab Accelerator, 4th Floor, Bishop Magua Center, <br /> Ngong Road, Nairobi, Kenya, Africa</p>
                </div>

            </main>
            <Footer />
        </>
    )
}
