import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { getCategories } from "../../redux/reducers/video-listing/categorySlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVideoLibrary, MdThumbUp } from "react-icons/md";
export default function Home() {
  const videos = useSelector((state) => state.video.videos);
  const categories = useSelector((state) => state.categories.categories);
  const [showPanel, setShowPanel] = useState(false);
  const [saveId, showSaveid] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
    dispatch(getCategories());
  }, [dispatch]);

  const handleShowPanel = (inputId) => {
    showSaveid(inputId);
    const videoPresent = videos.some((video) => video._id === inputId);

    if (videoPresent) {
      setShowPanel(true);
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="mt-3 mb-1 gray-border-chip-container pb-2 pt-2">
        <span className="card-category-txt  white-text-color cursor-pointer">
          All
        </span>
        {categories.map(({ categoryName }, idx) => {
          return (
            <span
              className="card-category-txt  white-text-color cursor-pointer"
              key={idx}
            >
              {categoryName}
            </span>
          );
        })}
      </div>
      <div className="d-flex flex-wrap">
        {videos.map(
          ({ title, thumbUrl, creator, views, duration, avatar, _id }) => {
            return (
              <div
                className="card flex-column card-vert black-dark-bg border-none cursor-pointer"
                key={_id}
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
                    <div className="pos-relative">
                      <BsThreeDotsVertical
                        className="white-text-color fs-2 "
                        onClick={() => handleShowPanel(_id)}
                      />
                      {showPanel && saveId == _id && (
                        <div
                          className="popup-threedot d-flex flex-column "
                          onClick={() => setShowPanel(!showPanel)}
                        >
                          <div className="d-flex mb-1">
                            <MdThumbUp className="fs-2 white-text-color mr-2" />
                            <p className="white-text-color font-weight-bold">
                              Like
                            </p>
                          </div>
                          <div className="d-flex mb-1">
                            <MdVideoLibrary className="fs-2 white-text-color mr-2" />
                            <p className="white-text-color font-weight-bold">
                              Save to watch later
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
