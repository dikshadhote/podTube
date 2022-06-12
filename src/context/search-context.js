import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
const useSearch = () => useContext(SearchContext);

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filterAfterSearch, setfilterAfterSearch] = useState([]);

  const sortByTag = (videos, categoryName) => {
    let filterArr = videos.filter((video) => {
      const category = video.categoryName.toLowerCase();
      const selectedCategory = categoryName.toLowerCase();
      if (category === selectedCategory) {
        return video;
      }
    });

    setFilteredList(filterArr);
    setfilterAfterSearch(filterArr);
    if (categoryName === "all") {
      setFilteredList(videos);
      setfilterAfterSearch(videos);
    }
  };

  const searchByVideoTitle = (searchValue, filteredList) => {
    let filteredBySearch = filteredList.filter((video) => {
      return (
        video.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        video.creator.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    if (searchValue === "") {
      setfilterAfterSearch(filteredList);
    } else {
      setfilterAfterSearch(filteredBySearch);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        sortByTag,
        filteredList,
        setFilteredList,
        searchByVideoTitle,
        filterAfterSearch,
        setfilterAfterSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, useSearch };
