import React from "react";
import "./subscribeUserButton.css";

export default () => {
  return (
    <div className="user_container_subscribe">
      <div className="profile_picture">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          key="user_picture"
        />
      </div>
      <div className="name_subscribers">
        <p className="user_name">LoveMakeUp</p>
        <p className="user_subscribers">101 Subscribers</p>
      </div>
      <button className="subscribe_button">SUBSCRIBE</button>
    </div>
  );
};
