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
} from "../components";
import PrivateRoute from "./PrivateRoute";
export default function Router() {
  const { showSidebar } = useSide();
  return (
    <>
      <Navbar />
      <div className={showSidebar ? "d-grid-sidebar " : "d-grid-sidebar-mini"}>
        {showSidebar ? <Sidebar /> : <SidebarMini />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/history"
            element={<PrivateRoute navigateToPath={<History />}></PrivateRoute>}
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
        </Routes>
      </div>
    </>
  );
}
