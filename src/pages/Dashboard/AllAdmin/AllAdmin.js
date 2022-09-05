import React from "react";
import useAllAdmin from "../../../hooks/useAllAdmin";
import AllAdminRow from "./AllAdminRow";

const AllAdmin = () => {
  const [admins] = useAllAdmin([]);

  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        All Admin
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10 bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="md:w-[800px] md:pb-10 p-2 bg-gray-100 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Email</th>
                    <th>Remove Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {admins?.map((admin, index) => (
                    <AllAdminRow
                      key={admin._id}
                      admin={admin}
                      index={index}
                    ></AllAdminRow>
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

export default AllAdmin;
