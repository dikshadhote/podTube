import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdHome,
  MdVideoLibrary,
  MdThumbUp,
  MdHistory,
  MdPlaylistAdd,
} from "react-icons/md";

export default function SidebarMini() {
  const location = useLocation();
  return (
    <div className="d-flex flex-column sidebar-mini black-light-shade-bg">
      <NavLink
        className={
          location.pathname == "/"
            ? "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center link-active"
            : "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center sidebar-item"
        }
        to="/"
      >
        <MdHome className="fs-3 white-text-color " />
        <small className="white-text-color font-weight-bold">Home</small>
      </NavLink>
      <NavLink
        className={
          location.pathname == "/favourite"
            ? "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center link-active"
            : "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center sidebar-item"
        }
        to="/favourite"
      >
        <MdThumbUp className="fs-3 white-text-color " />
        <small className="white-text-color font-weight-bold word-wrap ml-1">
          Liked Videos
        </small>
      </NavLink>
      <NavLink
        className={
          location.pathname == "/history"
            ? "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center link-active"
            : "d-flex flex-column p-2 cursor-pointer align-items-center flex-justify-center sidebar-item"
        }
        to="/history"
      >
        <MdHistory className="fs-3 white-text-color " />
        <small className="white-text-color font-weight-bold ">History</small>
      </NavLink>
      <NavLink
        className={
          location.pathname == "/watchlater"
            ? "d-flex flex-column p-2 cursor-pointer align-items-center flex-justify-center link-active"
            : "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center sidebar-item"
        }
        to="/watchlater"
      >
        <MdVideoLibrary className="fs-3 white-text-color" />
        <small className="white-text-color font-weight-bold word-wrap ml-1">
          Watch Later
        </small>
      </NavLink>
      <NavLink
        className={
          location.pathname == "/playlist"
            ? "d-flex flex-column p-2 cursor-pointer align-items-center flex-justify-center link-active"
            : "d-flex  flex-column p-2 cursor-pointer align-items-center flex-justify-center sidebar-item"
        }
        to="/playlist"
      >
        <MdPlaylistAdd className="fs-3 white-text-color " />
        <p className="white-text-color font-weight-bold">Playlist</p>
      </NavLink>
    </div>
  );
}
