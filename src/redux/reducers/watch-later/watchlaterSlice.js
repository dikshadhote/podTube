import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  watchlater: [],
  status: null,
};

export const getWatchlaterVideos = createAsyncThunk(
  "watchlater/getWatchlaterVideos",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/watchlater");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addVideoToWatchlater = createAsyncThunk(
  "watchlater/addVideoToWatchlater",
  async (video) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 201) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const removeVideoFromWatchlater = createAsyncThunk(
  "watchlater/removeVideoFromWatchlater",
  async (videoId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/watchlater/" + videoId,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const watchlaterSlice = createSlice({
  name: "watchlater",
  initialState,
  extraReducers: {
    [getWatchlaterVideos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.watchlater;
    },
    [getWatchlaterVideos.rejected]: (state) => {
      state.status = "failed";
    },
    [getWatchlaterVideos.pending]: (state) => {
      state.status = "loading";
    },
    [addVideoToWatchlater.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.watchlater;
    },
    [addVideoToWatchlater.rejected]: (state) => {
      state.status = "failed";
    },
    [addVideoToWatchlater.pending]: (state) => {
      state.status = "loading";
    },
    [removeVideoFromWatchlater.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.watchlater;
    },
    [removeVideoFromWatchlater.rejected]: (state) => {
      state.status = "failed";
    },
    [removeVideoFromWatchlater.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default watchlaterSlice.reducer;
