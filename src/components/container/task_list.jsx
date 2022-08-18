import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

//tarea por defecto para hacer el ejemplo
//los componentes contenedoras es que le van a pasar los datos que se le van a pasar a los hijos
const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);


    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de tareas');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount....');
        };
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //we update the state the component with the new list of tasks and it will update the
        //iteration of the tasks in order to show the task update
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log('Deleted this Task:', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        console.log('Register this Task:', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    //CONFIGURAR QUE NUESTRO COMPONENTE DEVUELVA UNA TAREA
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/**Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>your tasks: </h5>
                    </div>
                </div>
                {/**Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    <table style={{ backgroundColor: '#7EE8DF ', borderRadius: '2px' }}>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}>
                                    </TaskComponent>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <TaskForm add={addTask}></TaskForm>
            </div>
            {/*aplicar un for/map para renderizar una lista, es este caso la tarea 
            <TaskComponent task={defaultTask}></TaskComponent>*/}
        </div>
    );
};


export default TaskListComponent;
