import React from "react";
import Product from "./product/product";
import "./products.css";
import Card from "../Card/card";
import UserProfile from "../UserProfile/UserProfile";

const products = () => {
  return (
    <>
      <div className="products-container">
        <br />
        <hr className="products-start-line" />
        <br />
        <Product />
      </div>
      <UserProfile />
    </>
  );
};

export default products;
