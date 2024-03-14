import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '9일차 반응형 네비게이션 & 메뉴바',
}

export default function Home() {
  return (
    <section className="container mx-auto flex max-w-screen-2xl items-center justify-center px-8">
      <header className="text-center text-4xl font-extrabold lg:text-5xl">
        Global Navigation Bar
      </header>
    </section>
  )
}
