import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSide } from "../../context/sidebar-context";
export default function Navbar() {
  const { toggleSidebar } = useSide();
  return (
    <div>
      <div className="nav-bar black-light-shade-bg">
        <div className="nav-logo-section ">
          <GiHamburgerMenu
            className="white-text-color ml-2 fs-2 mr-5 cursor-pointer"
            onClick={() => toggleSidebar()}
          />
          <div className="white-background size-yt-triangle pos-relative">
            <AiFillYoutube className="mr-1 red-yt-color fs-4 pos-abs-logo" />
          </div>
          <p className="mr-4 ml-2 white-text-color brand-name">PodTube</p>
        </div>
        <div>
          <div className="border-none search-box d-flex border-radius">
            <input type="text" placeholder="Search" id="search" />
            <button className="d-flex align-items-center border-none cursor-pointer">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
        <div className="nav-items">
          <a className="blue-yt-text d-flex align-items-center cursor-pointer ">
            <span className="material-icons ml-1 blue-yt-text" title="Sign in">
              account_circle
            </span>
            <p className="ml-1">Sign in</p>
          </a>
        </div>
      </div>
    </div>
  );
}
