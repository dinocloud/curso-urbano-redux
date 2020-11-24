import React, { useState } from 'react';
import Input from './Input';
import Item from './Item';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../store/tasks/task.type';

interface ToDoListProps {};

const ToDoListPage: React.FC<ToDoListProps> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(e: any, task: string)  {
        e.preventDefault();
        let newTask: Task = {
            id: uuidv4(),
            text: task,
            done: false
        }
        setTasks([ ...tasks, newTask ]);
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter( task => task.id !== id );
        setTasks(filteredTasks);
    }

    return (
        <div className="to-do-list__container">
            <Input addTask={addTask}/>
            <div>
                { tasks && tasks.map((task: Task, idx: number) => 
                    <Item 
                    removeTask={removeTask}
                    key={idx} 
                    task={task}/>
                )}
            </div>
        </div>
    )
}

export default ToDoListPage;