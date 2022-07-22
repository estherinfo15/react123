import { LEVELS } from "./levels.enum";
//tiene una clase de tipo tarea
export class Task{
    name='';
    description='';
    completed=false;
    level=LEVELS.NORMAL;
//inicializacion de todas las propiedades
    constructor(name, description,completed,level){
        this.name=name;
        this.description=description;
        this.completed=completed;
        this.level=level;
    }

    
}