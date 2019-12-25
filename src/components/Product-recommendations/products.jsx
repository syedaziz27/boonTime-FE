import React, { useState } from "react";
import Product from "./product/product";
import "./products.css";
import arrow from "../../images/arrow.png";
import ToggleProductVideo from "../ToggleProductVideo/ToggleProductVideo";

const Products = () => {
  const [productsArr, setProductsArr] = useState([]);

  return (
    <>
      <div className="products-container">
        <div className="select-items">
          <img className="dropdown-arrow-2" src={arrow} />
          <select className="select_products">
            <option value="none" selected disabled hidden>
              Filter By
            </option>
            <option>Make-up</option>
            <option>Hair</option>
            <option>Skin</option>
            <option>Nails</option>
          </select>
          <p className="num_products">57 Products</p>
        </div>
        <hr className="products-start-line" />
        <br />
        {[1, 2, 3, 4].map(e => {
          return (
            <>
              <Product />
              <hr className="line_bwtn_products" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
