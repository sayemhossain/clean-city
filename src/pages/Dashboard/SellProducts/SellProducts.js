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
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name Of Your Product</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="product name"
                    className="input input-bordered w-full max-w-xs"
                  />
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
