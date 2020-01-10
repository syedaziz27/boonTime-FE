import React from "react";
import "./titleVideo.css";

const titleVideo = () => {
  return (
    <>
      <div className="title_ratings">
        <h2 className="video_title">SMOKEY DARE MAKEUP TUTORIAL</h2>
        <h2 className="video_rating">Stars</h2>
      </div>

      <div className="boon_video">
        <video width="100%" height="100%" controls className="">
          <source
            src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default titleVideo;
