import { TaskState } from './tasks.type';
import { TasksActions, DELETE_TASK, ADD_TASK } from './tasks.actions.type';

const defaultState: TaskState = {
  tasks: []
};

export default (state = defaultState, action: TasksActions): TaskState => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks:[...state.tasks, action.task],
      };
    }
    case DELETE_TASK: {
      return {
        tasks: state.tasks.filter(el => el.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
};
