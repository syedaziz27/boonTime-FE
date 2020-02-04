import React, { useState, useEffect } from "react";
import Products from "../../components/Product-recommendations/products";
import "./VloggersPage.css";
import UserProfile from "../../components/UserProfile/UserProfile";
import ToggleProductVideo from "../../components/ToggleProductVideo/ToggleProductVideo";
import RecommendedVideo from "../../components/RecommendVideo/RecommendedVideo";
import axios from "axios";

const VloggersPage = () => {
  const [toggleVideoAndProducts, setToggleVideoAndProducts] = useState(false);

  // IF I have a user pass uid into products and video
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/user/products`, {
        data: {
          id: 1
        }
      })
      .then(d => {
        console.log("datatatataat", d);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div
      className={`${
        toggleVideoAndProducts
          ? "product_video_container1"
          : "product_video_container2"
      }`}
    >
      <ToggleProductVideo
        toggleVideoAndProducts={toggleVideoAndProducts}
        setToggleVideoAndProducts={setToggleVideoAndProducts}
      />
      {toggleVideoAndProducts ? <Products /> : <RecommendedVideo />}
      <UserProfile />
    </div>
  );
};

export default VloggersPage;
