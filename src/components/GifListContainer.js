import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=7cO35lx7NdVEvYhbDX3VdLRjnt4LvQJf&rating=g&limit=3"
    )
      .then((r) => r.json())
      .then((d) => setGifs(d.data));
  }, []);

  function submitHandler (searchText) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=7cO35lx7NdVEvYhbDX3VdLRjnt4LvQJf&rating=g&limit=3`)
        .then(r => r.json())
        .then(d => setGifs(d.data));
  }

  return (
    <>
      <GifSearch onSubmit={submitHandler} />
      <GifList gifs={gifs} />
    </>
  );
}

export default GifListContainer;
