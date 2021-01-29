import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/CategoryReducer";
import { todoReducer } from "./reducers/TodosReducer";
import { filterListReducer } from "./reducers/CategoryFilterReducer";

const reducer = combineReducers({
  categoryReducer: categoryReducer.reducer,
  todoReducer: todoReducer.reducer,
  filterListReducer: filterListReducer.reducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
