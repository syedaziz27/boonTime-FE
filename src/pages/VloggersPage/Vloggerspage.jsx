import React from "react";
import Products from "../../components/Product-recommendations/products";
import "./Vloggerspage.css";
import UserProfile from "../../components/UserProfile/UserProfile";
import ToggleProductVideo from "../../components/ToggleProductVideo/ToggleProductVideo";
const VloggersPage = () => {
  return (
    <div className="product_video_container">
      <ToggleProductVideo />
      <Products />
      <UserProfile />
    </div>
  );
};

export default VloggersPage;
