import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/landingPage";
import VideoCard from "./components/videoCard/videoCard";
import SignUp from "./pages/SignUp/signup";
import Login from "./components/Login";
import VloggersPage from "./pages/VloggersPage/VloggersPage";
import ViewVideoPage from "./pages/ViewVideoPage/ViewVideoPage";
import Search from "./components/Search/search";
import firebase from "firebase";

class App extends React.Component {
  state = { user: null };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { email } = user;
        console.log(email);
        // this.setState({user})
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/vlogger/rec" exact component={VloggersPage} />
        {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
        <Route path="/videopage" exact component={ViewVideoPage} />
        {/* NOTE: CHANGE VIDEOPAGE TO USERS NAME VIDEO */}
        <Route path="/vlogger" exact component={VideoCard} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/search/:query" component={Search} />
      </BrowserRouter>
    );
  }
}

export default App;
