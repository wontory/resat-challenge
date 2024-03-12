import { Metadata } from 'next'

import { Carousel, CarouselItem } from './components/carousel'

export const metadata: Metadata = {
  title: '7일차 인피니트 이미지 슬라이드(캐러셀)',
}

interface Image {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

export default async function CarouselPage() {
  const IMAGES: Image[] = await fetch(
    'https://picsum.photos/v2/list?limit=5',
  ).then((res) => res.json())

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="mb-8 text-4xl font-extrabold lg:text-5xl">
        Carousel
      </header>
      <Carousel>
        {IMAGES.map((image, index) => (
          <CarouselItem
            key={`ci-${index}`}
            src={image.download_url}
            alt={`${image.author}-${image.id}`}
          />
        ))}
      </Carousel>
    </main>
  )
}
