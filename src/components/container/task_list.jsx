import React,{useState,useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

//tarea por defecto para hacer el ejemplo
//los componentes contenedoras es que le van a pasar los datos que se le van a pasar a los hijos
const TaskListComponent = () => {
    const defaultTask=new Task('Example','Default description',false,LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de tareas');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount....');
        };
    }, [tasks]);

    
    const changeCompleted=(id)=>{
        console.log('TODO:Cambiar estado de una tarea')
    }


     //CONFIGURAR QUE NUESTRO COMPONENTE DEVUELVA UNA TAREA
    return (
        <div>
            <div>
                <h1>your tasks: </h1>
            </div>
            {/*aplicar un for/map para renderizar una lista, es este caso la tarea */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
