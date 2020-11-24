import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counter.reducer";

const appReducer = combineReducers({
  counter,
});

const rootReducer = (state:any, action:any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
