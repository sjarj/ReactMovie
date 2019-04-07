import React from "react";
const IMAGE_BASEURL = "https://image.tmdb.org/t/p/w500";
const videoListItem = ({ movie }) => {
  return (
    <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <image
            className="media-object img-rounded"
            height="100px"
            width="100px"
            src={`${IMAGE_BASEURL}${movie.poster_path}`}
          />
        </div>
        <div className="media-body">
          <h5> {movie.title}</h5>
        </div>
      </div>
    </li>
  );
};

export default videoListItem;
