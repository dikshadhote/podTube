import React from "react";
import { FaPodcast } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className="nav-bar nav-yellow-shadow">
        <div className="nav-logo-section">
          <FaPodcast className="mb-1 mr-1" />
          <h3 className="mr-4 aqua-color">podTube!</h3>
        </div>
        <div className="nav-items">
          <a className="black-text-color">
            <span
              className="material-icons ml-1 aqua-color"
              title="profile details"
            >
              account_circle
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
