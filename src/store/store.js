import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reduserc/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
});