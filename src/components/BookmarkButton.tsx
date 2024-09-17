import React from 'react'
import Link from 'next/link'
import { isLoggedIn, getAccessToken } from '@/../utils/authUtils'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface BookmarkButtonProps {
  videoId: number
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ videoId }) => {
    const router = useRouter();
  const handleBookmarkVideo = async () => {
    try {
        const accessToken = getAccessToken();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookmark`,
        { video_id: videoId },
        {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      )
      Swal.fire({
        title: 'Video Saved Successfully',
        text: 'Saved to your bookmark list...',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the profile page
        router.push('/');
      });
      console.log(response.data) // Handle the response as needed
    } catch (error) {
      console.error('Error bookmarking video:', error)
    }
  }

  if (isLoggedIn()) {
    return (
      <button
        onClick={handleBookmarkVideo}
        className="group inline-flex items-center justify-center gap-3 rounded-lg px-10 py-2 text-[12px] font-medium text-white focus:outline-none md:text-[17px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
            fill="white"
          />
        </svg>
        <span>Save</span>
      </button>
    )
  } else {
    return (
      <Link
        href="/sign-in"
        className="group inline-flex items-center justify-center gap-3 rounded-lg px-10 py-2 text-[12px] font-medium text-white focus:outline-none md:text-[17px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"
            fill="white"
          />
        </svg>
        <span>Save</span>
      </Link>
    )
  }
}

export default BookmarkButton
