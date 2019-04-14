import React from 'react';
import VideoListItem from '../components/video-list-item';

const videoList = props => {
  const { moviesList, callback } = props;

  const reciveCalback = movie => {
    callback(movie);
  };

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
};
export default videoList;
