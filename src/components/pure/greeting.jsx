import React, { Component } from 'react';
import PropTypes from 'prop-types'; /*los propTypes sirven para especificar el tipo de dato que estamos pasando*/

/*clases y componentes con mayuscula al inciciar
los componentes de tipo clase tienen constructores, funciones o metodos propios
los componentes de funciones son programacion funcional y siempre deben devolver algo en el return
se pueden usar los dos
*/
class Greeting extends Component {
    constructor(props){
      super(props);/*informacion que yo voy a pasar con atributos */
      this.state={    /*informacion privada de la logica que se va a hacer, propiedades de la clase */
      age:29
      }
    }
    render() {
        return (
            <div>
                <h1>Hola{this.props.name}</h1>{/*de las propiedades que voy a recibir, voy a pintar un dato*/}
                <h2>
                    Tu edad es de: {this.state.age}{/*accedemos a la edad */}
                </h2>
                <div>
                    <button onClick={this.birthday}>{/*boton que manda llamar a un nuevo evento que nos va a generar uan edad+1 */}
                    Cumplir años
                    </button>
                </div>
            </div>
        );
    }
/*evento*/
    birthday=()=>{
        this.setState((prevState)=>(
                {
                    age:prevState.age+1
                }
        ))
    }
}


Greeting.propTypes = {/*especificamos los tipos de datos */
   name:PropTypes.string,
};


export default Greeting;
