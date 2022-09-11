import React, { useEffect, useState } from "react";
import PaymentStatusRow from "./PaymentStatusRow";

const PaymentStatus = () => {
  const [packages, setPackages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/package/${user.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages]);
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
                    <th>Email</th>
                    <th>Make Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {packages?.map((package, index) => (
                    <PaymentStatusRow
                      key={package._id}
                      package={package}
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
