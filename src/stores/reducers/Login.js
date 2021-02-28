import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserName = createAsyncThunk(
  "GET_USERNAME",
  async ({ user }) => {
    try {
      const response = await axios.put(`http://localhost:5000/user/${1}`, user);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState = {
  name: null,
  id: 1,
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [getUserName.fulfilled]: (state, { payload }) => {
      return { name: payload.name, id: 1 };
    },
  },
});
