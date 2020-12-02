export interface Task {
  id?: number,
  title: string,
  done: boolean
}

export interface TaskState {
  tasks: Task[],
  isFetching: boolean
}
