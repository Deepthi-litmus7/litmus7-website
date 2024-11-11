import React from "react";

const Video = ({path, className}) => {
  const url = path;
  return (
    <div>
      <video
        controls
        className={className}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
