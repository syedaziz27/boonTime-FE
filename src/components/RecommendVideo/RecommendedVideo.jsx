import React from "react";
import "./RecommendedVideo.css";
import VideoCard from "../videoCard/videoCard";

export default () => (
  <>
    <div className="recVideo">
      <video width="100%" height="100%" controls className="vids-container">
        <source
          src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
          type="video/mp4"
        />
      </video>
    </div>
    <div className="hrText">
      <p>MORE UPLOADS BY USERNAME</p>
      <p>PLAY ALL</p>
    </div>
    <div className="vidInfo">
      <p>
        The only NATURAL PRODUCTS I <br />
        use before I apply makeup
      </p>
    </div>

    <div className="videoRec">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  </>
);
