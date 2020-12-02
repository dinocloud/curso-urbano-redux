import { TasksActions, TASK_RESPONSE, TASK_REQUEST } from './tasks.actions.type';
import { Task, TaskState } from './tasks.type';
import { Dispatch } from 'redux';
import { RootState } from '../root-reducer';
import taskService from '../../services/task.service';

const taskRequest = (taskState: TaskState): TasksActions => {
  return {
    type: TASK_REQUEST,
    payload: taskState
  }
}

const taskResponse = (taskState: TaskState): TasksActions => {
  return {
    type: TASK_RESPONSE,
    payload: taskState
  }
}

export const getTasks = () => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {

    dispatch(taskRequest({
      ...getState().tasks,
      isFetching: true
    }))

    const response: any = await taskService.getTasks()
    .catch( (e) => console.error(e) );

    if (!response) return;

    dispatch(taskResponse({
      ...getState().tasks,
      tasks: response.data,
      isFetching: false
    }))
  }
} 

export const createTask = (task: Task) => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {

    dispatch(taskRequest({
      ...getState().tasks,
      isFetching: true
    }));

    const createResponse: any = await taskService.createTask(task)
    .catch((e) => console.error(e));

    const getResponse: any = await taskService.getTasks()
    .catch((e) => console.error(e));

    if(!createResponse && !getResponse) return;

    dispatch(taskResponse({
      ...getState().tasks,
      tasks: getResponse.data,
      isFetching: false
    }))
  }
}

export const deleteTask = (task: Task) => {
  return async (dispatch: Dispatch<TasksActions>, getState: () => RootState) => {

    dispatch(taskRequest({
      ...getState().tasks,
      isFetching: true
    }));

    const deleteResponse = await taskService.deleteTask(task)
    .catch((e) => console.log(e) );

    const getResponse: any = await taskService.getTasks()
    .catch((e) => console.error(e));

    if(!deleteResponse && !getResponse) return;

    dispatch(taskResponse({
      ...getState().tasks,
      tasks: getResponse.data,
      isFetching: false
    }))
  }

}