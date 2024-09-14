'use client'

import React, { useState, useRef, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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
              setButtonDisabled(true)
              try {
                const response = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: values?.email,
                  }),
                })
                const datas = await response.json()
                if (datas.status >= 400) {
                  setStatus(datas.status)
                  setMessage(
                    'Error joining the newsletter. You can directly contact me at github@ebraj.',
                  )
                  setTimeout(() => {
                    setMessage('')
                    setButtonDisabled(false)
                  }, 2000)
                  return
                }

                setStatus(201)
                setMessage('Thank you for subscribing to our newsletter 👻.')
                setRun(true)
                setTimeout(() => {
                  setTotalCounts(0)
                  setMessage('')
                  resetForm()
                  setButtonDisabled(false)
                }, 4000)
                setTotalCounts(400)
              } catch (error) {
                setStatus(500)
                setMessage(
                  'Error joining the newsletter. You can directly contact me at github@ebraj.',
                )
                setTimeout(() => {
                  setMessage('')
                  setButtonDisabled(false)
                }, 2000)
              }
            }}
          >
            <Form className="mx-auto mt-10 flex flex-col max-w-md gap-y-4">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Field
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-[#3F4C5373] focus:ring-2 focus:ring-inset focus:ring-[#3F4C5373] sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  disabled={buttonDisabled}
                  className="flex-none rounded-md bg-[#007BFF] px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Subscribe Now'}
                </button>
              </div>
              {message && (
                <p
                  className={`${
                    status !== 201 ? "text-red-500" : "text-green-500"
                  } text-center font-bold`}
                >
                  {message}
                </p>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
