import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSide } from "../context/sidebar-context";
import {
  Home,
  History,
  LikeVideos,
  WatchLater,
  Login,
  SignUp,
  Navbar,
  Sidebar,
  SidebarMini,
  SingleVideo,
  Playlist,
} from "../components";
import PrivateRoute from "./PrivateRoute";
export default function Router() {
  const { showSidebar } = useSide();
  return (
    <div className="pos-relative">
      <Navbar />
      <div>
        <div className="sidebar">
          {showSidebar ? <Sidebar /> : <SidebarMini />}
        </div>
        <div className="video-chips-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/video/:videoid" element={<SingleVideo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/history"
              element={
                <PrivateRoute navigateToPath={<History />}></PrivateRoute>
              }
            />
            <Route
              path="/favourite"
              element={
                <PrivateRoute navigateToPath={<LikeVideos />}></PrivateRoute>
              }
            />
            <Route
              path="/watchlater"
              element={
                <PrivateRoute navigateToPath={<WatchLater />}></PrivateRoute>
              }
            />
            <Route
              path="/playlist"
              element={
                <PrivateRoute navigateToPath={<Playlist />}></PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
