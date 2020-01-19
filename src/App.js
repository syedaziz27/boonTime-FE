import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";
import LandingPage from "./components/LandingPage/landingPage";
import Products from "./components/Product-recommendations/products";
import VideoCard from "./components/videoCard/videoCard";
import SignUp from "./components/SignUp/signup";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/vlogger/rec" exact component={Products} />
      {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
      <Route path="/vlogger" exact component={VideoCard} />
      <Route path="/signup" exact component={SignUp}></Route>
      <Route path="/login" exact component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
