'use client'

import { useState } from 'react'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Select, Option } from '@/components/select'
import { Task } from './to-do-list.types'

function TaskInput({ onAdd }: { onAdd: (task: Task) => void }) {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    priority: 1,
    isCompleted: false,
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!task.title) {
      alert('할 일을 작성해주세요.')
      return
    }

    onAdd(task)

    setTask({
      id: task.id + 1,
      title: '',
      priority: 1,
      isCompleted: false,
    })
  }

  return (
    <form className="flex">
      <Input
        placeholder="3일차 미션 올리기"
        className="rounded-r-none"
        value={task.title}
        onChange={(e) => {
          setTask({ ...task, title: e.target.value })
        }}
      />
      <Select
        className="appearance-none rounded-none border-l-0"
        value={task.priority}
        onChange={(e) => {
          setTask({
            ...task,
            priority: Number(e.target.value),
          })
        }}
      >
        <Option value="1">낮음</Option>
        <Option value="2">보통</Option>
        <Option value="3">높음</Option>
        <Option value="4">아주 높음</Option>
      </Select>
      <Button
        type="submit"
        onClick={handleSubmit}
        className="rounded-l-none bg-blue-600 text-white hover:bg-blue-600/80"
      >
        추가
      </Button>
    </form>
  )
}

export { TaskInput }
