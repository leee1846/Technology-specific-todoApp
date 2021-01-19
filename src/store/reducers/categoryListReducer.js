import { createAction, createReducer } from "@reduxjs/toolkit";
import { todos } from "./todoReducer";

let categoryClickTodoList = [];

export const searchList = createAction("SEARCH_LIST");
export const categoryList = createAction("CATEGORY_LIST");

const today = new Date();

let splitDates = null;

const filterListByCategory = (categoryName, state) => {
  const filteredDateList = todos.filter((list) => {
    splitDates = list.dates.split("-");
    return (
      Number(splitDates[0]) === today.getFullYear() &&
      Number(splitDates[1]) === today.getMonth() + 1 &&
      Number(splitDates[2]) === today.getDate()
    );
  });
  const filteredMonthList = todos.filter((list) => {
    splitDates = list.dates.split("-");
    return (
      Number(splitDates[0]) === today.getFullYear() &&
      Number(splitDates[1]) === today.getMonth() + 1
    );
  });
  const filteredYearList = todos.filter((list) => {
    splitDates = list.dates.split("-");
    return Number(splitDates[0]) === today.getFullYear();
  });

  if ("Day" === categoryName) {
    categoryClickTodoList = [...filteredDateList];
    return categoryClickTodoList;
  } else if ("Month" === categoryName) {
    categoryClickTodoList = [...filteredMonthList];
    return categoryClickTodoList;
  } else if ("Year" === categoryName) {
    categoryClickTodoList = [...filteredYearList];
    return categoryClickTodoList;
  }
};

export const categoryClickListReducer = createReducer(categoryClickTodoList, {
  [categoryList]: (state, { payload }) => {
    if (payload.name === "Day") {
      return filterListByCategory("Day", state);
    } else if (payload.name === "Month") {
      return filterListByCategory("Month", state);
    } else if (payload.name === "Year") {
      return filterListByCategory("Year", state);
    }
  },
  [searchList]: (state, { payload }) => {
    const newState = todos.filter((list) => list.content === payload.content);
    if (newState.length > 0) {
      return newState;
    } else {
      return state;
    }
  },
});
