import React, { useEffect, useState } from "react";
import ManageContactContainer from "./ManageContactContainer";

const ManageContact = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(`https://secure-wildwood-53933.herokuapp.com/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Contact Message
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="bg-primary md:py-10 md:px-20 ">
        <div className="bg-gray-100 p-5 rounded-lg">
          <div class="overflow-x-auto">
            <table class="table-compact table-zebra w-full ">
              <thead>
                <tr className="bg-primary">
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Subject</th>
                  <th>Location</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <ManageContactContainer
                    key={contact._id}
                    contact={contact}
                    index={index}
                  ></ManageContactContainer>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;
