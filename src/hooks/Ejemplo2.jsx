/**
 * Ejemplo de uso de:
 *  useState()
 * useRef(): referenciar elementos dentro de la vista
 * useEffect(): nos sirve para controlar los cambios en la vista
 */

import React,{useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {
    //vamos a crear dos contadores distintos, cada uno en un estado diferente
    //useState
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    //vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente(vista HTML)
    const miRef=useRef();

    function incrementar1(){
        setContador1(contador1+1);
    }
    function incrementar2(){
        setContador2(contador2+1);
    }
    /**
     * Trabajando con useEffect()
     * caso1: ejecutar siempre un snippet de codigo: cada vez que haya un cambio en el estado
     * del componente se ejecuta aquello que este dentro del useEffect()
     
    useEffect(() => {
        console.log('cambio en el estado del componente');
        console.log('mostrando referencia a elemento del DOM:');
        console.log(miRef);
    });
*/

/**
 * Caso 2: Ejecutar  solo cuando cambie el contador 1
 * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
 * En caso de que cambie contador2, no habra ejecución
 
useEffect(() => {
    console.log('cambio en el contador1');
    console.log('mostrando referencia a elemento del DOM:');
    console.log(miRef);
}, [contador1]);
*/

/**
 * Caso 3: Ejecutar  solo cuando cambie el contador 1 o contador2
 * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
 * En caso de que cambie contador2, se ejecuta lo que diga el useEffect()
 */
 useEffect(() => {
    console.log('cambio en el contador1/contador2');
    console.log('mostrando referencia a elemento del DOM:');
    console.log(miRef);
}, [contador1,contador2]);




    return(
        <div>
        <h1>Ejemplo de useRef() y useEffect()</h1>  
          <h2>Contador1: {contador1}</h2>
          <h3>Contador2: {contador2}</h3>
          {/**Elemento referenciado */}
          <h4 ref={miRef}>
          Ejemplo de elemento referenciado
          </h4>
          {/**Botones para cambiar los contadores*/}
          <div>
          <button onClick={incrementar1}>Incrementar contador 1</button>
          <button onClick={incrementar2}>Incrementar contador 2</button>
          </div>
          
        </div>
    )
}

export default Ejemplo2;
