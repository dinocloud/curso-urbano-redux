import React from 'react';
import Input from './Input';
import Item from './Item';
import './styles.css';
import {
    getTasks,
    createTask,
    deleteTask
} from '../store/tasks/tasks.actions';
import { Task } from '../store/tasks/tasks.type';
import { bindActionCreators, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/root-reducer';
import { connect } from 'react-redux';

interface LinkDispatchProps {
    getTasks: () => void;
    createTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
}
  
interface LinkStateProps {
    tasks: Task[];
    isFetching: boolean;
}

type ToDoListProps = LinkDispatchProps & LinkStateProps;

const ToDoListPage: React.FC<ToDoListProps> = (props) => {

    function addTask(e: any, task: string)  {
        e.preventDefault();
        let newTask: Task = {
            title: task,
            done: false
        }
        props.createTask(newTask);
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
    getTasks: bindActionCreators(getTasks, dispatch),
    createTask: bindActionCreators(createTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch)
  });
  
const mapStateToProps = (state: RootState): LinkStateProps => {
    const { tasks, isFetching} = state.tasks;

    return {
        tasks,
        isFetching
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListPage);