import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Home() {
  const videos = useSelector((state) => state.video.videos);
  console.log(videos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap">
      {videos.map(
        ({ title, thumbUrl, creator, views, duration, avatar }, idx) => {
          return (
            <div
              className="card flex-column card-vert black-dark-bg border-none"
              key={idx}
            >
              <div className="">
                <img
                  className="card-img-vert pos-relative yt-card "
                  src={thumbUrl}
                  alt="thumbnail"
                />
                <p className="duration  white-text-color">{duration}</p>
              </div>

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
                      <p className="white-text-color ml-2">{title}</p>
                      <small className="card-subtitle mt-1">{creator}</small>
                      <p className="card-subtitle xs-font">
                        {views + " "}views
                      </p>
                    </div>
                  </div>

                  <BsThreeDotsVertical className="white-text-color fs-2" />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
