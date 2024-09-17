import { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const VideoImage: React.FC<VideoImageProps> = ({ src, alt, width, height, className }) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const placeholder = '/images/recent.png';

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(src, { method: 'HEAD' });
        if (response.ok) {
          setImageSrc(src);
        } else {
          setImageSrc(placeholder);
        }
      } catch (error) {
        setImageSrc(placeholder);
      }
    };

    checkImage();
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

