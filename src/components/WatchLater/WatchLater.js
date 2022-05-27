import React, { useEffect } from "react";
import { getWatchlaterVideos } from "../../redux/reducers/watch-later/watchlaterSlice";

import { useSelector, useDispatch } from "react-redux";

import VideoCard from "../VideoCard/VideoCard";
export default function WatchLater() {
  const watchlaterDispatch = useDispatch();

  useEffect(() => {
    watchlaterDispatch(getWatchlaterVideos());
  }, [watchlaterDispatch]);
  const watchlaterVideos = useSelector((state) => state.watchlater.watchlater);
  return (
    <div>
      {watchlaterVideos.length > 0 ? (
        <div className="d-flex flex-wrap">
          {watchlaterVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      ) : (
        <div className="d-flex justify-content center white-text-color">
          <h4 className="mt-2 ml-2">Please add videos to watch later...</h4>
        </div>
      )}
    </div>
  );
}
