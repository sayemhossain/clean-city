import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const SellProducts = () => {
  const [user] = useAuthState(auth);
  const email = user.email;

  const handleSell = (e) => {
    e.preventDefault();

    const pname = e.target.pname.value;
    const phone = e.target.phone.value;
    const price = e.target.price.value;
    const address = e.target.address.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    const productData = {
      pname,
      email,
      phone,
      price,
      address,
      category,
      description,
    };
    fetch(`https://secure-wildwood-53933.herokuapp.com/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Post Success..!");
      });

    e.target.reset();
  };
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Sell Your Products
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="bg-gray-100 p-5 rounded-lg w-full md:w-[700px]">
            <form action="" onSubmit={handleSell}>
              <div className="flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="pname"
                    placeholder="Enter product name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled
                    value={email}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Choose Product Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Select category
                  </option>
                  <option>Stationery</option>
                  <option>Electronics</option>
                  <option>Plastics</option>
                  <option>Metal</option>
                  <option>Used Books</option>
                  <option>Papers</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="phone"
                    placeholder="Enter your number"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="Enter product price"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input
                    type="file"
                    name="name"
                    placeholder="Enter product name"
                    className="input input-bordered w-full pt-1.5"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    placeholder="Enter your full address"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  required
                  className="textarea w-full h-32"
                  placeholder="Enter product description"
                ></textarea>
              </div>
              <div className="mt-5">
                <button type="submit" className="btn btn-secondary w-full">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
