import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../firebase.init";

const Checkout = ({ cartItems, setCartItems }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  let totalPrice = 0;
  if (cartItems.length != 0) {
    const handleTotal = (cartItem) => {
      const cartPrice = cartItems
        .map((item) => item?.price)
        .reduce((prev, next) => parseInt(prev) + parseInt(next), 0);
      return cartPrice;
    };
    totalPrice = handleTotal(cartItems);
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    const paymentMethod = e.target.paymentMethod.value;
    const paymentNumber = e.target.paymentNumber.value;
    const transactionNumber = e.target.transactionNumber.value;
    const shippingAddress = e.target.shippingAddress.value;

    const orderDetails = {
      email,
      cartItems,
      totalPrice,
      paymentMethod,
      paymentNumber,
      transactionNumber,
      shippingAddress,
      status: "pending",
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Order placed, Please wait for verification !");
      });
    setCartItems([]);
    e.target.reset();
  };
  return (
    <div className="w-[500px] min-h-[400px] mx-auto shadow-lg md:my-10">
      <div className="p-5">
        <h1 className="text-center text-xl pb-2 font-semibold text-gray-600 uppercase">
          Summary
        </h1>
        <hr />
        <form className="pt-5" action="" onSubmit={handleCheckout}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  value={totalPrice}
                  disabled
                  className="input input-bordered w-full input-sm"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Payment Method</span>
                </label>
                <select
                  name="paymentMethod"
                  required
                  className="select select-sm select-bordered"
                >
                  <option disabled selected>
                    Select Payment Method
                  </option>
                  <option>bKash</option>
                  <option>Nagad</option>
                  <option>Rocket</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Payment Number</span>
                </label>
                <input
                  required
                  type="text"
                  name="paymentNumber"
                  placeholder="Enter your payment number"
                  className="input input-bordered w-full input-sm"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Transaction Number</span>
                </label>
                <input
                  type="text"
                  required
                  name="transactionNumber"
                  placeholder="Enter transaction number"
                  className="input input-bordered w-full input-sm"
                />
              </div>
            </div>
            <div className="pt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shipping Address</span>
                </label>
                <textarea
                  name="shippingAddress"
                  required
                  className="textarea textarea-bordered h-24"
                  placeholder="Enter shipping address"
                ></textarea>
              </div>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn btn-sm btn-outline btn-secondary px-5"
              >
                Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Checkout;
