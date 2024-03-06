import { Button } from '@/components/button'
import { Filter } from './to-do-list.types'

const FILTERS: Filter[] = ['전체', '완료', '미완료']

function TaskFilter({
  current,
  onChange,
}: {
  current: string
  onChange: (filter: Filter) => void
}) {
  return (
    <div className="flex gap-4">
      {FILTERS.map((filter) => (
        <Button
          key={`filter-${filter}`}
          className={`w-full ${
            current === filter
              ? 'bg-black hover:bg-black/80'
              : 'border text-black hover:bg-black/10'
          }`}
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

export { TaskFilter }
