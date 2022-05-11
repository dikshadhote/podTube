import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem("token");

const initialState = {
  user: { isUserLoggedin: token ? true : false },
  status: null,
};

export const signUp = createAsyncThunk("auth/signUp", async () => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });
    if (status == 201) {
      return data.encodedToken;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});
export const logIn = createAsyncThunk("auth/logIn", async () => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    if (status == 200) {
      return data.encodedToken;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
});

export default authSlice.reducer;
