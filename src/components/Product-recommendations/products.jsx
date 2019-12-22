import React, { useState } from "react";
import Product from "./product/product";
import "./products.css";
import UserProfile from "../UserProfile/UserProfile";

const Products = () => {
  const [] = useState([]);
  return (
    <>
      <div className="products-container">
        <br />
        <div className="select-items">
          <select className="select_products">
            <option value="none" selected disabled hidden>
              Filter By
            </option>
            <option>h</option>
            <option>a</option>
          </select>
          <p className="num_products">57 Products</p>
        </div>
        <hr className="products-start-line" />
        <br />
        <Product />
      </div>
      {/* <UserProfile /> */}
    </>
  );
};

export default Products;
