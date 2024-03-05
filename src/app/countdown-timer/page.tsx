import { Metadata } from 'next'
import { CountdownTimer } from './components/countdown-timer'

export const metadata: Metadata = {
  title: '2일차 카운트다운 타이머',
}

export default function CountdownTimerPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="mb-8 text-4xl font-extrabold lg:text-5xl">
        Countdown Timer
      </header>
      <CountdownTimer />
    </main>
  )
}
