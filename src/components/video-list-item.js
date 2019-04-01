import React from "react";
const IMAGE_BASEURL = "https://image.tmdb.org/t/p/w500";
const videoListItem = ({ movie }) => {
  return (
    <li>
      <image
        height="100px"
        width="100px"
        src={`${IMAGE_BASEURL}${movie.poster_path}`}
      />
      <h3> {movie.title}</h3>
    </li>
  );
};

export default videoListItem;
