import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './root-reducer';
import { RootState } from '.';
import { TasksActions } from './tasks/tasks.actions.type';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools || compose;

export type ActionType = TasksActions;

function configureStore(initialState?: {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState, ActionType>))
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
