import { createAction, createReducer } from "@reduxjs/toolkit";

export const todos = [
  {
    id: 1,
    dates: "2021 - 1 - 19",
    content: "공부 합시다",
    clicked: false,
    done: false,
  },
  {
    id: 2,
    dates: "2021 - 1 - 14",
    content: "공부 합시다2",
    clicked: false,
    done: false,
  },
  {
    id: 3,
    dates: "2021 - 1 - 13",
    content: "공부 합시다3",
    clicked: false,
    done: false,
  },
  {
    id: 4,
    dates: "2020 - 11 - 15",
    content: "공부 합시다4",
    clicked: false,
    done: false,
  },
];

export const createList = createAction("CREATE_LIST");
export const deleteList = createAction("DELETE_LIST");
export const toggleDoneList = createAction("TOGGLE_DONE");
export const toggleDeleteList = createAction("TOGGLE_DELETE");

export const todoReducer = createReducer(todos, {
  [createList]: (state, { payload }) => [...state, payload.list],
  [deleteList]: (state, { payload }) =>
    state.filter((list) => list.id !== payload.id),
  [toggleDeleteList]: (state, { payload }) => {
    state.map((list) => {
      if (!list.clicked) {
        if (list.id === Number(payload.id)) {
          return (list.clicked = true);
        }
      } else {
        return (list.clicked = !list.clicked);
      }
    });
  },
  [toggleDoneList]: (state, { payload }) => {
    state.map((list) => {
      if (list.id === Number(payload.id)) {
        list.done = !list.done;
      }
    });
  },
});
