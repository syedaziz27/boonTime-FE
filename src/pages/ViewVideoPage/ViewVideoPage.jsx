import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./ViewVideoPage.css";
import TitleVideo from "../../components/Title&Video/titleVideo";
import SubscribeUserButton from "../../components/subscribeUserButton/subscribeUserButton";
import ProductsUsedInVideo from "../../components/ProductsUsedInVideo/ProductsUsedInVideo";

const ViewVideoPage = () => {
  const [user, setUser] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {}, []);

  const handleCLick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="videoViewPage_container">
        <TitleVideo />

        <div className="videoContent">
          <SubscribeUserButton />
          <p>Category: Makeup</p>
          <p className="category">
            Watch as I put on my everyday makeup routine and for <br />
            an easy soft glam. <br /> <br />
            For daily updates you can also follow me on:
            <br /> <br />
            Instagram : @adamsLoveMakeup <br />
            Twitter : @adamsLoveMakeup
          </p>

          <div className="">
            {showMore ? (
              [1, 2, 3, 4, 5].map(() => {
                return <ProductsUsedInVideo />;
              })
            ) : (
              <ProductsUsedInVideo />
            )}
          </div>

          <button className="btn showMore" onClick={handleCLick}>
            Show More
          </button>

          <div>
            <p>Related Videos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVideoPage;
