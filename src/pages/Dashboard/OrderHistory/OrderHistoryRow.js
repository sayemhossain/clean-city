import {
  faCheckCircle,
  faClockRotateLeft,
  faMultiply,
  faTimesCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderHistoryRow = ({ order, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order.totalPrice}</td>
      <td>{order.paymentMethod}</td>
      <td>{order.paymentNumber}</td>
      <td>{order.transactionNumber}</td>
      <td>{order.shippingAddress}</td>
      <td>
        {order.status === "verified" ? (
          <p className="text-green-400">
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Verified
          </p>
        ) : order.status === "cancel" ? (
          <p className="text-red-400">
            <FontAwesomeIcon
              className="text-red-400"
              icon={faMultiply}
            ></FontAwesomeIcon>{" "}
            Cencel
          </p>
        ) : (
          <p className="text-yellow-400">
            <FontAwesomeIcon icon={faClockRotateLeft}></FontAwesomeIcon> Pending
          </p>
        )}
      </td>
    </tr>
  );
};

export default OrderHistoryRow;
