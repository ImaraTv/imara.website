'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react'
import { Listbox, Dialog, Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import Yt from '@/images/yt.png'
import Address from '@/components/Address'

import axios from 'axios'
import { getAccessToken } from '../../../utils/authUtils'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const cardStyle = {
  boxShadow: '0px 4px 28px 3px #0000001A',
}

const categories = [
  {
    id: 1,
    name: 'Continue Watching',
    url: '/continue-watching',
  },
  {
    id: 2,
    name: 'Saved Films',
    url: '/saved',
  },
  {
    id: 3,
    name: 'Edit profile',
    url: '/profile-edit',
  },
  {
    id: 4,
    name: 'All settings',
    url: '/profile-edit',
  },
]

const filters = [
  {
    id: 1,
    name: 'Continue Watching',
  },
  {
    id: 2,
    name: 'Saved Films',
  },
  {
    id: 3,
    name: 'Edit profile ',
  },
  {
    id: 4,
    name: 'All settings',
  },
]
const dates = [
  {
    id: 1,
    name: 'Jan',
  },
  {
    id: 2,
    name: 'Feb',
  },
  {
    id: 3,
    name: 'Mar',
  },
  {
    id: 4,
    name: 'Apr',
  },
  {
    id: 5,
    name: 'May',
  },
]


interface UserData {
  name: string
  email: string
  // Add any other properties that are part of the user data
}
export default function ProfileEdit() {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    password: '',
    password_confirmation: '',
  })

  //profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = getAccessToken()
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        // Handle the response data
        const userData = response.data.data
        setUserData(userData[0])
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchUserProfile()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const accessToken = getAccessToken()
    // send a request to the API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/change-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      },
    )

    // handle the response
    if (response.ok) {
      // if the request was successful, show a success message
      // and redirect the user to the login page
      Swal.fire({
        title: 'Password changed successfully',
        text: 'Redirecting to login...',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the profile page
        router.push('/sign-in')
      })
    } else {
      // if the request was not successful, parse the error response
      const data = await response.json()
      setErrors(data.error)
      Swal.fire({
        title: 'Password change Failed',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    setErrors({
      ...errors,
      [event.target.name]: '',
    })
  }

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="mt-14 text-lg md:text-[40px] font-bold text-[#2B2B2B]">
            {userData ? (
              <div>
                <p>Welcome {userData.name}</p>
                {/* Render additional user details as needed */}
              </div>
            ) : (
              <p>Loading user...</p>
            )}
          </div>

          <div className="-ml-4 mb-10 md:mb-[70px] mt-[33px] grid grid-cols-2 md:grid-cols-5 px-4 gap-y-2">
            {categories.map((category) => (
              <Link
                href={category.url}
                key={category.id}
                className={`mr-2 flex items-center justify-center gap-1 md:gap-2 rounded-md px-2 md:px-6 py-2 text-xs md:text-[20px] font-bold text-[#525252] hover:text-white shadow-sm ring-2 ring-inset ring-[#007BFF] hover:bg-blue-500 ${
                  category.name === 'Edit profile'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Container>

        <div className="mb-[105px] flex flex-col space-y-4 md:space-y-[60px] bg-[#F3F3F3] p-6 md:p-[60px]">
          <div className="text-center text-lg md:text-[24px] font-medium text-[#767676]">
            Edit and update your password
          </div>

          <form onSubmit={handleSubmit} className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:gap-y-10 sm:grid-cols-2">
              <div>
                <div className="mt-10">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 bg-transparent px-3.5 py-3 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-10">
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="confirm password"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-transparent px-3.5 py-3 md:py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className="w-1/2 rounded-md bg-[#007BFF] px-4 md:px-10 py-2 md:py-5 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-5 flex justify-end">
            <div className="flex gap-2">
              <div className="text-sm md:text-xl font-medium text-[#767676]">
                Want to change password?
              </div>
              <Link
                href="/reset-password"
                className="inline-block text-sm md:text-xl font-bold text-[#F2970F]"
              >
                Go reset password
              </Link>
            </div>
          </div>
        </div>

        <Address />
      </main>
      <Footer />
    </>
  )
}
