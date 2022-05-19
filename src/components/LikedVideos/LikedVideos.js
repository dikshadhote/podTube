import React, { useEffect, useState } from "react";
import {
  getLikedVideos,
  removeVideosFromLikes,
} from "../../redux/reducers/like/likeSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVideoLibrary, MdThumbUp, MdThumbDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
export default function LikedVideos() {
  const likesDispatch = useDispatch();
  const [showPanel, setShowPanel] = useState(false);
  const [saveId, showSaveid] = useState(false);
  useEffect(() => {
    likesDispatch(getLikedVideos());
  }, [likesDispatch]);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  const likedVideos = useSelector((state) => state.like.likes);
  console.log(likedVideos);
  const handleShowPanel = (inputId) => {
    showSaveid(inputId);
    const videoPresent = likedVideos.some((video) => video._id === inputId);

    if (videoPresent) {
      setShowPanel(true);
    }
  };

  const removefromLike = async (videoId) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await likesDispatch(removeVideosFromLikes(videoId)).unwrap();
    return toast.success("Removed from like videos!");
  };
  return (
    <div>
      {likedVideos.length > 0 ? (
        <div className="d-flex flex-wrap">
          {likedVideos.map((video) => {
            const { title, thumbUrl, creator, views, duration, avatar, _id } =
              video;
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
                        <img
                          src={avatar}
                          className="avatar avatar-xs "
                          alt="avatar"
                        />
                      </div>

                      <div className="d-flex flex-column ">
                        <NavLink to={`/video/${_id}`}>
                          <p className="white-text-color ml-2 cursor-pointer">
                            {title}
                          </p>
                        </NavLink>
                        <small className="card-subtitle mt-1">{creator}</small>
                        <p className="card-subtitle xs-font">
                          {views + " "}views
                        </p>
                      </div>
                    </div>
                    <div className="pos-relative">
                      <BsThreeDotsVertical
                        className="white-text-color fs-2 cursor-pointer "
                        onClick={() => handleShowPanel(_id)}
                      />
                      {showPanel && saveId == _id && (
                        <div className="popup-threedot d-flex flex-column">
                          {likedVideos.some((video) => video._id === _id) ? (
                            <div
                              className="d-flex mb-1 cursor-pointer"
                              onClick={() => {
                                removefromLike(_id);
                              }}
                            >
                              <MdThumbDown className="fs-2 white-text-color mr-2" />
                              <p className="white-text-color font-weight-bold">
                                Remove from like
                              </p>
                            </div>
                          ) : (
                            <div
                              className="d-flex mb-1 cursor-pointer"
                              onClick={() => {
                                addVideoToLike(video);
                              }}
                            >
                              <MdThumbUp className="fs-2 white-text-color mr-2" />
                              <p className="white-text-color font-weight-bold">
                                Add to like
                              </p>
                            </div>
                          )}

                          <div className="d-flex mb-1">
                            <MdVideoLibrary className="fs-2 white-text-color mr-2" />
                            <p className="white-text-color font-weight-bold">
                              Save to watch later
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content center white-text-color">
          Please hit a like !
        </div>
      )}
    </div>
  );
}
