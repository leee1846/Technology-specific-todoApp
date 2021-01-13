import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const todos = [
  {
    id: 1,
    month: 1,
    date: 12,
    year: 2021,
    content: "공부 합시다",
    clicked: false,
  },
  {
    id: 2,
    month: 1,
    date: 12,
    year: 2021,
    content: "공부 합시다2",
    clicked: false,
  },
  {
    id: 3,
    month: 2,
    date: 12,
    year: 2021,
    content: "공부 합시다3",
    clicked: false,
  },
  {
    id: 4,
    month: 3,
    date: 12,
    year: 2021,
    content: "공부 합시다4",
    clicked: true,
  },
];

export const createList = createAction("CREATE");
export const searchList = createAction("SEARCH");
export const deleteList = createAction("DELETE");
export const toggleDeleteList = createAction("TOGGLE");

const todoReducer = createReducer(todos, {
  [createList]: (state, { payload }) => {
    state.push(payload.list);
  },
  [searchList]: (state) => {},
  [deleteList]: (state) => {},
  [toggleDeleteList]: (state, { payload }) => {},
  // state.map((list) => {
  //   if (list.clicked === true) {
  //     list.clicked = false;
  //     if (list.id === Number(payload.id)) {
  //       list.clicked = true;
  //     }
  //   }
  // }),
});

const categories = [
  {
    text: "Day",
    clicked: false,
  },
  {
    text: "Month",
    clicked: true,
  },
  {
    text: "Year",
    clicked: false,
  },
];

export const clickCategory = createAction("CLICK_CATEGORY");

const categoryReducer = createReducer(categories, {
  [clickCategory]: (state, { payload }) =>
    state.map((category) =>
      category.text === payload.name
        ? { text: category.text, clicked: true }
        : { text: category.text, clicked: false }
    ),
});

const reducer = combineReducers({ todoReducer, categoryReducer });

export const store = configureStore({ reducer });
