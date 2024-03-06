interface Task {
  id: number
  title: string
  priority: '낮음' | '보통' | '높음' | '아주 높음'
  isCompleted: boolean
}

type Filter = '전체' | '완료' | '미완료'

export type { Task, Filter }
