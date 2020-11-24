export interface Task {
  id: string,
  text: string,
  done: boolean
}

export interface TaskState {
  tasks: Task[]
}
