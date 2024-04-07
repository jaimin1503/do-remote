import React, { useState } from "react";
import catagories from "./assets/catagories";

const SearchCompo = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    if (inputValue.length > 0) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
    const filteredSuggestions = catagories.filter((suggestion) => {
      return suggestion.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSuggestions(filteredSuggestions);
  };

  const handleSearch = () => {
    if (input.length > 0) {
      window.location.href = `/search/job?q=${input}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search flex flex-col">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          onKeyDown={handleKeyPress}
          placeholder="Search for jobs"
          className="search-box w-full border p-1 rounded-full px-4"
        />
        {isOpened && (
          <div className="search-suggestions m-2 py-2 shadow-lg rounded-lg">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setInput(suggestion);
                  setIsOpened(false);
                  window.location.href = `/search/job?q=${suggestion}`;
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default SearchCompo;
