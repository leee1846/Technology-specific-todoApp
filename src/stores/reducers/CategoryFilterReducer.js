import { ListItemSecondaryAction } from "@material-ui/core";
import { createSlice } from "@reduxjs/toolkit";

export const filterListReducer = createSlice({
  name: "filterList",
  initialState: [],
  reducers: {
    filterList: (state, { payload }) =>
      payload.todoList.filter((list) => {
        const date = list.dates.split("-");
        const currentYear = Number(date[0]);
        const currentMonth = Number(date[1]);
        const currentDate = Number(date[2]);

        if (payload.currentName === "Day") {
          return (
            currentYear === payload.thisYear &&
            currentMonth === payload.thisMonth &&
            currentDate === payload.thisDate
          );
        } else if (payload.currentName === "Month") {
          return (
            currentYear === payload.thisYear &&
            currentMonth === payload.thisMonth
          );
        } else if (payload.currentName === "Year") {
          return currentYear === payload.thisYear;
        } else {
          return list;
        }
      }),
  },
});

export const { filterList } = filterListReducer.actions;
