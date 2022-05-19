import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth/authSlice";
import videosReducer from "../reducers/video-listing/videosSlice";
import categoryReducer from "../reducers/video-listing/categorySlice";
import likeReducer from "../reducers/like/likeSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videosReducer,
    categories: categoryReducer,
    like: likeReducer,
  },
});
