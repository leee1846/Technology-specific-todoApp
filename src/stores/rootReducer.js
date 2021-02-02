import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/CategoryReducer";
import { todoReducer } from "./reducers/TodosReducer";

const reducer = combineReducers({
  categoryReducer: categoryReducer.reducer,
  todoReducer: todoReducer.reducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
