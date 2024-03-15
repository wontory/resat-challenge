import { Metadata } from 'next'

import { SignIn } from './components/sign-in'

export const metadata: Metadata = {
  title: '10일차 로그인 페이지',
}

export default function ToDoListPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="mb-8 text-4xl font-extrabold lg:text-5xl">
        Sign in
      </header>
      <SignIn />
    </main>
  )
}
