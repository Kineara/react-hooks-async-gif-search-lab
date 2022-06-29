import React from "react";

function GifList ({ gifs, onSubmit }) {

    const gifsJSX = gifs.map((gif => {
        return ( 
        <li key={gif.id}>
            <img src={gif.images.original.url} alt="Giphy GIF" />
        </li> )
    }))

    return (
        <ul>
            {gifsJSX}
        </ul>
    )
}

export default GifList;