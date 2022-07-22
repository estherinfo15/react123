import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//tarea por defecto para hacer el ejemplo
//los componentes contenedoras es que le van a pasar los datos que se le van a pasar a los hijos
const TaskListComponent = () => {
    const defaultTask=new Task('Example','Default description',false,LEVELS.NORMAL);
    /*const changeState=(id)=>{
        console.log('TODO:Cambiar estado de una tarea')
    }*/
     //CONFIGURAR QUE NUESTRO COMPONENTE DEVUELVA UNA TAREA
    return (
        <div>
            <div>
                your tasks: 
            </div>
            {/*aplicar un for/map para renderizar una lista, es este caso la tarea */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
