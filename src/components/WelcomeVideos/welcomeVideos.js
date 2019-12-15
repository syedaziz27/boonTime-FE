import React from "react";

export default function WelcomeVideos() {
  return (
    <div className="welcome-vids-container">
      <video width="100%" height="100%" controls>
        <source
          src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
