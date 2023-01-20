import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productsDetails = () => {
  const params = window.location.href;
  const productId = params.split("/")[4];

  //   const [blog, setBlog] = useState({});
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/products/${productId}`)
  //       .then((res) => res.json())
  //       .then((data) => setBlog(data));
  //   }, []);

  return <div></div>;
};

export default productsDetails;
