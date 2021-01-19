import { createAction, createReducer } from "@reduxjs/toolkit";

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

export const clickCategory = createAction("CLICK_CATEGORY");

export const categoryReducer = createReducer(categories, {
  [clickCategory]: (state, { payload }) =>
    state.map((category) =>
      category.text === payload.name
        ? { text: category.text, clicked: true }
        : { text: category.text, clicked: false }
    ),
});
