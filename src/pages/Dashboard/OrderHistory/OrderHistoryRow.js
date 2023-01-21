import {
  faCheckCircle,
  faTimesCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderHistoryRow = ({ order, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <button className="btn btn-xs btn-error text-white">
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </td>
      <td>{order.totalPrice}</td>
      <td>{order.paymentMethod}</td>
      <td>{order.paymentNumber}</td>
      <td>{order.transactionNumber}</td>
      <td>{order.shippingAddress}</td>
      <td>
        {order.status === "pending" ? (
          <p>
            <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon> Pending
          </p>
        ) : (
          <p>
            <FontAwesomeIcon
              className="text-green-400"
              icon={faCheckCircle}
            ></FontAwesomeIcon>{" "}
            Verified
          </p>
        )}
      </td>
    </tr>
  );
};

export default OrderHistoryRow;
