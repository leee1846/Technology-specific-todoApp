import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("GET-todos", async () => {
  try {
    const response = await axios.get("http://localhost:8000/todos");
    return response.data;
  } catch (e) {
    console.log(e, "error");
  }
});

export const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  extraReducers: {
    [getTodos.fulfilled]: (state, { payload }) => [...payload],
  },
});
