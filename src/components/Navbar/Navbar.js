import React from "react";
import "./navbar.css";
import star from "../../images/star.png";
import mg from "../../images/mg.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={star}></img>
      <div className="search-container">
        <div className="search-top-row">
          <div className="searchbar">
            <img src={mg}></img>

            <input
              placeholder="Search or Filter"
              className="search-input"
            ></input>
          </div>

          <a className="sign-up">Sign Up</a>
          <a className="login">Login</a>
        </div>
        <div className="search-bottom-row">
          <div></div>

          <div>Browse Categories:</div>
          <div>Make-up</div>
          <div>Hair</div>
          <div>Skin</div>
          <div>Nails</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
