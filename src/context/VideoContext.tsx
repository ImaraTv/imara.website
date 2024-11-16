import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Video {
  id: number;
  name: string;
  slug: string;
  release_date: string;
  duration: number | null;
  category: string;
  topics: string[];
  description: string;
  vimeo_link: string;
  call_to_action_btn: string | null;
  call_to_action_link: string | null;
  image: string;
  creator: {
    id: number;
    name: string;
    stage_name: string | null;
    about: string | null;
    skills: string;
  };
  rating: string;
  sponsor: {
    name: string;
    about: string;
    website: string;
    logo: string;
  };
  location: {
    id: number | null;
    name: string | null;
  };
  stars: number;
  media: {
    poster: string;
    trailer: string | null;
    trailer_vimeo: string | null;
    hd_film: string;
    hd_film_vimeo: string;
  };
}

interface VideoContextType {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};
