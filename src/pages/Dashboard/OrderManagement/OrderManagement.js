import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../../shared/Loading/Loading";
import OrderManagementRow from "./OrderManagementRow";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);
  console.log(orders);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Order History
        </h3>
      </div>
      <hr className="mb-5" />
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-primary md:py-10 md:px-10 ">
          <div className="bg-gray-100 p-5 rounded-lg">
            <div class="overflow-x-auto">
              <table class="table table-compact w-full ">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-start text-xs">No.</th>
                    <th className="text-start text-xs">Order Details</th>
                    <th className="text-start text-xs">Total Price</th>
                    <th className="text-start text-xs">Payment Method</th>
                    <th className="text-start text-xs">Payment Number</th>
                    <th className="text-start text-xs">Transaction Number</th>
                    <th className="text-start text-xs">shippingAddress</th>
                    <th className="text-start text-xs">Confirm Order</th>
                    <th className="text-start text-xs">Cancel Order</th>
                    <th className="text-start text-xs">Delete Order</th>
                    <th className="text-start text-xs">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, index) => (
                    <OrderManagementRow
                      key={order._id}
                      order={order}
                      index={index}
                    ></OrderManagementRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
