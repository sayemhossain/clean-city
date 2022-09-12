import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentContainer = ({ payment, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{payment.email}</td>
      <td>{payment.paymentNumber}</td>
      <td>{payment.method}</td>
      <td>{payment.transId}</td>
      <td>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            className="text-green-400"
            icon={faCircleCheck}
          ></FontAwesomeIcon>
          <p>Paid</p>
        </div>
      </td>
    </tr>
  );
};

export default PaymentContainer;
