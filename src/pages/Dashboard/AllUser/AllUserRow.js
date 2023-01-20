import React from "react";
import { faBan, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const AllUserRow = ({ user, index }) => {
  const { email, role, subRole } = user;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-error">
          <FontAwesomeIcon
            className="text-white "
            icon={faBan}
          ></FontAwesomeIcon>
        </div>
      </td>
      <td>{email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.religion}</td>
      <td>{user.nationality}</td>
      <td>{user.profession}</td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default AllUserRow;
