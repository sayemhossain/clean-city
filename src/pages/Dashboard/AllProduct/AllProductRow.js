import React from "react";

const AllUserRow = ({ product, index }) => {
  const { title, email, phone, price, address, category, des } = product;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{address}</td>
      <td>{category}</td>
      <td>{des}</td>
      <td>
        <button className="btn btn-error btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default AllUserRow;
