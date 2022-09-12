import React from "react";
import useProduct from "../../../hooks/useProduct";
import AllUserRow from "./AllProductRow";

const AllProduct = () => {
  const [products] = useProduct([]);
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        All Product
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="md:w-[800px] md:pb-10  p-2 bg-gray-100 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table-compact w-full">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Price</th>
                    <th>Address</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Delete Product</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product, index) => (
                    <AllUserRow
                      key={product._id}
                      product={product}
                      index={index}
                    ></AllUserRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
