/**Ejemplo de uso de metodo componentDidUpdate en componente clase 
 * y uso de hook en componente funcional
 */

import React, { Component,useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estatus')
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}



const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estatus')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}





