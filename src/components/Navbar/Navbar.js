import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSide } from "../../context/sidebar-context";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth/authSlice";
import { useSearch } from "../../context/search-context";
export default function Navbar() {
  const { toggleSidebar } = useSide();
  const logoutDispatch = useDispatch();
  const { setSearchValue, searchValue, filteredList, searchByVideoTitle } =
    useSearch();

  const navigateTo = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  const logOutHandler = () => {
    localStorage.removeItem("token");
    logoutDispatch(logout());
    //redirect to login
    navigateTo("/login", { replace: true });
  };

  const searchTextHandler = (input) => {
    setTimeout(() => {
      setSearchValue(input);
    }, 2000);
  };

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
            <input
              type="text"
              placeholder="Search here.."
              id="search"
              onChange={(e) => searchTextHandler(e.target.value)}
            />
            <button className="d-flex align-items-center border-none cursor-pointer">
              <FiSearch
                size={20}
                onClick={() => searchByVideoTitle(searchValue, filteredList)}
              />
            </button>
          </div>
        </div>
        <div className="nav-items">
          {isUserLoggedIn ? (
            <span
              className="blue-yt-text d-flex align-items-center cursor-pointer"
              onClick={() => logOutHandler()}
            >
              <p className="ml-1">Log out</p>
            </span>
          ) : (
            <Link
              className="blue-yt-text d-flex align-items-center cursor-pointer"
              to="/login"
            >
              <span
                className="material-icons ml-1 blue-yt-text"
                title="Sign in"
              >
                account_circle
              </span>
              <p className="ml-1">Login in</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
