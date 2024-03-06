import { Badge } from '@/components/badge'
import { Checkbox } from '@/components/checkbox'
import { Input } from '@/components/input'

import { Filter, Sort, Task } from './to-do-list.types'
import { cn } from '@/utils/cn'

const badgeVariants: { [key: number]: string } = {
  1: 'bg-green-500',
  2: 'bg-yellow-500 ',
  3: 'bg-red-500',
  4: 'bg-red-900',
}

const badgeContents: { [key: number]: string } = {
  1: '낮음',
  2: '보통',
  3: '높음',
  4: '아주 높음',
}

function TaskList({
  list,
  filter,
  sort,
  onChange,
}: {
  list: Task[]
  filter: Filter
  sort: Sort
  onChange: (updatedList: Task[]) => void
}) {
  const filteredList = list.filter((item) => {
    if (filter === '완료') return item.isCompleted
    else if (filter === '미완료') return !item.isCompleted
    return true
  })

  const handleStatusUpdate = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(
      list.map((i) =>
        i.id === id ? { ...i, isCompleted: e.target.checked } : i,
      ),
    )
  }

  const handleTaskUpdate = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(
      list.map((i) => (i.id === id ? { ...i, title: e.target.value } : i)),
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredList
        .toSorted((a, b) => {
          if (sort === '우선순위 낮은 순') return a.priority - b.priority
          else if (sort === '우선순위 높은 순') return b.priority - a.priority
          return a.id - b.id
        })
        .map((item) => (
          <div
            key={`task-${item.id}`}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex w-full items-center gap-2">
              <Checkbox
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) => handleStatusUpdate(item.id, e)}
              />
              <Input
                value={item.title}
                onChange={(e) => handleTaskUpdate(item.id, e)}
                className="border-none shadow-none"
              />
              <Badge
                className={cn(
                  'ml-auto capitalize',
                  badgeVariants[item.priority],
                )}
              >
                {badgeContents[item.priority]}
              </Badge>
            </div>
          </div>
        ))}
    </div>
  )
}

export { TaskList }
