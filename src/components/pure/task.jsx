import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//la idea es que el componente pueda pintar el nombre, la descripcion, es decir el contenido de task.class
const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
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
