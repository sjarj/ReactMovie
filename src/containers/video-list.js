import React from 'react';
import VideoListItem from '../components/video-list-item';

const videoList = props => {
  const { moviesList, callback } = props;
  return (
    <div>
      <ul>
        {moviesList.map(movie => (
          <VideoListItem
            key={movie.id}
            movie={movie}
            callback={reciveCalback}
          />
        ))}
      </ul>
    </div>
  );

  function reciveCalback(movie) {
    callback(movie);
  }
};

export default videoList;
