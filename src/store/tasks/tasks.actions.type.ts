import { TaskState } from './tasks.type';

export const TASK_REQUEST = 'TASK_REQUEST';
export const TASK_RESPONSE = 'TASK_RESPONSE'; 

export interface TaskRequestAction {
  type: typeof TASK_REQUEST;
  payload: TaskState
}

export interface TaskResponseAction {
  type: typeof TASK_RESPONSE;
  payload: TaskState
}

export type TaskActionTypes = TaskRequestAction | TaskResponseAction;

export type TasksActions = TaskActionTypes;