import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { useSelector, useDispatch } from "react-redux";
import { BiLike } from "react-icons/bi";
import { RiPlayListAddFill } from "react-icons/ri";
export default function SingleVideo() {
  let { videoid } = useParams();
  const videos = useSelector((state) => state.video.videos);

  let filteredVideo = videos.find((video) => video._id === videoid);
  let recommendationList = videos.filter(
    (video) =>
      video.categoryName === filteredVideo.categoryName &&
      video._id !== filteredVideo._id
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

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
              <BiLike size={20} className="white-text-color" />
              <RiPlayListAddFill size={20} className="white-text-color" />
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
              <div className="d-flex" key={_id}>
                <div className="card-img-hori pos-relative">
                  <img
                    src={thumbUrl}
                    className="responsive-img img-hori  yt-card"
                    alt="thumbnail"
                  />
                  <p className=" hori-duration white-text-color">{duration}</p>
                </div>
                <div className="d-flex flex-column ml-1">
                  <p className=" white-text-color mt-1 word-wrap">{title}</p>
                  <small className="card-subtitle mt-1 hori-subt">
                    {creator}
                  </small>
                  <p className="card-subtitle hori-subt xs-font ">
                    {views + " "}views
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
