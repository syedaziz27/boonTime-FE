import React from "react";
import "./titleVideo.css";

const titleVideo = () => {
  return (
    <>
      <div className="title_ratings">
        <h2 className="video_title">SMOKEY DARE MAKEUP TUTORIAL</h2>
      </div>

      <div className="boon_video">
        <video width="100%" height="100%" controls className="">
          <source
            src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
            type="video/mp4"
          />
        </video>
        <div className="videoViews">
          <span className="numViews">11.5k Views</span>

          <span>Updated: 4 Months ago</span>
        </div>
        <div className="video_comments">
          <h3>3,023 COMMENTS</h3>
          <div>
            <textarea rows="6" cols="100" name="comment" form="usrform">
              Enter text here...
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default titleVideo;
