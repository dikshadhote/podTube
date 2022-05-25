import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  playlists: [],
  status: null,
};

export const getAllPlaylists = createAsyncThunk(
  "playlist/getAllPlaylists",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/playlists", {
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

export const addNewPlaylist = createAsyncThunk(
  "playlist/addNewPlaylist",
  async (playlist) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/playlists",
        { playlist },
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

export const deletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async (playlistId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/playlists/" + playlistId,
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

export const addVideoToPlaylist = createAsyncThunk(
  "playlist/addVideoToPlaylist",
  async ({ video, playlistId }) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/playlists/" + playlistId,
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

export const removeVideoFromPlaylist = createAsyncThunk(
  "playlist/removeVideoFromPlaylist",
  async ({ videoId, playlistId }) => {
    try {
      const { data, status } = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 200) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
);

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: {
    [getAllPlaylists.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.playlists = action.payload.playlists;
    },
    [getAllPlaylists.rejected]: (state) => {
      state.status = "failed";
    },
    [getAllPlaylists.pending]: (state) => {
      state.status = "loading";
    },
    [addNewPlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.playlists = action.payload.playlists;
    },
    [addNewPlaylist.rejected]: (state) => {
      state.status = "failed";
    },
    [addNewPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [deletePlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.playlists = action.payload.playlists;
    },
    [deletePlaylist.rejected]: (state) => {
      state.status = "failed";
    },
    [deletePlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload.playlist._id
          ? { ...playlist, videos: action.payload.playlist.videos }
          : { ...playlist }
      );
      console.log(state.playlists);
    },
    [addVideoToPlaylist.rejected]: (state) => {
      state.status = "failed";
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [removeVideoFromPlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.playlists = state.playlists.map((playlist) =>
        playlist._id === action.payload.playlist._id
          ? { ...playlist, videos: action.payload.playlist.videos }
          : { ...playlist }
      );
      console.log(state.playlists);
    },
    [removeVideoFromPlaylist.rejected]: (state) => {
      state.status = "failed";
    },
    [removeVideoFromPlaylist.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default playlistSlice.reducer;
