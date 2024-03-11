'use client'

import { Children, useState } from 'react'
import Image from 'next/image'

import { Button } from '@/components/button'
import { Icons } from './icons'

function Carousel({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? prev : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) =>
      prev === Children.count(children) - 1 ? prev : prev + 1,
    )
  }

  return (
    <div className="relative aspect-video h-80 overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex h-full transition duration-700"
        style={{
          transform: `translateX(${-index * 100}%)`,
        }}
      >
        {children}
      </div>
      <Button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white shadow-none"
        onClick={handlePrev}
      >
        <Icons.Left />
      </Button>
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white shadow-none"
        onClick={handleNext}
      >
        <Icons.Right />
      </Button>
    </div>
  )
}

function CarouselItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}

export { Carousel, CarouselItem }
