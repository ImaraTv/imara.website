// components/Rating.tsx

import React from 'react';
import Stars from 'react-stars';

interface Props {
  rating: number;
  size?: number;
  color1?: string;
  color2?: string;
  edit?: boolean;
  onChange?: (newRating: number) => void;
}

const Rating: React.FC<Props> = ({ rating, size = 24, color1 = '#ddd', color2 = '#ffc107', edit = false, onChange }) => {
  return (
    <Stars
      count={5}
      value={rating}
      size={size}
      color1={color1}
      color2={color2}
      edit={edit}
      onChange={onChange}
    />
  );
};

export default Rating;