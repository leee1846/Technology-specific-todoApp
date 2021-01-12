import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const todos = [
  {
    id: 1,
    month: 1,
    date: 12,
    year: 2021,
    content: "공부 합시다",
  },
  {
    id: 2,
    month: 1,
    date: 12,
    year: 2021,
    content: "공부 합시다2",
  },
  {
    id: 3,
    month: 2,
    date: 12,
    year: 2021,
    content: "공부 합시다3",
  },
  {
    id: 4,
    month: 3,
    date: 12,
    year: 2021,
    content: "공부 합시다4",
  },
];

export const createList = createAction("CREATE");
export const searchList = createAction("SEARCH");
export const deleteList = createAction("DELETE");

const todoReducer = createReducer(todos, {
  [createList]: (state) => {},
  [searchList]: (state) => {},
  [deleteList]: (state) => {},
});

export const store = configureStore({ reducer: todoReducer });
