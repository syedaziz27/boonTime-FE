import React from "react";
import Product from "./product/product";
import "./products.css";

const products = () => {
  return (
    <div className="products-container">
      <br />
      <hr className="products-start-line" />
      <br />

      <Product />
    </div>
  );
};

export default products;
