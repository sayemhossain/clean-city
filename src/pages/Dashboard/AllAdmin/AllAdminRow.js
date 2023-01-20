import {
  faTrashCan,
  faTrashCanArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AllAdminRow = ({ admin, index }) => {
  const { email } = admin;
  const handleRemoveAdmin = () => {
    if (window.confirm("Are you sure ! You want to remove this admin?")) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Delete successfull.");
        });
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        <p
          onClick={handleRemoveAdmin}
          className="bg-error w-7 h-7 rounded-full flex justify-center items-center text-white hover:cursor-pointer hover:scale-95"
        >
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </p>
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default AllAdminRow;
