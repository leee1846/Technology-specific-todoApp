import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//thunk
export const getTodos = createAsyncThunk("GET-todos", async () => {
  try {
    const response = await axios.get("http://localhost:8000/todos");
    return response.data;
  } catch (e) {
    console.log(e, "에러");
  }
});

export const addTodo = createAsyncThunk("ADD_TODO", async ({ newList }) => {
  try {
    const response = await axios.post("http://localhost:8000/todos", newList);
    return response.data;
  } catch (e) {
    console.log(e, "에러");
  }
});

//reducer
export const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  extraReducers: {
    [getTodos.fulfilled]: (state, { payload }) => [...payload],
    [addTodo.fulfilled]: (state, { payload }) => [...state, payload],
  },
});
