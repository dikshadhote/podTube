import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  videos: [],
  status: null,
};

export const getVideos = createAsyncThunk("videos/getVideos", async () => {
  try {
    const { data, status } = await axios.get("/api/videos");

    if (status == 200) {
      return data.videos;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: {
    [getVideos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.videos = action.payload;
    },
    [getVideos.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getVideos.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export default videosSlice.reducer;
