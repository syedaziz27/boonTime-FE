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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:3004/user/products`, {
    //     params: {
    //       id: 1
    //     }
    //   })
    //   .then(data => {
    //     setProducts(data.data);
    //   })
    //   .catch(error => {
    //     throw new Error("No data");
    //   });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("toggle") == "true") {
      return setToggleVideoAndProducts(true);
    } else if (localStorage.getItem("toggle") == "false") {
      return setToggleVideoAndProducts(false);
    }
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
      {toggleVideoAndProducts ? (
        <Products products={products} />
      ) : (
        <RecommendedVideo />
      )}
      <UserProfile />
    </div>
  );
};

export default VloggersPage;
