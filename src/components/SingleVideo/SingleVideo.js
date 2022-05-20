import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { useSelector, useDispatch } from "react-redux";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
import { toast } from "react-toastify";
import {
  addVideoToLikes,
  removeVideosFromLikes,
} from "../../redux/reducers/like/likeSlice";
export default function SingleVideo() {
  let { videoid } = useParams();
  const videos = useSelector((state) => state.video.videos);
  const likesDispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);
  let filteredVideo = videos.find((video) => video._id === videoid);
  const likedVideos = useSelector((state) => state.like.likes);

  let present = false;
  present = likedVideos.some((video) => video._id === filteredVideo._id);

  let recommendationList = videos.filter(
    (video) =>
      video.categoryName === filteredVideo.categoryName &&
      video._id !== filteredVideo._id
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

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

  return (
    <div className="grid-layout-singlev mt-2 ml-2">
      <div>
        <div className="video-wrapper">
          <ReactPlayer
            url={filteredVideo?.videoUrl}
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="gray-bottom-border p-1">
          <div>
            <p className=" white-text-color mt-1 word-wrap mt-2">
              {filteredVideo?.title}
            </p>
          </div>
          <div className="d-flex flex-justify-space-between align-items-center mt-1">
            <p className="card-subtitle hori-subt ">
              {filteredVideo?.views} views
            </p>
            <div className="d-flex">
              {present ? (
                <BiDislike
                  size={30}
                  className="white-text-color mr-2 cursor-pointer icon"
                  title="Remove from like"
                  onClick={() => {
                    removefromLike(filteredVideo?._id);
                  }}
                />
              ) : (
                <BiLike
                  size={30}
                  className="white-text-color mr-2 cursor-pointer icon"
                  title="Add to like"
                  onClick={() => {
                    addVideoToLike(filteredVideo);
                  }}
                />
              )}

              <RiPlayListAddFill
                size={30}
                className="white-text-color cursor-pointer icon"
                title="Add to playlist"
              />
            </div>
          </div>
        </div>
        <div className="gray-bottom-border p-1 d-flex align-items-center">
          <div className="mr-1">
            <img
              src={filteredVideo?.avatar}
              className="avatar avatar-xs "
              alt="avatar"
            />
          </div>
          <div className="d-flex flex-column">
            <p className=" white-text-color mt-1 word-wrap mt-2 fs-1">
              {filteredVideo?.creator}
            </p>
            <p className=" white-text-color mt-2">
              {filteredVideo?.description}
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div>
        {recommendationList.map(
          ({ title, thumbUrl, creator, views, duration, _id }) => {
            return (
              <NavLink className="d-flex" key={_id} to={`/video/${_id}`}>
                <div className="card-img-hori pos-relative rec-img flex-shrink">
                  <img
                    src={thumbUrl}
                    className="responsive-img img-hori  yt-card  "
                    alt="thumbnail"
                  />
                  <p className=" hori-duration white-text-color">{duration}</p>
                </div>
                <div className="d-flex flex-column ml-1">
                  <p className=" white-text-color mt-1 word-wrap text-overflow rec-text">
                    {title}
                  </p>
                  <small className="card-subtitle mt-1 hori-subt">
                    {creator}
                  </small>
                  <p className="card-subtitle hori-subt xs-font ">
                    {views + " "}views
                  </p>
                </div>
              </NavLink>
            );
          }
        )}
      </div>
    </div>
  );
}
