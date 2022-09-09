import React, { useEffect, useState } from "react";
import PackageManagementContainer from "./PackageManagementContainer";

const PackageManagement = () => {
  const [packageOrders, setPackageOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/package`)
      .then((res) => res.json())
      .then((data) => setPackageOrders(data));
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
                  <th>Name Of Month</th>
                  <th>Package Name</th>
                  <th>Price</th>
                  <th>Payment Statu</th>
                </tr>
              </thead>
              <tbody>
                {packageOrders?.map((packageOrder, index) => (
                  <PackageManagementContainer
                    key={packageOrder._id}
                    packageOrder={packageOrder}
                    index={index}
                  ></PackageManagementContainer>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageManagement;
