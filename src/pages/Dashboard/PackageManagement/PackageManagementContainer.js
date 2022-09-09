import React from "react";

const PackageManagementContainer = ({ packageOrder, index }) => {
  const { name, email, nameOfMonth, packageName, price } = packageOrder;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{nameOfMonth}</td>
      <td>{packageName}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-xs">Confirm</button>
      </td>
    </tr>
  );
};

export default PackageManagementContainer;
