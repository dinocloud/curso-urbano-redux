import { Task } from '../store/tasks/tasks.type';

class TaskService {

    async getTasks(): Promise<any> {
        const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/task`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        );
        return response.json();
    }

    async getTaskById(id: number): Promise<any> {
        const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/task/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        );
        return response.json();
    }

    async createTask(task: Task): Promise<any> {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            title: task.title,
            done: task.done
        }),
        });
        return response.json();
    }

    async deleteTask(task: Task): Promise<any> {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/task/${task.id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            }
        });
        return response.json();
    }
}

const taskService = new TaskService();
export default taskService;