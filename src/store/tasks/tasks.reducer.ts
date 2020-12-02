import { TaskState } from './tasks.type';
import { TasksActions, TASK_RESPONSE, TASK_REQUEST } from './tasks.actions.type';

const defaultState: TaskState = {
  tasks: [],
  isFetching: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: TasksActions): TaskState => {
  switch (action.type) {
    case TASK_RESPONSE: {
      return {
        ...action.payload
      }
    }
    case TASK_REQUEST: {
      return {
        ...action.payload
      };
    }
    default: 
      return state;
  }
};
