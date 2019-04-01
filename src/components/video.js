import React from "react";

const BASE_URL = `https://www.youtube.com/embed/`;

const video = ({ videoId }) => {
  return (
    <div>
      <iframe src={`${BASE_URL}${videoId}`} />
    </div>
  );
};

export default video;
