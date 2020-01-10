import React from "react";
import "./ViewVideoPage.css";
import TitleVideo from "../../components/Title&Video/titleVideo";
import SubscribeUserButton from "../../components/subscribeUserButton/subscribeUserButton";

const ViewVideoPage = () => {
  return (
    <div className="videoViewPage_container">
      <TitleVideo />
      <div className="videoContent">
        <SubscribeUserButton />
      </div>
    </div>
  );
};

export default ViewVideoPage;
