import React from "react";
import "./channel.css";

const channel = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <div className="container-channel">
        <img
          src={user.picture.thumbnail}
          alt="user"
          className="container-channel_img"
        />
        <p className="container-channel-user_name">
          {user.name.first} {user.name.last}
        </p>
        <br />
        <p className="container-channel-user_product">{user.email}</p>
      </div>
    </>
  );
};

export default channel;
