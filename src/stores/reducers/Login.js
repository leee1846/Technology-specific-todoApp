import { createSlice } from "@reduxjs/toolkit";

let initialState;

if (sessionStorage.getItem("loginToken")) {
  initialState = true;
} else {
  initialState = false;
}
console.log("여기는 로그인 리듀서" + initialState);
export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    getUser: (state, { payload: { user } }) => user,
  },
});

export const { getUser } = loginReducer.actions;
