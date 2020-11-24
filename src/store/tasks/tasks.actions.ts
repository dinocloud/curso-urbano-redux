import { TasksActions, ADD_TASK, DELETE_TASK } from './tasks.actions.type';
import { Task } from './tasks.type';
import { Dispatch } from 'redux';
import { RootState } from '../root-reducer';

const addTaskAction = (task: Task): TasksActions => {
  return {
    type: ADD_TASK,
    task,
  };
};

const deleteTaskAction = (id: string): TasksActions => {
  return {
    type: DELETE_TASK,
    id,
  };
};

export const addTask = (task: Task) => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {
    dispatch(addTaskAction(task));
  };
};

export const deleteTask = (id: string) => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {
    dispatch(deleteTaskAction(id));
  };
};

/*
export const getTasks = () => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {
    const tasks = taskService.getTasks();
    dispatch(getTaskAction(tasks));
  };
};
*/