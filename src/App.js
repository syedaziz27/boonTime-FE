import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";
import Products from "./components/Product-recommendations/products";
import Card from "./components/Card/card";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={TrendingChannels} />
      <Route path="/vlogger/rec" exact component={Products} />{" "}
      {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
      <Route path="/vlogger" exact component={Card} />
    </BrowserRouter>
  );
}

export default App;
