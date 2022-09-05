import React from "react";

const ManageContactContainer = ({ contact, index }) => {
  const { name, email, phone, subject, location, des } = contact;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{subject}</td>
      <td>{location}</td>
      <td>{des}</td>
    </tr>
  );
};

export default ManageContactContainer;
