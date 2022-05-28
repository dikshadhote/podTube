import React from "react";
import { MdVideoLibrary, MdThumbUp, MdThumbDown } from "react-icons/md";
import {
  addVideoToWatchlater,
  removeVideoFromWatchlater,
} from "../../redux/reducers/watch-later/watchlaterSlice";
import {
  addVideoToLikes,
  removeVideosFromLikes,
} from "../../redux/reducers/like/likeSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function OptionPanel({ video }) {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  const likedVideos = useSelector((state) => state.like.likes);
  const watchlaterVideos = useSelector((state) => state.watchlater.watchlater);
  const watchlaterDispatch = useDispatch();
  const likesDispatch = useDispatch();
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
  return (
    <div className="popup-threedot d-flex flex-column">
      {likedVideos.some((currvideo) => currvideo._id === video._id) ? (
        <div
          className="d-flex mb-1 cursor-pointer"
          onClick={() => {
            removefromLike(video._id);
          }}
        >
          <MdThumbDown className="fs-2 white-text-color mr-2" />
          <p className="white-text-color font-weight-bold">Remove from like</p>
        </div>
      ) : (
        <div
          className="d-flex mb-1 cursor-pointer"
          onClick={() => {
            addVideoToLike(video);
          }}
        >
          <MdThumbUp className="fs-2 white-text-color mr-2" />
          <p className="white-text-color font-weight-bold">Add to like</p>
        </div>
      )}
      {watchlaterVideos.some((currvideo) => currvideo._id === video._id) ? (
        <div
          className="d-flex mb-1 cursor-pointer"
          onClick={() => {
            removeFromWatchLater(video._id);
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
  );
}
