import React, { useState, useEffect } from "react";
import Channel from "../Channel/channel";
import axios from "axios";
import "./trendingChannels.css";

const TrendingChannels = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?gender=female&results=100")
      .then(data => {
        setUserList(data.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-channels">
      {userList.map(user => {
        return <Channel user={user} />;
      })}
    </div>
  );
};

export default TrendingChannels;
