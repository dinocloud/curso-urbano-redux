import React from 'react';
import { Task } from '../store/tasks/tasks.type';
import './styles.css';

interface ItemProps {
    task: Task;
    removeTask: (task: Task) => void;
}

const Item: React.FC<ItemProps> = ({ 
    task,
    removeTask
}) => {
    return (
        <div className="container">
            <div className="content">
                <p className={task.done ? "--strikethrough" : ""}> { task.title } </p>
                <div>
                    <button id="ok"> OK </button>
                    <button 
                    onClick={() => removeTask(task)}
                    id="x"> X </button>
                </div>
            </div>
        </div>
    )
}

export default Item;