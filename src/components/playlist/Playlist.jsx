import React, { useEffect } from "react";
import {
  getAllPlaylists,
  deletePlaylist,
} from "../../redux/reducers/playlist/playlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import VideoCard from "../VideoCard/VideoCard";
import { toast } from "react-toastify";
export default function Playlist() {
  const playlistDispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);

  const deletePlaylistName = async (playlistId) => {
    if (!isUserLoggedIn) return toast.error("Login to delete playlist");
    await playlistDispatch(deletePlaylist(playlistId)).unwrap();
    return toast.success("Removed playlist successfully!");
  };

  useEffect(() => {
    playlistDispatch(getAllPlaylists());
  }, [playlistDispatch]);

  const playlistData = useSelector((state) => state.playlists.playlists);
  return (
    <div>
      {playlistData.length > 0 ? (
        <div>
          {playlistData.map((playlist) => {
            return (
              <div key={playlist._id}>
                <div className="d-flex justify-content center align-items-center white-text-color">
                  <h4 className="mt-2 ml-2 white-text-color">
                    {playlist.title}
                  </h4>
                  <FaTrash
                    className="cursor-pointer white-text-color mt-2 ml-3  fs-1"
                    title="delete playlist"
                    onClick={() => {
                      deletePlaylistName(playlist._id);
                    }}
                  />
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
            Please create playlist from home or video page...
          </h4>
        </div>
      )}
    </div>
  );
}
