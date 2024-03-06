'use client'

import { useState } from 'react'

import { TaskInput } from './task-input'
import { TaskFilter } from './task-filter'
import { TaskList } from './task-list'
import { Filter, Task } from './to-do-list.types'

export function ToDoList() {
  const [list, setList] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('전체')

  const handleTaskAdd = (task: Task) => {
    setList([...list, task])
  }

  const handleFilterChange = (appliedFilter: Filter) => {
    setFilter(appliedFilter)
  }

  const handleListUpdate = (updatedList: Task[]) => {
    setList(updatedList)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6 shadow-md">
      <TaskInput onAdd={handleTaskAdd} />
      <TaskFilter current={filter} onChange={handleFilterChange} />
      <TaskList list={list} filter={filter} onChange={handleListUpdate} />
    </div>
  )
}
