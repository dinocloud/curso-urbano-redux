import React from 'react';
import './Button.css'

interface ButtonProps {
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    label: string;
}

const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
      <button className="button-component" type="button" onClick={props.onClick}>{props.label}</button> 
  );
}

export default Button;