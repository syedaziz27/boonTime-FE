import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import themeFile from "./utils/theme";
import Navbar from "./components/Navbar";
import TrendingChannels from "./components/trendingChannels/trendingChannels";

//MUI stuff
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <div className="container">
          <TrendingChannels />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
