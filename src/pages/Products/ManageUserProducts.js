import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import { auth } from "../../firebase.init";
import ManageUserProductsRow from "./ManageUserProductsRow";
import ProductsContainer from "./ProductsContainer";
import Loading from "../../shared/Loading/Loading";

const ManageUserProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch(
      `http://localhost:5000/products/get-specific-user-products?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [products]);

  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Manage Your Products
        </h3>
        <hr />
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="bg-primary md:px-10  flex justify-center md:py-10 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {products.map((product) => (
                <ManageUserProductsRow
                  product={product}
                ></ManageUserProductsRow>
              ))}
            </div>
          </div>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageUserProducts;
