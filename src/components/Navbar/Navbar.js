import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import star from "../../images/star.png";
import mg from "../../images/mg.png";
import arrow from "../../images/arrow.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={star}></img>
      <div className="search-container">
        <div className="search-top-row">
          <div className="searchbar">
            <img src={mg} className="mag-glass"></img>

            <input
              placeholder="Search or Filter"
              className="search-input"
            ></input>
            <img className="dropdown-arrow" src={arrow}></img>
          </div>

          <Link to="/signup" className="sign-up">
            Sign Up
          </Link>
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
        <div className="search-bottom-row">
          <div></div>

          <div>Browse Categories:</div>
          <div className="category">Make-up</div>
          <div className="category">Hair</div>
          <div className="category">Skin</div>
          <div className="category">Nails</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;