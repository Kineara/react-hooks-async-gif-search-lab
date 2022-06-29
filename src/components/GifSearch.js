import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(searchText);
      }}
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default GifSearch;
