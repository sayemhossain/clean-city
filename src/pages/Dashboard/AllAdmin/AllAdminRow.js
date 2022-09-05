import {
  faTrashCan,
  faTrashCanArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AllAdminRow = ({ admin, index }) => {
  const { email } = admin;
  const handleRemoveAdmin = () => {};
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        <p
          onClick={handleRemoveAdmin}
          className="bg-secondary w-7 h-7 rounded-full flex justify-center items-center text-white"
        >
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </p>
      </td>
    </tr>
  );
};

export default AllAdminRow;
