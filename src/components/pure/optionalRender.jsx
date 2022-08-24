import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

//?Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
};

//?Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'Red',
    color: 'white',
    fontWeight: 'bold'
}

//Login/Logout buttons componentes que guardan elementos
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={ propStyle } onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//(Expresion True) && expresion=>se renderiza la expresion
//(Expresion False) && expresion=>No se renderiza la expresion




const OptionalRender = () => {
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    //const updateAccess=()=>{
    //   setAccess(!access);
    //}

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;
    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>//<button onClick={updateAccess}>Logout</button> variales asociadas a un elemento
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>//<button onClick={updateAccess}>Login</button>
    }

    //unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/**Optional Button, RENDERIZA CONDICIONAL*/}
            {optionalButton}
            {/**NMessages sin leer, solo se va a renderizar si la primera condición se cumple */}
            {/*{nMessages >0 &&nMessages===1 && <p>You have {nMessages} new messages...</p>}
        {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
        {nMessages === 0 && <p>There are not new messages...</p>}*}
        {/**Renderizado condicional con operador ternario */}
            {access ? (<div>
                {nMessages > 0 ?
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> :
                    <p>There are not new messages...</p>}
                <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new Message'}</button>
            </div>) : null}

        </div>
    );
}

export default OptionalRender;
