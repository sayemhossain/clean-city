import React, { useEffect, useState } from "react";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <div className="md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
        {products.map((product) => (
          <ProductsContainer product={product}></ProductsContainer>
        ))}
      </div>
    </div>
  );
};

export default Products;
