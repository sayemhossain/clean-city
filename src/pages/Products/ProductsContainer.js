import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContainer = ({ product, handleCart }) => {
  const { _id } = product;
  const navigate = useNavigate();

  const navigateToProductsDetails = (_id) => {
    navigate(`/products/${_id}`);
  };

  return (
    <div className="hover:shadow-lg">
      <div className="h-32 md:w-full overflow-hidden">
        <img className="md:w-full" src={product.img} alt="" />
      </div>
      <div className="p-2 relative h-32">
        <h3 onClick={() => navigateToProductsDetails(_id)} className="text-xs">
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </h3>
        <p className="text-xs text-gray-400 mt-2">
          <small>
            {product?.des.length > 60
              ? product?.des.slice(0, 60) + "..."
              : product?.des}
          </small>
        </p>
        <div className="absolute bottom-2">
          <div className="text-center gap-3  flex justify-between items-center mt-2">
            <p className="text-red-400 font-semibold">${product.price}</p>

            <button
              onClick={() => handleCart(product)}
              className="btn normal-case hover:text-white btn-xs btn-outline btn-secondary rounded-full px-3 cursor-pointer"
            >
              Add To Cart
              <FontAwesomeIcon
                className="text-secondary pl-1"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
