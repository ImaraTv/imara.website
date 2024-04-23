'use client'; // This is required for components in the app directory

import React, { Fragment, useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

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

    return <div>Verifying email...</div>;
};

export default EmailVerification;