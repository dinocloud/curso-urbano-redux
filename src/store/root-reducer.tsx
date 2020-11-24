import { combineReducers } from "@reduxjs/toolkit";
import tasks from "./tasks/tasks.reducer";

const appReducer = combineReducers({
  tasks,
});

const rootReducer = (state:any, action:any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
