import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//importamos la hoja de estilos
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

//la idea es que el componente pueda pintar el nombre, la descripcion, es decir el contenido de task.class
const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Task:${task.name} is going to unmount...}`);
        }
    }, [task]);


    /**Function that return a Badge depending on the level of the task */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }
    /**Function that return icon depending on completion of the task **/
    function taskIconCompleted() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/**Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/**Execution of function to return icon depending on completion */}
                <span>{taskIconCompleted()}</span>
                <i className='bi-trash task-action' style={{ color: 'tomato', fontSize: '20px' }} onClick={() => remove(task)}></i>
            </td>
        </tr>
    );
};

//diferentes instancias de los props
TaskComponent.propTypes = {
    //las props pueden ser datos primitivos, complejos o funciones
    task: PropTypes.instanceOf(Task), //estoy diciendo que lo que voy a recibir es una tarea
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
