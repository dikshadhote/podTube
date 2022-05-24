import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { addNewPlaylist } from "../../redux/reducers/playlist/playlistSlice";
import { toast } from "react-toastify";
export default function PlaylistInputForm() {
  const [playlistName, setPlayListName] = useState("");
  const inputPlaylistDispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedin);

  const addPlaylistNameHandler = async (playlistName) => {
    if (!isUserLoggedIn) return toast.error("Please login to create playlist.");
    await inputPlaylistDispatch(
      addNewPlaylist({ title: playlistName })
    ).unwrap();
    setPlayListName(" ");
    return toast.success("Playlist created!");
  };
  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="Add here..."
        className="input-playlist grow black-dark-bg"
        autoFocus={true}
        value={playlistName}
        onChange={(e) => setPlayListName(e.target.value)}
      />
      <span className="black-dark-bg p-1 d-flex ml-1">
        <BiPlus
          size="20px"
          className="cursor-pointer"
          onClick={() => addPlaylistNameHandler(playlistName)}
        />
      </span>
    </div>
  );
}
