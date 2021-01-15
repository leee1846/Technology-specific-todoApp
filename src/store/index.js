import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const todos = [
  {
    id: 1,
    dates: "2021 - 12 - 15",
    content: "공부 합시다",
    clicked: false,
    done: false,
  },
  {
    id: 2,
    dates: "2021 - 01 - 15",
    content: "공부 합시다2",
    clicked: false,
    done: false,
  },
  {
    id: 3,
    dates: "2021 - 01 - 14",
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

export const createList = createAction("CREATE_LIST");
export const searchList = createAction("SEARCH_LIST");
export const deleteList = createAction("DELETE_LIST");
export const toggleDeleteList = createAction("TOGGLE_DELETE");
export const toggleDoneList = createAction("TOGGLE_DONE");
export const categoryList = createAction("CATEGORY_LIST");

export const clickCategory = createAction("CLICK_CATEGORY");

const today = new Date();

let splitDates = null;

const filterListByCategory = (categoryName, state) => {
  const filteredDateList = state.filter((list) => {
    splitDates = list.dates.split("-");
    return (
      Number(splitDates[0]) === today.getFullYear() &&
      Number(splitDates[1]) === today.getMonth() + 1 &&
      Number(splitDates[2]) === today.getDate()
    );
  });
  const filteredMonthList = state.filter((list) => {
    splitDates = list.dates.split("-");
    return (
      Number(splitDates[0]) === today.getFullYear() &&
      Number(splitDates[1]) === today.getMonth() + 1
    );
  });
  const filteredYearList = state.filter((list) => {
    splitDates = list.dates.split("-");
    return Number(splitDates[0]) === today.getFullYear();
  });

  if ("Day" === categoryName) {
    return filteredDateList;
  } else if ("Month" === categoryName) {
    return filteredMonthList;
  } else if ("Year" === categoryName) {
    return filteredYearList;
  }
};

const todoReducer = createReducer(todos, {
  [createList]: (state, { payload }) => {
    state.push(payload.list);
  },
  [searchList]: (state) => {},
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
  [categoryList]: (state, { payload }) => {
    if (payload.name === "Day") {
      return filterListByCategory("Day", state);
    } else if (payload.name === "Month") {
      return filterListByCategory("Month", state);
    } else if (payload.name === "Year") {
      return filterListByCategory("Year", state);
    }
  },
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
