import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdHome,
  MdVideoLibrary,
  MdThumbUp,
  MdHistory,
  MdPlaylistAdd,
} from "react-icons/md";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <div className="d-flex flex-column sidebar black-light-shade-bg">
          <NavLink
            className={
              location.pathname == "/"
                ? "d-flex p-2 cursor-pointer align-items-center link-active"
                : "d-flex p-2 cursor-pointer align-items-center sidebar-item"
            }
            to="/"
          >
            <MdHome className="fs-2 white-text-color mr-2" />
            <p className="white-text-color font-weight-bold">Home</p>
          </NavLink>
          <NavLink
            className={
              location.pathname == "/favourite"
                ? "d-flex p-2 cursor-pointer align-items-center link-active"
                : "d-flex p-2 cursor-pointer align-items-center sidebar-item"
            }
            to="/favourite"
          >
            <MdThumbUp className="fs-2 white-text-color mr-2" />
            <p className="white-text-color font-weight-bold">Liked Videos</p>
          </NavLink>
          <NavLink
            className={
              location.pathname == "/history"
                ? "d-flex p-2 cursor-pointer align-items-center link-active"
                : "d-flex p-2 cursor-pointer align-items-center sidebar-item"
            }
            to="/history"
          >
            <MdHistory className="fs-2 white-text-color mr-2" />
            <p className="white-text-color font-weight-bold ">History</p>
          </NavLink>
          <NavLink
            className={
              location.pathname == "/watchlater"
                ? "d-flex p-2 cursor-pointer align-items-center link-active"
                : "d-flex p-2 cursor-pointer align-items-center sidebar-item"
            }
            to="/watchlater"
          >
            <MdVideoLibrary className="fs-2 white-text-color mr-2" />
            <p className="white-text-color font-weight-bold">Watch Later</p>
          </NavLink>
          <NavLink
            className={
              location.pathname == "/playlist"
                ? "d-flex p-2 cursor-pointer align-items-center link-active"
                : "d-flex p-2 cursor-pointer align-items-center sidebar-item"
            }
            to="/playlist"
          >
            <MdPlaylistAdd className="fs-3 white-text-color mr-2" />
            <p className="white-text-color font-weight-bold">Playlist</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}
