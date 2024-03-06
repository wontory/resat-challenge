interface Task {
  id: number
  title: string
  priority: number
  isCompleted: boolean
}

type Filter = '전체' | '완료' | '미완료'

type Sort = '기본' | '우선순위 높은 순' | '우선순위 낮은 순'

export type { Task, Filter, Sort }
