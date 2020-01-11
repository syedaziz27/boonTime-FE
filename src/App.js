import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";
import LandingPage from "./components/LandingPage/landingPage";
import Products from "./components/Product-recommendations/products";
import VideoCard from "./components/videoCard/videoCard";
import SignUp from "./components/SignUp/signup";
import VloggersPage from './pages/VloggersPage/VloggersPage';
import Search from "./components/Search/search";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/vlogger/rec" exact component={VloggersPage} />
      {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
      <Route path="/vlogger" exact component={VideoCard} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/search/:query" component={Search} />
    </BrowserRouter>
  );
}

export default App;
