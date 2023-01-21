import React from "react";
import { Link } from "react-router-dom";
import CartRow from "./CartRow";

const Cart = ({ cartItems, setCartItems }) => {
  const LocalCartItem = localStorage.getItem("cartItem");
  const items = JSON.parse(LocalCartItem);
  return (
    <div className="md:py-20">
      <div className="w-[600px] min-h-[350px] shadow-lg flex flex-col mx-auto gap-4 p-5 ">
        <p className="pb-5 text-xl font-semibold text-gray-600 text-center">
          Shopping Cart
        </p>
        {cartItems.map((product, index) => (
          <CartRow
            setCartItems={setCartItems}
            cartItems={cartItems}
            key={index}
            index={index}
            product={product}
          />
        ))}
        <div className="text-center">
          <Link
            to="/checkout"
            className="btn btn-sm normal-case btn-secondary mt-5 px-5 text-white"
          >
            Go To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
