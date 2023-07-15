import { useSelector } from "react-redux";
import   {todosSelector,filterSelector} from "../../store/selectors/todo";
import { Todo } from "../todo";

export const TodoList = () => {
  const todos_arr = useSelector(todosSelector);
  const typeFilter = useSelector(filterSelector);
  let todos
  

   console.log(typeFilter);
   if (typeFilter.typeFilter === 'ALL') {
      console.log('ALL');
      todos = todos_arr
   }else if (typeFilter.typeFilter === 'COMPLETED') {
      console.log('COMPLETED');
      todos = todos_arr.filter((item) => !item.completed)
   }else if (typeFilter.typeFilter === 'NOT_COMPLETED') {
      console.log('NOT_COMPLETED');
      todos = todos_arr.filter((item) => item.completed)
   }else{
      console.log('else');
      todos = todos_arr
   }
  
  return (
    <ul className="todo-list">
      {todos.map((todo) => (<Todo key={todo.id} todo={todo} />))}
    </ul>
  );
};