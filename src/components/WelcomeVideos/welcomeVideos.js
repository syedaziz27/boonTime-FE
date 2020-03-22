import React from "react";
import './welcomeVideos.css';

export default function WelcomeVideos() {
  return (
    <div className="welcome-vids-container">
      <video width="1440px" height="500px" controls>
        <source
          src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
