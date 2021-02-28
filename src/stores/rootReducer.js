import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/CategoryReducer";
import { todoReducer } from "./reducers/TodosReducer";
import logger from "redux-logger";
import { loginReducer } from "./reducers/Login";

const reducer = combineReducers({
  categoryReducer: categoryReducer.reducer,
  todoReducer: todoReducer.reducer,
  loginReducer: loginReducer.reducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
