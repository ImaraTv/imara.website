'use client'

import { useState, useEffect } from 'react'
import {
  format,
  startOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  parseISO,
  startOfMonth,
  isAfter,
  isBefore,
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { X, Star, Clock, MapPin, Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Fallback from '@/images/video.png'
import Yt from '@/images/player.png'
import { cn } from '@/lib/utils'

// interface Creator {
//   id: number
//   name: string
//   stage_name: string | null
//   about: string | null
//   skills: string
// }

interface Sponsor {
  name: string
  about: string
  website: string
  logo: string
}

interface Location {
  id: number | null
  name: string | null
}

interface Media {
  poster: string
  trailer: string | null
  trailer_vimeo: string | null
  hd_film: string
  hd_film_vimeo: string
}

interface Film {
  id: number
  name: string
  slug: string
  release_date: string
  duration: number | null
  category: string
  topics: string[]
  description: string
  vimeo_link: string
  call_to_action_btn: string | null
  call_to_action_link: string | null
  image: string
  creator: {
    id: number
    name: string
    stage_name: string | null
    about: string | null
    skills: string
  }
  rating: string
  sponsor: Sponsor
  location: Location
  stars: number
  media: Media
}

interface Event {
  id: number
  status: string
  title: string
  description: string
  link: string
  start_date: string
  end_date: string
  poster: string
  cta_text: string | null
  cta_link: string | null
  sponsor: Sponsor
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [films, setFilms] = useState<Film[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUpcomingVideos()
    fetchEvents()
  }, [])

  const fetchUpcomingVideos = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos/upcoming`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://teststudio.imara.tv',
          },
        },
      )
      const data = await response.json()
      const placeholderImage = Fallback

      const processedVideos = await Promise.all(
        data.data.map(async (video: any) => {
          if (!video.image) {
            video.image = placeholderImage
          } else {
            try {
              const imageResponse = await fetch(video.image, { method: 'HEAD' })
              if (!imageResponse.ok) {
                video.image = placeholderImage
              }
            } catch (error) {
              video.image = placeholderImage
            }
          }
          return video as Film
        }),
      )

      setFilms(processedVideos)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching videos:', error)
      setIsLoading(false)
    }
  }

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://teststudio.imara.tv',
          },
        },
      )
      const data = await response.json()
      setEvents(data.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  function EmptyCellDialog({ date }: { date: Date }) {
    const dayFilms = films.filter((film) =>
      isSameDay(parseISO(film.release_date), date)
    )
    const dayEvents = events.filter(
      (event) =>
        isSameDay(parseISO(event.start_date), date) ||
        (isAfter(date, parseISO(event.start_date)) &&
          isBefore(date, parseISO(event.end_date)))
    )

    if (dayFilms.length === 0 && dayEvents.length === 0) {
      return (
        <Dialog>
        <DialogTrigger asChild>
          <div className="w-full h-10 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Schedule a Film</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center mb-4">No film scheduled for {format(date, 'MMMM d, yyyy')}. Would you like to create one?</p>
            <Button asChild className="w-full">
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/create-film-project`}>
                Create a Film
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      )
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full cursor-pointer">
            <div className="flex flex-col gap-1">
              {dayFilms.map((film) => (
                <div
                  key={film.id}
                  className="bg-primary/10 text-primary text-xs p-1 rounded truncate"
                >
                  {film.name}
                </div>
              ))}
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-orange-500/10 text-orange-500 text-xs p-1 rounded truncate"
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{format(date, 'EEEE, MMMM do')}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            {dayFilms.map((film) => (
              <FilmDialog key={film.id} film={film} />
            ))}
            {dayEvents.map((event) => (
              <EventDialog key={event.id} event={event} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  // const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const prevMonth = () => {
    const previousMonth = subMonths(currentDate, 1)
    if (!isBefore(startOfMonth(previousMonth), startOfMonth(new Date()))) {
      setCurrentDate(previousMonth)
    }
  }

  const renderHeader = () => {
    return (
      <div className="mb-4 flex items-center justify-between">
        <Button onClick={prevMonth} variant="outline" size="icon" disabled={isBefore(startOfMonth(subMonths(currentDate, 1)), startOfMonth(new Date()))}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <Button onClick={nextMonth} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = 'EEE'
    const days = []
    let startDate = startOfWeek(currentDate)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-bold">
          {format(addDays(startDate, i), dateFormat)}
        </div>,
      )
    }
    return <div className="mb-2 grid grid-cols-7 gap-2">{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate)
    const startDate = startOfWeek(monthStart)
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    for (let i = 0; i < 42; i++) {
      formattedDate = format(day, 'd')
      const cloneDay = day
      const dayFilms = films.filter((film) =>
        isSameDay(parseISO(film.release_date), cloneDay),
      )
      const dayEvents = events.filter(
        (event) =>
          isSameDay(parseISO(event.start_date), cloneDay) ||
          (isAfter(cloneDay, parseISO(event.start_date)) &&
            isBefore(cloneDay, parseISO(event.end_date))),
      )
      const isCurrentMonth = isSameMonth(day, currentDate)

      days.push(
        <div
          key={day.toString()}
          className={cn(
            'min-h-[100px] rounded-lg border p-2 transition-all duration-200 ease-in-out',
            isCurrentMonth ? 'bg-background hover:bg-muted' : 'bg-muted/50',
            (dayFilms.length > 0 || dayEvents.length > 0) && isCurrentMonth && 'ring-primary ring-2',
          )}
        >
          <span
            className={cn(
              'text-sm font-medium',
              !isCurrentMonth && 'text-muted-foreground',
            )}
          >
            {formattedDate}
          </span>
          {(dayFilms.length > 0 || dayEvents.length > 0) && isCurrentMonth ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "mt-1 w-full justify-start text-xs text-white hover:text-white",
                    dayFilms.length > 0 && dayEvents.length === 0
                      ? "bg-[#1c64f2] hover:bg-[#007bff]"
                      : "bg-orange-500 hover:bg-orange-600"
                  )}
                >
                  <div className="w-full truncate">
                    {(dayFilms.length > 0 && dayEvents.length > 0) ? (
                      <span>Multiple Events</span>
                    ) : dayFilms.length > 0 ? (
                      <span className="block truncate">{dayFilms.length === 1 ? dayFilms[0].name : `${dayFilms.length} films`}</span>
                    ) : (
                      <span className="block truncate">{dayEvents.length === 1 ? dayEvents[0].title : `${dayEvents.length} events`}</span>
                    )}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-2">
                <div className="grid divide-y-2">
                  {dayFilms.map((film) => (
                    <FilmDialog key={film.id} film={film} />
                  ))}
                  {dayEvents.map((event) => (
                    <EventDialog key={event.id} event={event} />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            isCurrentMonth && <EmptyCellDialog date={cloneDay} />
          )}
        </div>,
      )

      if ((i + 1) % 7 === 0) {
        rows.push(
          <div key={day.toString()} className="grid grid-cols-7 gap-2">
            {days}
          </div>,
        )
        days = []
      }

      day = addDays(day, 1)
    }

    return <div className="grid gap-2">{rows}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full bg-gray-800 px-6 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className="pb-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
            Upcoming Films
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-400">
            Stay up to date
          </p>
        </div>
      </div>
      <div className="mx-auto mb-4 max-w-[1000px] rounded-md bg-white p-4 shadow">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  )
}

function FilmDialog({ film }: { film: Film }) {
  const [videoUrl, setVideoUrl] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const vimeoVideoId = film.vimeo_link?.split('/').pop()
    setVideoUrl(
      `https://player.vimeo.com/video/${vimeoVideoId}?badge=0&autoplay=1&title=0&player_id=0&app_id=${process.env.NEXT_PUBLIC_VIMEO_APP_ID}`,
    )
  }, [film.vimeo_link])

  console.log('Creator Name:', film.creator.name)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-muted justify-start bg-[#1c64f2] p-4"
        >
          <div className="flex max-w-56 flex-col items-start gap-1 truncate">
            <span className="font-semibold text-white">{film.name}</span>
            <span className="text-xs text-white">
              {format(parseISO(film.release_date), 'PPP')} {format(parseISO(film.release_date), 'HHmm')}HRS
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 pb-10 pt-0 sm:max-w-[600px]">
        <div className="relative">
          <DialogHeader>
            <div className="relative aspect-[551/240] w-full">
              {isPlaying ? (
                <iframe
                  src={videoUrl}
                  allow="autoplay; picture-in-picture; clipboard-write; fullscreen"
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe>
              ) : (
                <>
                  <Image
                    src={film.media.poster}
                    alt={film.name}
                    fill
                    className="object-cover"
                  />
                  <Image
                    className="absolute inset-0 m-auto h-[23.13px] w-[32.81px] cursor-pointer object-contain md:h-auto md:w-[61px] md:object-cover"
                    width={50}
                    height={43}
                    src={Yt}
                    alt={'ÿt'}
                    onClick={() => setIsPlaying(true)}
                  />
                </>
              )}
            </div>
            <DialogTitle className="p-4 text-lg">{film.name}</DialogTitle>
          </DialogHeader>

          {/* Creator and Sponsor Info */}
          <div className="text-muted-foreground flex items-center justify-between px-4 text-sm">
            <div className="flex items-center gap-2">
              <span>Created By: {film.creator.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Sponsored By: </span>
              <Image
                src={film.sponsor.logo}
                alt={film.sponsor.name}
                width={80}
                height={20}
                className="object-contain"
              />
            </div>
          </div>

          <Separator className="my-4" />

          {/* Meta Information */}
          <div className="grid gap-4 px-4">
            <div className="flex items-center gap-4 text-sm">
              {film.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{film.duration} min</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{film.stars}/5</span>
              </div>
              {film.location.name && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{film.location.name}</span>
                </div>
              )}
            </div>

            {/* Topics */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium">Topics:</span>
              {film.topics.map((topic) => (
                <Badge key={topic} variant="secondary">
                  #{topic}
                </Badge>
              ))}
            </div>

            {/* Locations */}
            {film.location.name && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">Locations:</span>
                <Badge variant="outline">#{film.location.name}</Badge>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Film Description</h3>
              <p className="text-muted-foreground text-sm">
                {film.description}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-around pt-4">
              <div>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/create-film-project`}
                  className="group inline-flex items-center justify-center rounded-lg px-2 py-2 text-xs font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-sm"
                >
                  Create Similar Film
                </a>
              </div>
              <div>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/onboard-sponsor?creator_id=${film.creator.id}`}
                  className="group inline-flex items-center justify-center rounded-lg px-2 py-2 text-xs font-medium text-white bg-[#007BFF] focus:outline-none md:text-sm"
                >
                  Sponsor Film
                </a>
              </div>
              {film.call_to_action_btn && film.call_to_action_link && (
                <div className="">
                  <Button asChild className="w-full">
                    <a
                      href={film.call_to_action_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {film.call_to_action_btn}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function EventDialog({ event }: { event: Event }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-muted justify-start bg-[#1c64f2] p-4"
        >
          <div className="flex max-w-56 flex-col items-start gap-1 truncate">
            <span className="font-semibold text-white">{event.title}</span>
            <span className="text-xs text-white">
              {format(parseISO(event.start_date), 'PPP')} {format(parseISO(event.start_date), 'HHmm')}HRS
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 pb-10 pt-0 sm:max-w-[600px]">
        <div className="relative">
          <DialogHeader>
            <div className="relative aspect-[551/240] w-full">
              <Image
                src={event.poster || Fallback.src}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <DialogTitle className="p-4 text-lg">{event.title}</DialogTitle>
          </DialogHeader>

          {/* Sponsor Info */}
          {event.sponsor && event.sponsor.name && (
            <div className="text-muted-foreground flex items-center justify-between px-4 text-sm">
              <div className="flex items-center gap-2">
                <span>Sponsored By: </span>
                {event.sponsor.logo ? (
                  <Image
                    src={event.sponsor.logo}
                    alt={event.sponsor.name}
                    width={80}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  <span>{event.sponsor.name}</span>
                )}
              </div>
            </div>
          )}

          <Separator className="my-4" />

          {/* Meta Information */}
          <div className="grid gap-4 px-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Event Description</h3>
              <p className="text-muted-foreground text-sm">
                {event.description}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-around pt-4">
              {event.link && (
                <div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-lg px-2 py-2 text-xs font-medium text-[#525252] ring-2 ring-[#007BFF] focus:outline-none md:text-sm"
                  >
                    Learn More
                  </a>
                </div>
              )}
              {event.cta_text && event.cta_link && (
                <div>
                  <Button asChild className="w-full">
                    <a
                      href={event.cta_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.cta_text}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
