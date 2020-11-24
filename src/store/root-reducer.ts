import { combineReducers } from 'redux';
import tasks from './tasks/tasks.reducer';

const appReducer = combineReducers({
  tasks,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
