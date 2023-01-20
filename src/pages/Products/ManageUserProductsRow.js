import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ManageUserProductsRow = ({ product }) => {
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(
        `http://localhost:5000/products/delete-specific-user-products?id=${id}`
      )
        .then((res) => res.json())
        .then((data) => toast("Delete Successfully !"));
    }
  };

  return (
    <div className="hover:shadow-lg">
      <div className="h-32 md:w-full overflow-hidden">
        <img className="md:w-full" src={product.img} alt="" />
      </div>
      <div className="p-2 relative h-32">
        <h3 className="text-xs">
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </h3>
        <p className="text-xs text-gray-400 mt-2">
          <small>
            {product.des.length > 60
              ? product.des.slice(0, 60) + "..."
              : product.des}
          </small>
        </p>
        <div className="absolute bottom-2">
          <div className="text-center gap-3  flex justify-between items-center mt-2">
            <p className="text-red-400 font-semibold">${product.price}</p>
            <button className="btn btn-xs btn-secondary rounded-full normal-case">
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="bg-error text-white  px-4 py-1 flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon
                className="text-white mr-2"
                icon={faTrashCan}
              ></FontAwesomeIcon>
              Delete
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ManageUserProductsRow;
