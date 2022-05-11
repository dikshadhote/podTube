import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  isUserLoggedin: false,
  status: null,
};

export const signUp = createAsyncThunk("auth/signUp", async (user) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", user);
    if (status == 201) {
      const token = localStorage.setItem("token", data.encodedToken);
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});
export const logIn = createAsyncThunk("auth/logIn", async (user) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", user);
    if (status == 200) {
      const token = localStorage.setItem("token", data.encodedToken);
      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.isUserLoggedin = true;
    },
    [signUp.rejected]: (state) => {
      state.status = "failed";
    },
    [signUp.pending]: (state) => {
      state.status = "loading";
    },
    [logIn.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
      state.isUserLoggedin = true;
    },
    [logIn.rejected]: (state) => {
      state.status = "failed";
    },
    [logIn.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default authSlice.reducer;
