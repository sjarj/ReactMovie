import React from "react";
import VideoListItem from "../components/video-list-item";

const videoList = ({ moviesList }) => {
  return (
    <div>
      <ul>
        {moviesList.map(movie => (
          <VideoListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default videoList;
