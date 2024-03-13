'use client'

import { Children, useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/button'
import { Icons } from './icons'

function Carousel({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? Children.count(children) - 1 : prev - 1))
  }

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev === Children.count(children) - 1 ? 0 : prev + 1))
  }, [children])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <div className="relative aspect-[6/4] h-60 overflow-hidden rounded-lg shadow-lg">
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

function CarouselItem({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative aspect-[6/4] bg-green-400">
      <span className="flex h-full w-full items-center justify-center text-center text-2xl font-semibold text-white">
        {children}
      </span>
    </div>
  )
}

export { Carousel, CarouselItem }
