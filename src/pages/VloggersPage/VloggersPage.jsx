import React, { useState } from "react";
import Products from "../../components/Product-recommendations/products";
import "./VloggersPage.css";
import UserProfile from "../../components/UserProfile/UserProfile";
import ToggleProductVideo from "../../components/ToggleProductVideo/ToggleProductVideo";
import RecommendedVideo from "../../components/RecommendVideo/RecommendedVideo";
const VloggersPage = () => {
  const [toggleVideoAndProducts, setToggleVideoAndProducts] = useState(false);

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
