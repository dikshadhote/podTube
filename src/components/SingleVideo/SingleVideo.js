import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SingleVideo() {
  let { videoid } = useParams();
  const videos = useSelector((state) => state.video.videos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <div className="grid-layout-singlev mt-2 ml-2">
      <div className="video-wrapper">
        <ReactPlayer
          url="https://youtu.be/EJkJfXstY0o"
          className="react-player"
          width="100%"
          height="100%"
          controls
        />
        ;
      </div>
      <div>
        {videos.map(({ title, thumbUrl, creator, views, duration, _id }) => {
          return (
            <div className="d-flex">
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
        })}
      </div>
    </div>
  );
}
