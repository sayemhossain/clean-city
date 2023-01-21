import React, { useEffect, useState } from "react";
import Loading from "../../shared/Loading/Loading";
import ProductsContainer from "./ProductsContainer";

const Products = ({ handleCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="md:px-20 py-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {products.map((product) => (
              <ProductsContainer
                handleCart={handleCart}
                product={product}
              ></ProductsContainer>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
