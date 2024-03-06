import { Option, Select } from '@/components/select'
import { Sort } from './to-do-list.types'

function TaskSort({
  current,
  onChange,
}: {
  current: Sort
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <label className="block text-sm font-medium text-gray-700">정렬:</label>
      <Select className="appearance-none" value={current} onChange={onChange}>
        <Option value="기본">기본</Option>
        <Option value="우선순위 높은 순">우선순위 높은 순</Option>
        <Option value="우선순위 낮은 순">우선순위 낮은 순</Option>
      </Select>
    </div>
  )
}

export { TaskSort }
