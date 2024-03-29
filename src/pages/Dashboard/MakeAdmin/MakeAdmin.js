import React from "react";
import useUser from "../../../hooks/useUser";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const [users, setUsers] = useUser([]);

  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Make Admin
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content mt-5 md:px-10">
          <div className=" md:pb-10  p-2 bg-gray-100 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table table-compact w-full">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Email</th>
                    <th>Make Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <MakeAdminRow
                      key={user._id}
                      user={user}
                      index={index}
                    ></MakeAdminRow>
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

export default MakeAdmin;
