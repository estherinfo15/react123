import React,{useState} from 'react';
//Definiendo estilos en constantes

//?Estilo para usuario logueado
const loggedStyle={
    color:'white'
}

//?Estilo para usuario no logueado
const unloggedStyle={
    color:'tomato',
    frontWeight:'bold'
}

const GreetingSyled = (props) => {
    //Generamos un estado para el componente y asi controlar si el uusairo esta o no loggeado
    const [logged, setLogged] = useState(false);
    
    //funciones para devolver mensajes
    const greetingUser= () => (<p>Hola,{props.name}</p>);
    const pleaseLogin= () => (<p>Please login</p>);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? (<p>Hola, {props.name}</p>):(<p>Please login</p>)}{/**condiciones */}
            {/*<p>Hola, {props.name}</p>*/}
            <button onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingSyled;
