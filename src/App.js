import React from "react";
import "./App.css";
<<<<<<< HEAD
import UserProfile from './components/UserProfile/UserProfile';
import TrendingChannels from "./components/trendingChannels/trendingChannels";







function App() {
  return (
    <div className="container">
      <UserProfile />
      {/* <TrendingChannels /> */}
    </div>
=======
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <div className="container">
        <TrendingChannels />
      </div>
    </BrowserRouter>
>>>>>>> master
  );
}

export default App;
