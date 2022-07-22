import './App.css';
import ContactListComponent from './components/container/contact_list';
//import TaskListComponent from './components/container/task_list';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*componente propio greeting.jsx*/}
        {/*<Greeting name="Martin"></Greeting>*/}
        {/*componente de estado funcional */}
        {/*<GreetingF name="Martin"></GreetingF>*/}
        {/*componente de listado de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
