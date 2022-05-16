import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideos } from "../../redux/reducers/video-listing/videosSlice";
import { getCategories } from "../../redux/reducers/video-listing/categorySlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVideoLibrary, MdThumbUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
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

  useEffect(() => {
    setFilteredList(videos);
  }, [videos]);
  const handleShowPanel = (inputId) => {
    showSaveid(inputId);
    const videoPresent = videos.some((video) => video._id === inputId);

    if (videoPresent) {
      setShowPanel(true);
    }
  };
  const sortByTag = (videos, categoryName) => {
    let filterArr = videos.filter((video) => {
      const category = video.categoryName.toLowerCase();
      const selectedCategory = categoryName.toLowerCase();
      if (category === selectedCategory) {
        return video;
      }
    });

    setFilteredList(filterArr);
    if (categoryName === "all") {
      setFilteredList(videos);
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="mt-3 mb-1 ml-3 gray-border-chip-container pb-2 pt-2">
        <span
          className="card-category-txt  white-text-color cursor-pointer"
          onClick={() => sortByTag(videos, "all")}
        >
          All
        </span>
        {categories.map(({ categoryName }, idx) => {
          return (
            <span
              className="card-category-txt  white-text-color cursor-pointer"
              key={idx}
              onClick={() => sortByTag(videos, categoryName)}
            >
              {categoryName}
            </span>
          );
        })}
      </div>
      <div className="d-flex flex-wrap">
        {filteredList?.map(
          ({ title, thumbUrl, creator, views, duration, avatar, _id }) => {
            return (
              <NavLink
                className="card flex-column card-vert black-dark-bg border-none cursor-pointer"
                key={_id}
                to={`/singlevideo/${_id}`}
              >
                <img
                  className="card-img-vert pos-relative yt-card responsive-img "
                  src={thumbUrl}
                  alt="thumbnail"
                />
                <p className="duration  white-text-color">{duration}</p>

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
              </NavLink>
            );
          }
        )}
      </div>
    </div>
  );
}
