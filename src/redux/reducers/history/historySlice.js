import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  history: [],
  status: null,
};

export const getHistoryVideos = createAsyncThunk(
  "history/getHistoryVideos",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/history", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addVideoToHistory = createAsyncThunk(
  "history/addVideoToHistory",
  async (video) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/history",
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

export const removeVideoFromHistory = createAsyncThunk(
  "history/removeVideoFromHistory",
  async (videoId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/history/" + videoId,
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
export const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [getHistoryVideos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.history = action.payload.history;
    },
    [getHistoryVideos.rejected]: (state) => {
      state.status = "failed";
    },
    [getHistoryVideos.pending]: (state) => {
      state.status = "loading";
    },
    [addVideoToHistory.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.history = action.payload.history;
    },
    [addVideoToHistory.rejected]: (state) => {
      state.status = "failed";
    },
    [addVideoToHistory.pending]: (state) => {
      state.status = "loading";
    },
    [removeVideoFromHistory.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.history = action.payload.history;
    },
    [removeVideoFromHistory.rejected]: (state) => {
      state.status = "failed";
    },
    [removeVideoFromHistory.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default historySlice.reducer;
