import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//thunk
export const getTodos = createAsyncThunk(
  "GET-todos",
  async ({ currentName, thisYear, thisMonth, thisDate }) => {
    try {
      const response = await axios.get("http://localhost:8000/todos");

      return response.data.filter((list) => {
        const date = list.dates.split("-");
        const currentYear = Number(date[0]);
        const currentMonth = Number(date[1]);
        const currentDate = Number(date[2]);

        if (currentName === "Day") {
          return (
            currentYear === thisYear &&
            currentMonth === thisMonth &&
            currentDate === thisDate
          );
        } else if (currentName === "Month") {
          return currentYear === thisYear && currentMonth === thisMonth;
        } else if (currentName === "Year") {
          return currentYear === thisYear;
        } else {
          return list;
        }
      });
    } catch (e) {
      console.log(e, "get 에러");
    }
  }
);

export const findTodo = createAsyncThunk(
  "FIND_TODO",
  async ({ inputContent }) => {
    try {
      const response = await axios.get("http://localhost:8000/todos");

      return response.data.filter((list) => {
        return list.content === inputContent;
      });
    } catch (e) {
      console.log(e, "search 에러");
    }
  }
);

export const addTodo = createAsyncThunk("ADD_TODO", async ({ newList }) => {
  try {
    const response = await axios.post("http://localhost:8000/todos", newList);
    return response.data;
  } catch (e) {
    console.log(e, "add 에러");
  }
});

export const deleteTodo = createAsyncThunk("DELETE_TODO", async ({ id }) => {
  try {
    const response = await axios.delete(`http://localhost:8000/todos/${id}`);
    return id;
  } catch (e) {
    console.log(e, "delete 에러");
  }
});

export const doneTodo = createAsyncThunk("DONE_TODO", async ({ id, done }) => {
  try {
    const response = await axios.put(`http://localhost:8000/todos/${id}`, done);
    return { id, done };
  } catch (e) {
    console.log(e, "done 에러");
  }
});

//reducer
export const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  extraReducers: {
    [getTodos.fulfilled]: (state, { payload }) => [...payload],
    [findTodo.fulfilled]: (state, { payload }) => [...payload],
    [addTodo.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteTodo.fulfilled]: (state, { payload }) =>
      state.filter((list) => list.id !== payload),
    [doneTodo.fulfilled]: (state, { payload }) =>
      state.map((list) =>
        list.id === payload.id ? { ...list, done: !list.done } : list
      ),
  },
});
