import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OptionPanel from "../OptionPanel/OptionPanel";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
export default function VideoCard({ video }) {
  const { title, thumbUrl, creator, views, duration, avatar, _id } = video;
  const [showPanel, setShowPanel] = useState(false);
  const [saveId, showSaveid] = useState(false);
  const likesDispatch = useDispatch();
  const handleShowPanel = (inputId) => {
    showSaveid(inputId);
    setShowPanel(true);
  };

  return (
    <div className="card flex-column card-vert black-dark-bg border-none">
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
          </div>
          <div className="d-flex flex-column ">
            <NavLink to={`/video/${_id}`}>
              <p className="white-text-color ml-2 cursor-pointer">{title}</p>
            </NavLink>
            <small className="card-subtitle mt-1">{creator}</small>
            <p className="card-subtitle xs-font">{views + " "}views</p>
          </div>
          <div className="pos-relative">
            <BsThreeDotsVertical
              className="white-text-color fs-2 cursor-pointer "
              onClick={() => handleShowPanel(_id)}
              key={_id}
            />
            {showPanel && saveId == _id && <OptionPanel video={video} />}
          </div>
        </div>
      </div>
    </div>
  );
}
