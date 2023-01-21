import {
  faMinus,
  faMinusCircle,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const CartRow = ({ product, index, cartItems, setCartItems }) => {
  const handleDeleteFromCart = (id) => {
    const arr = cartItems.filter((item) => item._id != id);
    setCartItems(arr);
  };

  return (
    <div className="">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-16 rounded-md">
              <img src={product.img} />
            </div>
          </div>
          <div>
            <p>{product.title}</p>
          </div>
        </div>
        <div>{product.price}</div>
        <div
          onClick={() => handleDeleteFromCart(product._id)}
          className="w-7 h-7 bg-error rounded-full items-center justify-center flex text-white cursor-pointer"
        >
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
