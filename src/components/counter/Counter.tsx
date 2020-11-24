import React from 'react';
import  './Counter.css'
interface CounterProps {
    value: string;
}

const Counter:React.FC<CounterProps> = (props: CounterProps) => {
  return (
  <div className="counter-component"> {props.value} </div>
  );
}

export default Counter;