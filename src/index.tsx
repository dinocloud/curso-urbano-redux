import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import store from "./store";

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

render()
store.subscribe(render)
