import {
  faCheck,
  faCheckCircle,
  faCross,
  faMultiply,
  faTimesCircle,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OrderDetailsRow from "./OrderDetailsRow";

const OrderManagementRow = ({ order, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
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
      <td className="text-xs bg-slate-200 rounded-lg py-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="text-xs  text-start">
                  <small>Title</small>
                </th>
                <th className="text-xs text-start">
                  <small>Price</small>
                </th>
                <th className="text-xs text-start">
                  <small>Category</small>
                </th>
                <th className="text-xs text-start">
                  <small>Phone Number</small>
                </th>
                <th className="text-xs text-start">
                  <small>Address</small>
                </th>
              </tr>
            </thead>

            <tbody>
              {order.cartItems?.map((item) => (
                <OrderDetailsRow item={item}></OrderDetailsRow>
              ))}
            </tbody>
          </table>
        </div>
      </td>
      <td>{order.totalPrice}</td>
      <td>{order.paymentMethod}</td>
      <td>{order.paymentNumber}</td>
      <td>{order.transactionNumber}</td>
      <td>{order.shippingAddress}</td>
      <td>
        <div className="w-6 flex items-center justify-center rounded-md shadow-md h-6 bg-green-400 cursor-pointer text-white">
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        </div>
      </td>
      <td>
        <div className="w-6 flex items-center justify-center rounded-md shadow-md h-6 bg-red-400 cursor-pointer">
          <FontAwesomeIcon
            className="text-white"
            icon={faMultiply}
          ></FontAwesomeIcon>
        </div>
      </td>
      <td>
        <div className="w-6 flex items-center justify-center rounded-md shadow-md h-6 bg-red-400 cursor-pointer">
          <FontAwesomeIcon
            className="text-white"
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </div>
      </td>
    </tr>
  );
};

export default OrderManagementRow;
