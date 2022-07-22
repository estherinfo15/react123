import React,{useState} from 'react';
import PropTypes from 'prop-types';

//COMPONENTES FUNCIONALES: la podemos embeber en cualquier sitio, no necesita clases, hay hubs para trabajar con referencias y hubs
const GreetingF = (props) => {
    //breve introduccion a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);
    const birthday=()=>{
        //actualizar el state
        setage(age+1);
    }
    return (
        <div>
        <h1>Hola {props.name} desde tu componente funcional!</h1>{/*de las propiedades que voy a recibir, voy a pintar un dato*/}
        <h2>
            Tu edad es: {age}
        </h2>
        <div>
        <button onClick={birthday}>
        Cumplir años
        </button>
        </div>
        </div>
    );
};


GreetingF.propTypes = {
name:PropTypes.string
};


export default GreetingF;
