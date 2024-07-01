import React, { useState } from "react";


function SearchNotebook(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };



  return (
    <>
      <h1>Note Book</h1>
      <div>
        <label htmlFor="filter">Search Notes</label>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>Total Notes</div>

      <div>Showing</div>
    </>
  );
}

export default SearchNotebook;
