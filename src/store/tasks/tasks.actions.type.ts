import { TaskState, Task} from './tasks.type';

export const ADD_TASK = 'ADD_TASK';

export const DELETE_TASK = 'DELETE_TASK';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  task: Task;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  id: string;
}

export type TasksActions = AddTaskAction | DeleteTaskAction;
