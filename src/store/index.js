import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { categoryReducer } from "./reducers/categoryStyleReducer";
// import { categoryClickListReducer } from "./reducers/categoryListReducer";

const reducer = combineReducers({
  todoReducer,
  categoryReducer,
  // categoryClickListReducer,
});

export const store = configureStore({ reducer });
