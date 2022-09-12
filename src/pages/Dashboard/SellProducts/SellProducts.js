import React from "react";

const SellProducts = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-20 md:mt-7">
            <div className=" bg-gray-100 rounded-lg p-2">
              <img
                className="rounded-lg"
                src="https://cdn.cheapism.com/images/Vintage_Items_to_Sell.max-784x410.jpg"
                alt=""
              />
            </div>
            <div className="bg-gray-100 p-5">
              <form action="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter product name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter price"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text">Choose Product Cetagory</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select Cetagory
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
