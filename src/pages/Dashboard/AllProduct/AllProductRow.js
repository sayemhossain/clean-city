import React from "react";

const AllUserRow = ({ product, index }) => {
  const { pname, email, phone, price, address, category, description } =
    product;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{pname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{price}</td>
      <td>{address}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-secondary btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default AllUserRow;
