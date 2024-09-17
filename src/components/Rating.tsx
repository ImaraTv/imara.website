import React, { useState } from 'react';
import Stars from 'react-stars';
import { getAccessToken } from '@/../utils/authUtils';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface Props {
  videoId: number;
  initialRating: number;
  size?: number;
  color1?: string;
  color2?: string;
}

const Rating: React.FC<Props> = ({
  videoId,
  initialRating,
  size = 24,
  color1 = '#ddd',
  color2 = '#ffc107',
}) => {
  const [rating, setRating] = useState(initialRating);
  const router = useRouter();

  const handleRatingChange = async (newRating: number) => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      Swal.fire({
        title: 'Login Required',
        text: 'You need to be logged in to rate this video.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the login page
          router.push('/sign-in');
        }
      });
    } else {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            video_id: videoId,
            stars: newRating,
          }),
        });

        const data = await response.json();
        if (data.status === 'success') {
          setRating(newRating);
          console.log(data.message);
        } else {
          console.error('Error rating video:', data.message);
        }
      } catch (error) {
        console.error('Error rating video:', error);
      }
    }
  };

  return (
    <Stars
      count={5}
      value={rating}
      size={size}
      color1={color1}
      color2={color2}
      edit
      onChange={handleRatingChange}
    />
  );
};

export default Rating;