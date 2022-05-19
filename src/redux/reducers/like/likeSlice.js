import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  likes: [],
  status: null,
};

export const getLikedVideos = createAsyncThunk(
  "likes/getLikedVideos",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/likes");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addVideoToLikes = createAsyncThunk(
  "likes/addVideoToLikes",
  async (video) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/likes",
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

export const removeVideosFromLikes = createAsyncThunk(
  "likes/removeVideosFromLikes",
  async (videoId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/likes/" + videoId,
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
export const likesSlice = createSlice({
  name: "likes",
  initialState,
  extraReducers: {
    [getLikedVideos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.likes;
    },
    [getLikedVideos.rejected]: (state) => {
      state.status = "failed";
    },
    [getLikedVideos.pending]: (state) => {
      state.status = "loading";
    },
    [addVideoToLikes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.likes = action.payload.likes;
    },
    [addVideoToLikes.rejected]: (state) => {
      state.status = "failed";
    },
    [addVideoToLikes.pending]: (state) => {
      state.status = "loading";
    },
    [removeVideosFromLikes.fulfilled]: (state, action) => {
      state.status = "succeeded";
    },
    [removeVideosFromLikes.rejected]: (state) => {
      state.status = "failed";
    },
    [removeVideosFromLikes.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default likesSlice.reducer;
