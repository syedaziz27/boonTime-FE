import React from "react";
import "./App.css";
import UserProfile from './components/UserProfile/UserProfile';
import TrendingChannels from "./components/trendingChannels/trendingChannels";







function App() {
  return (
    <div className="container">
      <UserProfile />
      {/* <TrendingChannels /> */}
    </div>
  );
}

export default App;
