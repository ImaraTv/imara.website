// src\components\EmailVerification.tsx
'use client'; // This is required for components in the app directory

import React, { Fragment, useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EmailVerification = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const router = useRouter();

    const verifyEmail = async () => {
        try {
            const response = await axios.post('https://dashboard.imara.tv/api/auth/verify', {
                token,
                email,
            });

            if (response.data.status === 'success') {
                // Show a success message using SweetAlert
                Swal.fire({
                    title: 'Email Verification Successful',
                    text: 'Your email has been verified. Redirecting to login...',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Redirect to the login page
                    router.push('/sign-in');
                });
            } else {
                // Show an error message using SweetAlert
                Swal.fire({
                    title: 'Email Verification Failed',
                    text: 'An error occurred during email verification. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Email Verification Failed',
                text: 'An error occurred during email verification. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    useEffect(() => {
        if (token && email) {
            verifyEmail();
        }
    }, [token, email]);

    return <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Check Your Email</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We&apos;ve sent a verification email to your inbox. Please check your email and click the link to confirm your
          account.
        </p>
      </div>
      <Link
        className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/sign-in"
      >
        Go to Login
      </Link>
    </div>
  </div>;
};

export default EmailVerification;