import React, { useEffect } from "react";
import { getWatchlaterVideos } from "../../redux/reducers/watch-later/watchlaterSlice";

import { useSelector, useDispatch } from "react-redux";

import VideoCard from "../VideoCard/VideoCard";
export default function History() {
  const watchlaterDispatch = useDispatch();

  useEffect(() => {
    watchlaterDispatch(getWatchlaterVideos());
  }, [watchlaterDispatch]);

  const historyVideos = useSelector((state) => state.history.history);

  return (
    <div>
      {historyVideos.length > 0 ? (
        <div className="d-flex flex-wrap">
          {historyVideos.map((video) => {
            return <VideoCard video={video} key={video._id} isHistory={true} />;
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
