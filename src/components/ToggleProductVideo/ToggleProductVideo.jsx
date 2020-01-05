import React from "react";
import "./ToggleProductVideo.css";

const ToggleProductVideo = ({
  toggleVideoAndProducts,
  setToggleVideoAndProducts
}) => {
  return (
    <div className="toggle_searchbar">
      <div className="toggleProductVideo_container">
        <div
          className={`${
            !toggleVideoAndProducts
              ? `addColor video_container`
              : `video_container`
          }`}
          onClick={() => setToggleVideoAndProducts(false)}
        >
          <p className="video_btn">Videos</p>
        </div>
        <div
          className={`${
            toggleVideoAndProducts
              ? `addColor product_container`
              : `product_container`
          }`}
          onClick={() => setToggleVideoAndProducts(true)}
        >
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
