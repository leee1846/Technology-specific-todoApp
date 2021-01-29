import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Day",
    clicked: false,
  },
  {
    id: 2,
    name: "Month",
    clicked: false,
  },
  {
    id: 3,
    name: "Year",
    clicked: false,
  },
  {
    id: 4,
    name: "All",
    clicked: true,
  },
];

export const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryStyler: (state, { payload }) =>
      state.map((list) => {
        return list.name === payload.currentName
          ? { ...list, clicked: true }
          : { ...list, clicked: false };
      }),
  },
});

export const { categoryStyler } = categoryReducer.actions;
