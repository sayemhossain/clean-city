import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PaymentStatusRow = ({ package, index }) => {
  const [deletingOrder, setDeletingOrder] = useState(false);
  const { _id, name, email, nameOfMonth, packageName, price } = package;

  const handleDeleteOrder = () => {
    fetch(`https://stark-shelf-45913.herokuapp.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Delete successfull.");
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{nameOfMonth}</td>
      <td>{packageName} tk</td>
      <td>{price} tk</td>
      <td>
        <Link to={`/dashboard/payment/${_id}`}>
          <div className="flex justify-center">
            <button className="btn btn-primary px-8 btn-xs">pay</button>
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default PaymentStatusRow;
