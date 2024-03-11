import { Metadata } from 'next'
import { Calendar } from './components/calendar'

export const metadata: Metadata = {
  title: '4일차 캘린더',
}

export default function CalendarPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="mb-8 text-4xl font-extrabold lg:text-5xl">
        Calendar
      </header>
      <Calendar />
    </main>
  )
}
