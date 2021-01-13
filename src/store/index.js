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
    done: false,
  },
  {
    id: 2,
    month: 1,
    date: 12,
    year: 2021,
    content: "공부 합시다2",
    clicked: false,
    done: false,
  },
  {
    id: 3,
    month: 2,
    date: 12,
    year: 2021,
    content: "공부 합시다3",
    clicked: false,
    done: false,
  },
  {
    id: 4,
    month: 3,
    date: 12,
    year: 2021,
    content: "공부 합시다4",
    clicked: false,
    done: false,
  },
];

const categories = [
  {
    text: "Day",
    clicked: true,
  },
  {
    text: "Month",
    clicked: false,
  },
  {
    text: "Year",
    clicked: false,
  },
];

export const createList = createAction("CREATE");
export const searchList = createAction("SEARCH");
export const deleteList = createAction("DELETE");
export const toggleDeleteList = createAction("TOGGLE_DELETE");
export const toggleDoneList = createAction("TOGGLE_DONE");
export const clickCategory = createAction("CLICK_CATEGORY");

const todoReducer = createReducer(todos, {
  [createList]: (state, { payload }) => {
    if (payload.content) {
      state.push(payload.list);
    } else {
      window.alert("내용을 입력하여 주세요.");
    }
  },

  [searchList]: (state) => {},

  [deleteList]: (state, { payload }) =>
    state.filter((list) => list.id !== payload.id),

  [toggleDeleteList]: (state, { payload }) =>
    state.forEach((list) => {
      if (!list.clicked) {
        if (list.id === Number(payload.id)) {
          list.clicked = true;
        }
      } else {
        list.clicked = !list.clicked;
      }
    }),

  [toggleDoneList]: (state, { payload }) =>
    state.forEach((list) => {
      if (list.id === Number(payload.id)) {
        list.done = !list.done;
      }
    }),
});

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
