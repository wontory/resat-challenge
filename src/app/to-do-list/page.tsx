import { Metadata } from 'next'
import { ToDoList } from './components/to-do-list'

export const metadata: Metadata = {
  title: '3일차 To-Do 리스트',
}

export default function ToDoListPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <header className="mb-8 text-4xl font-extrabold lg:text-5xl">
        To-Do List
      </header>
      <ToDoList />
    </main>
  )
}
