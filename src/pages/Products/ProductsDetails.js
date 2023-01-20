import {
  faCartShopping,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faLocationPinLock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import Loading from "../../shared/Loading/Loading";
const ProductsDetails = () => {
  const params = window.location.href;
  const productId = params.split("/")[4];

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:5000/products/get-specific-products?productId=${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:px-20 md:py-10">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="shadow-lg rounded-lg  md:w-[900px] mx-auto">
          <div className="flex gap-4">
            <div className="overflow-hidden">
              <img
                className="rounded-l-lg hover:scale-150 duration-300 hover:cursor-grab hover:rounded-l-lg"
                src={blog[0].img}
                alt=""
              />
            </div>
            <div className="p-3">
              <h1 className="font-bold text-2xl text-gray-700">
                {blog[0]?.title}
              </h1>
              <div className="py-1">
                <p className="text-sm text-gray-400">
                  <FontAwesomeIcon
                    className="mr-1"
                    icon={faLocationArrow}
                  ></FontAwesomeIcon>
                  {blog[0]?.location}, {blog[0]?.address}
                </p>
              </div>
              <div className="flex gap-1 py-2">
                <FontAwesomeIcon
                  className="text-yellow-300 text-xs"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 text-xs"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 text-xs"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 text-xs"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-gray-200 text-xs"
                  icon={faStar}
                ></FontAwesomeIcon>
              </div>
              <p className="py-3 text-sm">{blog[0]?.des}</p>
              <div className="pt-10">
                <p className="font-semibold text-xl text-secondary">
                  MRP- <span>{blog[0]?.price} /-</span>
                </p>
              </div>
              <div className="pt-5 flex gap-2 items-center">
                <button className="btn btn-warning btn-sm rounded-full">
                  ORDER NOW
                </button>
                <div className="h-7 w-7 bg-secondary rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-white text-sm"
                    icon={faCartShopping}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
