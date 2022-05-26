import React, { useEffect } from "react";
import { getAllPlaylists } from "../../redux/reducers/playlist/playlistSlice";
import { useSelector, useDispatch } from "react-redux";

import VideoCard from "../VideoCard/VideoCard";
export default function Playlist() {
  const playlistDispatch = useDispatch();

  useEffect(() => {
    playlistDispatch(getAllPlaylists());
  }, [playlistDispatch]);

  const playlistData = useSelector((state) => state.playlists.playlists);
  console.log(playlistData);
  return (
    <div>
      {playlistData.length > 0 ? (
        <div>
          {playlistData.map((playlist) => {
            return (
              <div>
                <div className="d-flex justify-content center white-text-color">
                  <h4 className="mt-2 ml-2 white-text-color">
                    {playlist.title}
                  </h4>
                </div>
                <div className="d-flex flex-wrap">
                  {playlist.videos.map((video) => {
                    return (
                      <VideoCard
                        video={video}
                        key={video._id}
                        isPlaylist={true}
                        playlistId={playlist._id}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="d-flex justify-content center white-text-color">
          <h4 className="mt-2 ml-2">
            Please create playlist from home page...
          </h4>
        </div>
      )}
    </div>
  );
}
