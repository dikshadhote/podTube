import React, { useEffect } from "react";
import { getLikedVideos } from "../../redux/reducers/like/likeSlice";
import { useSelector, useDispatch } from "react-redux";

import VideoCard from "../VideoCard/VideoCard";
export default function LikedVideos() {
  const likesDispatch = useDispatch();

  useEffect(() => {
    likesDispatch(getLikedVideos());
  }, [likesDispatch]);

  const likedVideos = useSelector((state) => state.like.likes);

  return (
    <div>
      {likedVideos.length > 0 ? (
        <div className="d-flex flex-wrap">
          {likedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      ) : (
        <div className="d-flex justify-content center white-text-color">
          <h4 className="mt-2 ml-2">
            Please hit a like button ! to get videos here...
          </h4>
        </div>
      )}
    </div>
  );
}
