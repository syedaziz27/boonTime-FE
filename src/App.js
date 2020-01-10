import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/landingPage";
import VideoCard from "./components/videoCard/videoCard";
import SignUp from "./components/SignUp/signup";
import VloggersPage from './pages/VloggersPage/VloggersPage';
import ViewVideoPage from './pages/ViewVideoPage/ViewVideoPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={LandingPage} />
      <Route path="/vlogger/rec" exact component={VloggersPage} />
      {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
      <Route path='/videopage' exact component={ViewVideoPage} />
      {/* NOTE: CHANGE VIDEOPAGE TO USERS NAME VIDEO */}
      <Route path="/vlogger" exact component={VideoCard} />
      <Route path="/signup" exact component={SignUp}></Route>
    </BrowserRouter>
  );
}

export default App;
