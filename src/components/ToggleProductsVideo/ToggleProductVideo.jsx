import React from "react";
import "./ToggleProductVideo.css";

const ToggleProductVideo = boolean => {
  return (
    <div className="toggle_searchbar">
      <div className="toggleProductVideo_container">
        <div className="video_container">
          <p className="video_btn">Videos</p>
        </div>
        <div className="product_container">
          <p className="product_btn">
            Product <br /> Recommendations
          </p>
        </div>
      </div>
      <div className="searchBar_container">
        <input className="productsVideos" placeholder="SEARCH PRODUCTS" />
      </div>
    </div>
  );
};

export default ToggleProductVideo;
