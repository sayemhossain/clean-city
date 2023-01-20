import React from "react";
import useUser from "../../../hooks/useUser";
import AllUserRow from "./AllUserRow";

const AllUser = () => {
  const [users, setUsers] = useUser([]);

  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        All User
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mt-5 md:px-10">
          <div className="md:pb-10  p-2 bg-gray-100 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table table-compact w-full">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Disable</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Religion</th>
                    <th>Nationality</th>
                    <th>Profession</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <AllUserRow
                      key={user._id}
                      user={user}
                      index={index}
                    ></AllUserRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
