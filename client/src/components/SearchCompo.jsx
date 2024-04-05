import React, { useState } from "react";
import catagories from "./assets/catagories";

const SearchCompo = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
    setInput(e.target.value);
    const filteredSuggestions = catagories.filter((suggestion) => {
      return suggestion.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSuggestions(filteredSuggestions);
  };

  return (
    <>
      <div className="search flex flex-col">
        <input
          type="text"
          onChange={handleChange}
          value={input}
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
