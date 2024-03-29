'use client'

import { useState } from 'react'

import { TaskInput } from './task-input'
import { TaskFilter } from './task-filter'
import { TaskList } from './task-list'
import { TaskSort } from './task-sort'
import { Filter, Sort, Task } from './to-do-list.types'

export function ToDoList() {
  const [list, setList] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>('전체')
  const [sort, setSort] = useState<Sort>('기본')

  const filteredList = list.filter((item) => {
    if (filter === '완료') return item.isCompleted
    else if (filter === '미완료') return !item.isCompleted
    return true
  })

  const handleTaskAdd = (task: Task) => {
    setList([...list, task])
  }

  const handleFilterChange = (newFilter: Filter) => {
    setFilter(newFilter)
    setSort('기본')
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as Sort)
  }

  const handleListUpdate = (updatedList: Task[]) => {
    setList(updatedList)
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6 shadow-md">
      <TaskInput onAdd={handleTaskAdd} />
      <TaskFilter current={filter} onChange={handleFilterChange} />
      <hr className="mt-2" />
      <TaskSort
        list={filteredList}
        current={sort}
        onChange={handleSortChange}
      />
      {filteredList.length !== 0 && (
        <TaskList
          list={filteredList}
          filter={filter}
          sort={sort}
          onChange={handleListUpdate}
        />
      )}
    </div>
  )
}
