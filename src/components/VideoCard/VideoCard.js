import React from "react";
import { NavLink } from "react-router-dom";
export default function VideoCard({ video }) {
  const { title, thumbUrl, creator, views, duration, avatar, _id } = video;
  return (
    <div
      className="card flex-column card-vert black-dark-bg border-none"
      key={_id}
    >
      <NavLink to={`/video/${_id}`}>
        <img
          className="card-img-vert pos-relative yt-card responsive-img cursor-pointer "
          src={thumbUrl}
          alt="thumbnail"
        />
        <p className="duration  white-text-color">{duration}</p>
      </NavLink>
      <div className="card-body pt-1">
        <div className="d-flex flex-justify-space-between">
          <div className="d-flex">
            <div>
              <img src={avatar} className="avatar avatar-xs " alt="avatar" />
            </div>

            <div className="d-flex flex-column ">
              <NavLink to={`/video/${_id}`}>
                <p className="white-text-color ml-2 cursor-pointer">{title}</p>
              </NavLink>
              <small className="card-subtitle mt-1">{creator}</small>
              <p className="card-subtitle xs-font">{views + " "}views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
