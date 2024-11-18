'use client'

import React, { useState, useRef, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Swal from 'sweetalert2'

type Props = {}

const requiredSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

export function Newsletter({}: Props) {
  const [status, setStatus] = useState<number | null>(null)
  const [message, setMessage] = useState<string>('')
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [run, setRun] = useState<boolean>(false)
  const [totalCounts, setTotalCounts] = useState<number>(400)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setDimensions({
      width,
      height,
    })
  }, [])

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-20">
          <h2 className="mx-auto max-w-2xl text-center text-[20px] font-bold tracking-tight text-[#2B2B2B] sm:text-4xl md:text-4xl">
            Get the latest films in your inbox
          </h2>
          <p className="mx-auto mt-2 text-center text-sm leading-8 text-[#2B2B2B] md:text-lg">
            Subscribe to get notified when new films premiere
          </p>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={requiredSchema}
            onSubmit={async (values, { resetForm }) => {
              setSubmitting(true)
              try {
                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/subscribe`,
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email: values.email,
                    }),
                  },
                )

                const data = await response.json()

                if (data.status === 'subscribed') {
                  Swal.fire({
                    title: 'Success!',
                    text: 'Thank you for subscribing to our newsletter!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  })
                  resetForm()
                } else {
                  Swal.fire({
                    title: 'Error!',
                    text: 'Please enter a correct email address.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                  })
                }
              } catch (error) {
                Swal.fire({
                  title: 'Error!',
                  text: 'An error occurred while subscribing. Please try again later.',
                  icon: 'error',
                  confirmButtonText: 'OK',
                })
              } finally {
                setSubmitting(false)
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="mx-auto mt-10 flex max-w-md gap-x-4">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-sm text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
