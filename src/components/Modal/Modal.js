import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PlaylistInputForm from "./PlaylistInputForm";
import {
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../redux/reducers/playlist/playlistSlice";
import { toast } from "react-toastify";
export default function Modal({ setShowModal, video }) {
  const playlistsData = useSelector((state) => state.playlists.playlists);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);

  const playlistDispatch = useDispatch();
  const deletePlaylistName = async (playlistId) => {
    if (!isUserLoggedIn) return toast.error("Login to delete playlist");
    await playlistDispatch(deletePlaylist(playlistId)).unwrap();
    return toast.success("Removed playlist successfully!");
  };

  const addVideoToPlayList = async (video, playlistId) => {
    if (!isUserLoggedIn)
      return toast.error("Please login to add video to playlist");
    await playlistDispatch(addVideoToPlaylist({ video, playlistId })).unwrap();
    return toast.success("Added video to playlist!");
  };
  const removeVideoFromPlayList = async (videoId, playlistId) => {
    if (!isUserLoggedIn)
      return toast.error("Please login to remove video from playlist");
    await playlistDispatch(
      removeVideoFromPlaylist({ videoId, playlistId })
    ).unwrap();
    return toast.success("Removed video from playlist!");
  };
  const isInPlaylist = (PlaylistId, videoId) =>
    playlistsData.some((playlist) =>
      playlist._id === PlaylistId
        ? playlist.videos.some((video) => video._id === videoId)
        : false
    );

  const updatePlaylist = (e, video, playlistId) => {
    e.target.checked
      ? addVideoToPlayList(video, playlistId)
      : removeVideoFromPlayList(video._id, playlistId);
  };
  return (
    <div className="white-text-color modal">
      <div className="white-text-color black-light-shade-bg p-3 d-flex flex-column flex-justify-center ">
        <div className="d-flex flex-justify-end">
          <p onClick={() => setShowModal(false)} className="cursor-pointer">
            X
          </p>
        </div>
        <div className="gray-bottom-border pb-2">
          <p className="white-text-color">Add to existing playlist :</p>
          {playlistsData.map((playlist) => (
            <div
              key={playlist._id}
              className="d-flex flex-justify-space-between align-items-center"
            >
              <div className="d-flex align-items-center  mt-1">
                <input
                  type="checkbox"
                  id={playlist._id}
                  className="mr-1"
                  onChange={(e) => {
                    updatePlaylist(e, video, playlist._id);
                  }}
                  checked={isInPlaylist(playlist._id, video._id)}
                />
                <label htmlFor={playlist._id}> {playlist.title}</label>
              </div>

              <FaTrash
                className="cursor-pointer white-text-color mt-1 fs-1"
                onClick={() => {
                  deletePlaylistName(playlist._id);
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-2">
          <p className="white-text-color mb-1">Create new playlist :</p>
          <PlaylistInputForm />
        </div>
      </div>
    </div>
  );
}
