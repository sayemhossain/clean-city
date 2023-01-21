import React from "react";

const OrderDetailsRow = ({ item }) => {
  return (
    <tr>
      <td className="text-xs">{item.title}</td>
      <td className="text-xs">{item.price}</td>
      <td className="text-xs">{item.category}</td>
      <td className="text-xs">{item.phoneNumber}</td>
      <td className="text-xs">{item.address}</td>
    </tr>
  );
};

export default OrderDetailsRow;
