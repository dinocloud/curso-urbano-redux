import { createStore } from "redux";
import reducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// pass an optional param to rehydrate state on app start
const store = createStore(
  reducers,
  composeWithDevTools()
);

// export store singleton instance
export default store;
