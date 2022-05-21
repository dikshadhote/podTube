import React, { useEffect, useState } from "react";
import {
  getWatchlaterVideos,
  addVideoToWatchlater,
  removeVideoFromWatchlater,
} from "../../redux/reducers/watch-later/watchlaterSlice";
import {
  addVideoToLikes,
  removeVideosFromLikes,
} from "../../redux/reducers/like/likeSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVideoLibrary, MdThumbUp, MdThumbDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { removeVideoFromHistory } from "../../redux/reducers/history/historySlice";
export default function History() {
  const watchlaterDispatch = useDispatch();
  const likesDispatch = useDispatch();
  const historyDispatch = useDispatch();
  const [showPanel, setShowPanel] = useState(false);
  const [saveId, showSaveid] = useState(false);
  useEffect(() => {
    watchlaterDispatch(getWatchlaterVideos());
  }, [watchlaterDispatch]);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  const watchlaterVideos = useSelector((state) => state.watchlater.watchlater);
  const likedVideos = useSelector((state) => state.like.likes);
  const historyVideos = useSelector((state) => state.history.history);
  const handleShowPanel = (inputId) => {
    showSaveid(inputId);
    const videoPresent = historyVideos.some((video) => video._id === inputId);

    if (videoPresent) {
      setShowPanel(true);
    }
  };

  const addVideoToLike = async (video) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await likesDispatch(addVideoToLikes(video)).unwrap();
    return toast.success("Added to like videos!");
  };

  const removefromLike = async (videoId) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await likesDispatch(removeVideosFromLikes(videoId)).unwrap();
    return toast.success("Removed from like videos!");
  };
  const addVideoToWatchLater = async (video) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await watchlaterDispatch(addVideoToWatchlater(video)).unwrap();
    return toast.success("Saved to watchlater videos!");
  };
  const removeFromWatchLater = async (videoId) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await watchlaterDispatch(removeVideoFromWatchlater(videoId)).unwrap();
    return toast.success("Removed from watchlater videos!");
  };
  const removeFromHistory = async (videoId) => {
    if (!isUserLoggedIn) return toast.error("You need to login first");
    await historyDispatch(removeVideoFromHistory(videoId)).unwrap();
    return toast.success("Removed from history videos!");
  };
  return (
    <div>
      {historyVideos.length > 0 ? (
        <div className="d-flex flex-wrap">
          {historyVideos.map((video) => {
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
                  <MdClose
                    size={20}
                    className="white-text-color cross-history cursor-pointer"
                    title="Remove from history"
                    onClick={() => {
                      removeFromHistory(_id);
                    }}
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

                          {watchlaterVideos.some(
                            (video) => video._id === _id
                          ) ? (
                            <div
                              className="d-flex mb-1 cursor-pointer"
                              onClick={() => {
                                removeFromWatchLater(_id);
                              }}
                            >
                              <MdVideoLibrary className="fs-2 white-text-color mr-2" />
                              <p className="white-text-color font-weight-bold">
                                Remove from watch later
                              </p>
                            </div>
                          ) : (
                            <div
                              className="d-flex mb-1 cursor-pointer"
                              onClick={() => {
                                addVideoToWatchLater(video);
                              }}
                            >
                              <MdVideoLibrary className="fs-2 white-text-color mr-2" />
                              <p className="white-text-color font-weight-bold">
                                Save to watch later
                              </p>
                            </div>
                          )}
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
          <h4 className="mt-2 ml-2">No videos available in history...</h4>
        </div>
      )}
    </div>
  );
}
