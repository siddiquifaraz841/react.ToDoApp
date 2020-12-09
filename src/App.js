import './App.css';
import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import ToDoList from './components/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
     <ToDoList></ToDoList>
    </div>
  );
}

export default App;
