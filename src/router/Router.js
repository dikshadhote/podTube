import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  History,
  LikeVideos,
  WatchLater,
  Login,
  SignUp,
} from "../components";
import PrivateRoute from "./PrivateRoute";
export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route exact path="/history" element={<History />} />
      <Route path="/favourite" element={<LikeVideos />} />
      <Route path="/watchlater" element={<WatchLater />} />
    </Routes>
  );
}
