import logo from './logo.svg';
import { TodoList } from './components/todo-list';
import { AddTodo } from './components/add-todo';
import { Todo } from './components/todo';
import './App.css';

function App() {
   function orderTodos(filt='ALL') {
      let filter = filt;

   }
  return (
    <div className="App">
      <header className="App-header">
         <AddTodo orderTodos={orderTodos} />
         <TodoList/>
      </header>
    </div>
  );
}

export default App;
