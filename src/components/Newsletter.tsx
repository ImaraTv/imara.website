"use client"

import { newsletter } from "../../utils/sendgrid2"
import { useState } from 'react';

export function Newsletter() {
    const [formData, setFormData] = useState({
        'email': '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('Sending...');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                body: new FormData(e.currentTarget),
            });

            if (response.ok) {
                setFormStatus('Subscription Successful');
                setFormData({ 'email': '' });
            } else {
                setFormStatus('Subscription Failed');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('Subscription Failed');
        }
    };
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
                <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-20">
                    <h2 className="mx-auto max-w-2xl text-center text-[20px] md:text-4xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">
                        Get the latest films in your inbox
                    </h2>
                    <p className="mx-auto mt-2 text-center text-sm md:text-lg leading-8 text-[#2B2B2B]">
                        Subscribe to get notified when new films premiere
                    </p>
                    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#3F4C5373] focus:ring-2 focus:ring-inset focus:ring-[#3F4C5373] sm:text-sm sm:leading-6"
                            placeholder="Email"
                            value={formData['email']}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Subscribe Now
                        </button>
                        {formStatus && <p>{formStatus}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
