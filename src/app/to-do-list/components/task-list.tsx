import { Badge } from '@/components/badge'
import { Checkbox } from '@/components/checkbox'

import { Filter, Task } from './to-do-list.types'

const badgeVariants = {
  낮음: 'bg-green-500',
  보통: 'bg-yellow-500 ',
  높음: 'bg-red-500',
  '아주 높음': 'bg-red-900',
}

function TaskList({
  list,
  filter,
  onChange,
}: {
  list: Task[]
  filter: Filter
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

  return (
    <div className="flex flex-col gap-2">
      {filteredList.length ? (
        filteredList.map((item) => (
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
              <span>{item.title}</span>
              <Badge
                className={`ml-auto capitalize ${badgeVariants[item.priority]}`}
              >
                {item.priority}
              </Badge>
            </div>
          </div>
        ))
      ) : (
        <div className="text-black/30">Empty list</div>
      )}
    </div>
  )
}

export { TaskList }
