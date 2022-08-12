/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificarlo
 */

import React,{useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial=0;

    //valor inicial para una persona
    const personaInicial={
        nombre:'martin',
        email:'martin@gmail.com'
    }

    //queremos que el valor inicial y personaInicial sean parte del estado del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
    //const[nombreVariable, funcionParaCambiar]=useState[valorInicial]
    const [contador,setContador]= useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    /**
     * funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        //funcionParaCambiar(nuevoValor)
        setContador(contador+1);
    }
    /**
     * función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre:'Pepe',
            email:'pepe@gmail.com'
        })
    }
 //representar los datos
    return (
        <div>
          <h1>Ejemplo de useState()</h1>  
          <h2>Contador: {contador}</h2>
          <h2>Datos de la Persona:</h2>
          <h3>Nombre: {persona.nombre}</h3>
          <h4>Email: {persona.email}</h4>
          {/**bloque de botones para actualizar el estado */}
          <button onClick={incrementarContador}>Incrementar Contador</button>
          <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
