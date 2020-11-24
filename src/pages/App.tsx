import React from 'react';
import Button from '../components/Button/Button';
import Counter from '../components/counter/Counter';
import {increment, decrement} from '../store/counter/counter.actions';
import './App.css';
import store from '../store'
interface Props {}

const App:React.FC<Props> = () => {
  return (
    <>
      <Button
        onClick={()=>{increment()}}
        label="+"
      /> 
      <Counter
        value={store.getState().counter.toString()}
      />
      <Button
        onClick={()=>{decrement()}}
        label="-"
      />
    </>
  );
}

export default App;