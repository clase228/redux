import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo,orderTodo} from '../../store/actions/creators/todo';

export const AddTodo = () => {
  const [value, setValue] = useState("");
  
  const dispatch = useDispatch();
  
  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  
  const handleAddTodo = () => {
     dispatch(addTodo(value));
     setValue("");
   }
   const [order, setOrder] = useState("");
  const handleOrederTodo = (evt) => {
   setOrder(evt.target.value);
   setValue("");
   dispatch(orderTodo(order));
}

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className="add-todo" onClick={handleAddTodo}>Добавить</button>
      <select  onChange={handleOrederTodo}>
         <option value="ALL">Все </option>
         <option value="COMPLETED">Завершенные </option>
         <option value="NOT_COMPLETED">Не завершенные </option>
      </select>
    </div>
  );
};