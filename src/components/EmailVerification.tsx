// src\components\EmailVerification.tsx
'use client';

import React, { Fragment, useEffect, useState, Suspense } from 'react'


const EmailVerification = () => {

    return <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Check Your Email</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We&apos;ve sent a verification email to your inbox. Please check your email and click the link to confirm your
          account.
        </p>
      </div>
    </div>
  </div>;
};

export default EmailVerification;