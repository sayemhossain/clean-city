import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductsManagementRow = ({ product, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <button className="btn btn-xs btn-error text-white">
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={product.img} />
          </div>
        </div>
      </td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.location}</td>
      <td>{product.address}</td>
      <td>{product.des}</td>
      <td>{product.email}</td>
    </tr>
  );
};

export default ProductsManagementRow;
