import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <div className="container">
        <TrendingChannels />
      </div>
    </BrowserRouter>
  );
}

export default App;
