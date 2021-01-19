import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  todoReducer,
});

export const store = configureStore({ reducer });
