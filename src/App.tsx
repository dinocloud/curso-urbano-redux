import React from 'react';
import ToDoListPage from './components/ToDoListPage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ToDoListPage/>
    </Provider>
  ) 
    
}

export default App;
