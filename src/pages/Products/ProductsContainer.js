import React from "react";

const ProductsContainer = ({ product }) => {
  return (
    <div className="hover:shadow-lg">
      <div className="h-32 w-full overflow-hidden">
        <img className="w-screen" src={product.img} alt="" />
      </div>
      <div className="p-2 relative h-32">
        <h3 className="text-sm">
          {product.title.length > 25
            ? product.title.slice(0, 25) + "..."
            : product.title}
        </h3>
        <p className="text-xs text-gray-400 mt-2">
          <small>
            {product.des.length > 50
              ? product.des.slice(0, 50) + "..."
              : product.des}
          </small>
        </p>
        <div className="absolute bottom-2">
          <div className="text-center gap-5  flex justify-between mt-2">
            <p className="text-red-400 font-semibold">${product.price}</p>
            <button className="btn btn-xs btn-secondary rounded-full">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
