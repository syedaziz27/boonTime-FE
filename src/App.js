import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/landingPage";
import VideoCard from "./components/videoCard/videoCard";
import SignUp from "./pages/SignUp/signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import VloggersPage from "./pages/VloggersPage/VloggersPage";
import ViewVideoPage from "./pages/ViewVideoPage/ViewVideoPage";
import Search from "./components/Search/search";
import firebase from "./firebase/firebase";
import AuthContext from "./contexts/auth";

class App extends React.Component {
  state = { user: null, videoId: null };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  VideoId = (id) => {
    this.setState({ videoId: id })
    return this.state.videoId
  }

  render() {

    return (
      <BrowserRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/vlogger/rec" exact component={VloggersPage} />
          {/* NOTE: CHANGE VLOGGER TO USERS ACTUAL USERNAME */}
          <Route path="/videopage" exact component={ViewVideoPage} />
          {/* NOTE: CHANGE VIDEOPAGE TO USERS NAME VIDEO */}
          <Route path="/vlogger" exact component={VideoCard} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/search/:query" render={() => <Search VideoId={this.VideoId} />} />

        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
