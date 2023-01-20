import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const SellProducts = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [img, setImg] = useState("");

  const convert2Base64 = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.onloadend = () => {
      setImg(render.result.toString());
    };
    render.readAsDataURL(file);
  };

  const handleSell = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;

    const phoneNumber = e.target.phoneNumber.value;
    const location = e.target.location.value;
    const address = e.target.address.value;
    const des = e.target.des.value;
    const category = e.target.category.value;

    const productData = {
      title,
      img,
      price,
      category,
      location,
      address,
      des,
      email,
      phoneNumber,
    };
    fetch(`http://localhost:5000/products`, {
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
      <div className="flex justify-center py-10">
        <div className="bg-gray-100 p-5 rounded-lg w-full md:w-[700px]">
          <form action="" onSubmit={handleSell}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="title"
                  placeholder="Enter product name"
                  className="input input-bordered w-full"
                />
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
                  <option>Furniture</option>
                  <option>Stationery</option>
                  <option>Electronics</option>
                  <option>Plastics</option>
                  <option>Metal</option>
                  <option>Used Books</option>
                  <option>Papers</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  name="name"
                  placeholder="Enter product name"
                  className="input input-bordered w-full pt-1.5"
                  onChange={(e) => convert2Base64(e)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="">
                <label className="label">
                  <span className="label-text">Select Your Location</span>
                </label>
                <select
                  name="location"
                  className="select select-bordered w-full overflow-y-scroll"
                >
                  <option disabled selected>
                    Select Location
                  </option>
                  <option>Dhaka</option>
                  <option>Rajshahi</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                  <option>Rangpur</option>
                  <option>Pabna</option>
                  <option>Noakhali</option>
                  <option>Comilla</option>
                  <option>Habiganj</option>
                  <option>Barisal</option>
                  <option>Mymensingh</option>
                  <option>Khulna</option>
                  <option>Jessore</option>
                  <option>Dinajpur</option>
                  <option>Bogra</option>
                  <option>Faridpur</option>
                  <option>Rangamati</option>
                  <option>Kushtia</option>
                  <option>Tangail</option>
                  <option>Panchagarh</option>
                  <option>Bhola</option>
                  <option>Bandarban</option>
                  <option>Chandpur</option>
                  <option>Lakshmipur</option>
                  <option>Barguna</option>
                  <option>Jhalokati</option>
                  <option>Pirojpur</option>
                  <option>Patuakhali</option>
                  <option>Narial</option>
                  <option>Magura</option>
                  <option>Nilphamari</option>
                  <option>Gaibandha</option>
                  <option>Meherpur</option>
                </select>
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
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  required
                  name="phoneNumber"
                  placeholder="Enter your number"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="des"
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
  );
};

export default SellProducts;
