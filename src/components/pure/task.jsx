import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//importamos la hoja de estilos
import '../../styles/task.scss'

//la idea es que el componente pueda pintar el nombre, la descripcion, es decir el contenido de task.class
const TaskComponent = ({task}) => {
    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Task:${task.name} is going to unmount...}`);
        }
    }, [task]);



    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name }
            </h2>
            <h3>
                Description: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'Completed':'Pending'}
            </h5>
        </div>
    );
};

//diferentes instancias de los props
TaskComponent.propTypes = {
    //las props pueden ser datos primitivos, complejos o funciones
    task:PropTypes.instanceOf(Task) //estoy diciendo que lo que voy a recibir es una tarea
};


export default TaskComponent;
