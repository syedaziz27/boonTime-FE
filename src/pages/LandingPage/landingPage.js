import React from "react";
import TrendingChannels from "../../components/trendingChannels/trendingChannels";
import "./landingPage.css";
import WelcomeVideos from "../../components/WelcomeVideos/welcomeVideos";
import VideoCard from "../../components/videoCard/videoCard";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-container">

          <div> </div> <WelcomeVideos />

        </div>
        <div className="trending-containers">
          <h3> Trending Videos </h3>{" "}
          <div className="thumbnail-container-trending">
            <div> </div> <VideoCard />
            <div> </div> <VideoCard />
            <div> </div> <VideoCard />
            <div> </div> <VideoCard />
            <div> </div>{" "}
          </div>{" "}
          <button>Show More</button>
        </div>{" "}

      </div>
    );
  }
}
