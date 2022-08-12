import React,{useState} from 'react';

const Clock = () => {
    const contador=0;
    const fecha = new Date();
    const personaInicial={
        nombre:'Martín',
        apellidos:'San José'
    };

    const [edad, setEdad] = useState(contador);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarEdad(){
        setEdad(edad+1);
    }

    return (
        <div>
            <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
            <h3>Nombre: {persona.nombre} {persona.apellidos}</h3>
            <h2>Edad: {edad}</h2>
            <button onClick={incrementarEdad}>Incrementar Edad</button>
        </div>
    );
}

export default Clock;
