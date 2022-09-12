import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PaymentStatusRow = ({ userPackage, index }) => {
  const { _id, name, email, nameOfMonth, packageName, price } = userPackage;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{nameOfMonth}</td>
      <td>{packageName}</td>
      <td>{price} tk</td>
      <td>
        <Link to={`/dashboard/payment/${_id}`}>
          <div className="flex justify-center">
            <button className="btn btn-success px-8 btn-xs">pay</button>
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default PaymentStatusRow;
