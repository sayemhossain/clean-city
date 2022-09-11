import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import PaymentStatusRow from "./PaymentStatusRow";

const PaymentStatus = () => {
  const [userPackages, setUserPackages] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/userpackage/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUserPackages(data));
  }, []);
  console.log(userPackages);
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Your Packages
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="md:w-[800px] md:pb-10  p-2 bg-gray-100 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table table-compact w-full">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Name Of Month</th>
                    <th>Package Name</th>
                    <th>Price</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {userPackages?.map((userPackage, index) => (
                    <PaymentStatusRow
                      key={userPackage._id}
                      userPackage={userPackage}
                      index={index}
                    ></PaymentStatusRow>
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

export default PaymentStatus;
