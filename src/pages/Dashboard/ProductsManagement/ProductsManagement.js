import React, { useEffect, useState } from "react";
import Loading from "../../../shared/Loading/Loading";
import ProductsManagementRow from "./ProductsManagementRow";

const ProductsManagement = () => {
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
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Products Management
        </h3>
      </div>
      <hr className="mb-5" />
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-primary md:py-10 md:px-10 ">
          <div className="bg-gray-100 p-5 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table table-compact w-full ">
                <thead>
                  <tr className="bg-primary">
                    <th>No.</th>
                    <th className="text-start text-xs">Delete</th>
                    <th className="text-start text-xs">Image</th>
                    <th className="text-start text-xs">Title</th>
                    <th className="text-start text-xs">Category</th>
                    <th className="text-start text-xs">Location</th>
                    <th className="text-start text-xs">Address</th>
                    <th className="text-start text-xs">User Email</th>
                    <th className="text-start text-xs">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product, index) => (
                    <ProductsManagementRow
                      key={product._id}
                      product={product}
                      index={index}
                    ></ProductsManagementRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsManagement;
