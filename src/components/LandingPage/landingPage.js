import React from "react";
import TrendingChannels from "../trendingChannels/trendingChannels";
import "./landingPage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div></div>
        <TrendingChannels />
        <div></div>
        <video width="100%" height="100%" controls>
          <source
            src="https://www.youtube.com/watch?v=t5uVXqNLMDc"
            type="video/mp4"
          />
        </video>
        <div></div>
      </div>
    );
  }
}
