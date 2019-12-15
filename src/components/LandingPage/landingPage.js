import React from "react";
import TrendingChannels from "../trendingChannels/trendingChannels";
import "./landingPage.css";
import WelcomeVideos from "../WelcomeVideos/welcomeVideos";
import VideoCard from "../videoCard/videoCard";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-container">
          <div></div>
          <TrendingChannels />
          <div></div>
          <WelcomeVideos />
          <div></div>
        </div>

        <div className="trending-containers">
          <h3>Trending Videos</h3>
          <div className="thumbnail-container-trending">
            <div></div>
            <VideoCard />
            <div></div>
            <VideoCard />
            <div></div>
            <VideoCard />
            <div></div>
            <VideoCard />
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
