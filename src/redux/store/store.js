import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth/authSlice";
import videosReducer from "../reducers/video-listing/videosSlice";
import categoryReducer from "../reducers/video-listing/categorySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videosReducer,
    categories: categoryReducer,
  },
});
