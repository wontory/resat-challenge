import { Option, Select } from '@/components/select'
import { Sort, Task } from './to-do-list.types'

function TaskSort({
  list,
  current,
  onChange,
}: {
  list: Task[]
  current: Sort
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      {list.length ? (
        <div className="black font-semibold">📋 목록</div>
      ) : (
        <div className="text-black/30">List empty.</div>
      )}
      <div className="flex items-center gap-2">
        <label className="block text-sm font-medium text-gray-700">정렬:</label>
        <Select className="appearance-none" value={current} onChange={onChange}>
          <Option value="기본">기본</Option>
          <Option value="우선순위 높은 순">우선순위 높은 순</Option>
          <Option value="우선순위 낮은 순">우선순위 낮은 순</Option>
        </Select>
      </div>
    </div>
  )
}

export { TaskSort }
