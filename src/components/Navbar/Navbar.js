import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import star from "../../images/star.png";
import mg from "../../images/mg.png";
import arrow from "../../images/arrow.png";
import AuthContext from "../../contexts/auth";

function Navbar() {

  const handleClick = (e) => {
    console.log(e.target.name)
  }

  return (
    <div className="navbar-container">
      <img src={star} alt='img' />
      <div className="search-container">
        <div className="search-top-row">
          <div className="searchbar">
            <img src={mg} className="mag-glass" alt='mag-glass' />

            <input
              placeholder="Search or Filter"
              className="search-input"
            />
            <img className="dropdown-arrow" src={arrow} alt='arrow' />
          </div>

          <AuthContext.Consumer>
            {user => {
              if (user) return <Link to="/logout">Logout</Link>;
              else
                return (
                  <>
                    {" "}
                    <Link to="/signup" className="sign-up">
                      Sign Up
                    </Link>{" "}
                    <Link to="/login" className="login">
                      Login
                    </Link>
                  </>
                );
            }}
          </AuthContext.Consumer>
        </div>
        <div className="search-bottom-row">
          <div></div>

          <div>Browse Categories:</div>
          <Link to='/search/1' onClick={handleClick} className="category" name='Make-up'>Make-up</Link>
          <Link to='/search/1' onClick={handleClick} className="category" name='Hair'>Hair</Link>
          <Link to='/search/1' onClick={handleClick} className="category" name='Skin'>Skin</Link>
          <Link to='/search/1' onClick={handleClick} className="category" name='Nails'>Nails</Link>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
