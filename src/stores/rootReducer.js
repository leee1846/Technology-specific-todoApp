import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/CategoryReducer";

const reducer = combineReducers({ categoryReducer: categoryReducer.reducer });

const store = configureStore({ reducer });

export default store;
