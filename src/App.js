import './App.css';
import ClientListComponent from './components/container/client_list';
//import Father from './components/container/father';
//import ContactListComponent from './components/container/contact_list';
//import GreetingSyled from './components/pure/greetingSyled';
//import Clock from './hooks/clock';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';
//import TaskListComponent from './components/container/task_list';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*componente propio greeting.jsx*/}
        {/*<Greeting name="Martin"></Greeting>*/}
        {/*componente de estado funcional */}
        {/*<GreetingF name="Martin"></GreetingF>*/}
        {/*componente de listado de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<ContactListComponent></ContactListComponent>*/}
        {/*ejemplos de uso de HOOKS */}
        {/*<Ejemplo1></Ejemplo1>*}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre='Martin'>
          <h3>
          {/**Todo lo que hay aqui, es tratado como props.children 
            Contenido del props.children*/}
          {/*</h3>
        </Ejemplo4>*/}
        {/*<GreetingSyled name='Martín'></GreetingSyled>*/}
        {/*<Clock></Clock>*/}
        {/*<Father></Father>*/}
        <ClientListComponent></ClientListComponent>
      {/*</header>*/}
    </div>
  );
}

export default App;
