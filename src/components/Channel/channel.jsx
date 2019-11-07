import React from "react";
import "./channel.css";

const channel = ({ user }) => {
  if (!user) {
    return null;
  }
  console.log(user);
  return (
    <>
      <div className="container-channel">
        <img
          src={user.picture.thumbnail}
          alt="user"
          className="container-channel_img"
        />
        <div className="container-channel-info">
          <p className="container-channel-info_name">
            {user.name.first} {user.name.last}
            <br />
            {user.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default channel;
