import React from 'react'
import Link from 'next/link'
import { isLoggedIn, getAccessToken } from '@/../utils/authUtils'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { PlusIcon } from '@heroicons/react/24/solid'

interface SaveButtonProps {
  videoId: number
}

const SaveButton: React.FC<SaveButtonProps> = ({ videoId }) => {
  const router = useRouter()
  const handleBookmarkVideo = async () => {
    try {
      const accessToken = getAccessToken()
      const response = await axios.post(
        'https://imara.tv/admin/api/bookmark',
        { video_id: videoId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      Swal.fire({
        title: 'Video Saved Successfully',
        text: 'Saved to your bookmark list...',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the profile page
        router.push('/')
      })
      console.log(response.data) // Handle the response as needed
    } catch (error) {
      console.error('Error bookmarking video:', error)
    }
  }

  if (isLoggedIn()) {
    return (
      <button
        onClick={handleBookmarkVideo}
        className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <PlusIcon
                className="-ml-0.5 h-5 w-5 text-[#F2970F]"
                aria-hidden="true"
              />
        <span>Save</span>
      </button>
    )
  } else {
    return (
      <Link
        href="/sign-in"
        className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <PlusIcon
                className="-ml-0.5 h-5 w-5 text-[#F2970F]"
                aria-hidden="true"
              />
        <span>Save</span>
      </Link>
    )
  }
}

export default SaveButton
