import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className="UserProfile-container">
        <img className="UserProfile-container-image"></img>
        <p className="UserProfile-container-username">Username</p>
        <p className="UserProfile-container-subscribers">401,230 subscribers</p>
        <br />
        <button className="UserProfile-container-button">subscribe</button>
        <p className="UserProfile-container-views">6,455,201 views</p>
        <p className="UserProfile-container-join">Joined Oct 26th, 2019</p>
        <p className="UserProfile-container-about">Channel About:</p>
        <p className="UserProfile-container-info">
          Hi! Welcome to my channel where I vlog about beauty essentials that
          have natural ingredients for oily skin.
        </p>
        <div className="container-links">
          <a className="links_title">Links:</a>
          <div className="c-links">
            <a className="links" href="">
              Website
            </a>
            <a className="links" href="">
              Instagram
            </a>
            <a className="links" href="">
              Twitter
            </a>
            <a className="links" href="">
              Facebook
            </a>
          </div>
        </div>
        <div className="container-inquiries">
          <p className="inquiries_business"> Business Inquiries:</p>
          <a className="inquiries_email" href="">
            {" "}
            email address
          </a>
          <p className="inquiries_location"> Location: United States</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
