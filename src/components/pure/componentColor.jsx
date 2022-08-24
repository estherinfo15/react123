import { dblClick } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';

let coolor;

const cuadradoProps = {
    width: '255px',
    height: '255px',
    backgroundColor: 'black',
    color: 'white',
    border: '3px solid',
    cursor: 'pointer'
};


const FormCuadrado = ({ actionStyle, propStyle }) => {
    return (
        <div className='cuadrado' id='cuadrado' style={propStyle} onClick={actionStyle} onDoubleClick={(e) => dbClick(e)}></div>
    )
}

function dbClick(e) {
    const div = document.getElementsByClassName('cuadrado')[0];
    if (document.getElementById('cuadrado')) {
        console.log(div);
    div.removeAttribute('id', 'cuadrado')
    }else{
        div.setAttribute('id','cuadrado')
    }
    
}


const ComponentColor = () => {
    const [style, setStyle] = useState(true);
    const [stop, setStop] = useState(false);

    function generarNumero(numero) {
        return (Math.random() * numero).toFixed(0);
    }

    function colorRGB() {
        coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
        return "rgb" + coolor;
    }

    function mouseOver() {
        if (document.getElementById("cuadrado")) {
            const state = document.getElementById("cuadrado").style.backgroundColor = colorRGB();
        }
    }


    const actionStyle = () => {
        //console.log('cambiar de color');
        if (document.getElementById("cuadrado")) {
            const mouse = document.getElementById("cuadrado").addEventListener("mouseover", mouseOver);
        }
    }

    let optionalStyle;
    if (style) {
        optionalStyle = <FormCuadrado propStyle={cuadradoProps} actionStyle={actionStyle}></FormCuadrado>
    }

    return (
        <div className='card'>
            {optionalStyle}
        </div>
    );
}

export default ComponentColor;
