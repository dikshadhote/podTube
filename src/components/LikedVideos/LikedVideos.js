import React, { useEffect } from "react";
import { getLikedVideos } from "../../redux/reducers/like/likeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function LikedVideos() {
  const likesDispatch = useDispatch();
  useEffect(() => {
    likesDispatch(getLikedVideos());
  }, [likesDispatch]);
  const likedVideos = useSelector((state) => state.like.likes);
  console.log(likedVideos);
  return <div className="d-flex flex-wrap"></div>;
}
