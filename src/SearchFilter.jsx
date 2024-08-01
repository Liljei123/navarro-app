import React from "react";
import "./styles.css";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default SearchFilter;
