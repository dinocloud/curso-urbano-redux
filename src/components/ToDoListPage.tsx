import React, { useState } from 'react';
import Input from './Input';
import Item from './Item';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../store/tasks/tasks.type';
import { addTask, deleteTask } from '../store/tasks/tasks.actions';
import { bindActionCreators, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/root-reducer';
import { connect } from 'react-redux';

interface LinkDispatchProps {
    addTask: (task:Task) => void;
    deleteTask: (id:string) => void;
}
  
interface LinkStateProps {
    tasks: Task[];
}

type ToDoListProps = LinkDispatchProps & LinkStateProps;

const ToDoListPage: React.FC<ToDoListProps> = (props) => {
    function addTask(e: any, task: string)  {
        e.preventDefault();
        let newTask: Task = {
            id: uuidv4(),
            text: task,
            done: false
        }
        props.addTask(newTask);
    }

    return (
        <div className="to-do-list__container">
            <Input addTask={addTask}/>
            <div>
                { props.tasks.map((task: Task, idx: number) => 
                    <Item 
                    removeTask={props.deleteTask}
                    key={idx} 
                    task={task}/>
                )}
            </div>
        </div>
    )
}


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, any>
  ): LinkDispatchProps => ({
    addTask: bindActionCreators(addTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
  });
  
const mapStateToProps = (state: RootState): LinkStateProps => {
    const { tasks } = state.tasks;

    return {
        tasks
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage);