import React from 'react';
import { Task } from './ToDoListPage';
import './styles.css';

interface ItemProps {
    task: Task;
    removeTask: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ 
    task,
    removeTask
}) => {
    return (
        <div className="container">
            <div className="content">
                <p className={task.done ? "--strikethrough" : ""}> { task.text } </p>
                <div>
                    <button id="ok"> OK </button>
                    <button 
                    onClick={() => removeTask(task.id)}
                    id="x"> X </button>
                </div>
            </div>
        </div>
    )
}

export default Item;