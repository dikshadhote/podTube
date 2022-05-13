import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth/authSlice";
import videosReducer from "../reducers/video-listing/videosSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videosReducer,
  },
});
