import { ADD_TODO, TOGGLE_TODO } from "../types/todo";
let nextTodoId = 0
export const addTodo = (context) =>({
   type: ADD_TODO,
   payload: {
      id: ++nextTodoId,
      context,
   }
})
export const toggleTodo = (id) =>({
   type: TOGGLE_TODO,
   payload: {id}
})
