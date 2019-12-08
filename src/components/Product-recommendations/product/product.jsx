import React from "react";
import "./product.css";

const product = () => {
  return (
    <>
      <div className="product-container">
        <div className="product-container-img-btn">
          <img
            src="https://www.sephora.com/productimages/sku/s2288090-main-zoom.jpg"
            style={{ width: 127 }}
            className="product-container-img"
          />
          <button className="product-container-btn">SHOP NOW</button>
        </div>
        <div className="product-container-review-productInfo">
          <div className="product-container-title">
            <div className="dateName">
              <p className="product-container-name">Product Name:</p>
              <p className="product-date">16 Nov 2019</p>
            </div>
            <p className="product-container-name-info">
              Nude Obsessions Eyeshadow Palette
            </p>
          </div>
          <br />
          <div className="product-container-rev">
            <p className="product-container-review">Review:</p>
            <p className="product-container-review-info">
              Perfect mini nude palette. Love the tones in the medium palette.
              The shimmers complement brown eyes really well and the quality is
              the same great formula it always is! I will most likely buy the
              rich one as well & I enjoy the new packaging.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default product;
