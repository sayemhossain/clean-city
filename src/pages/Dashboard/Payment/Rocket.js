import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bkash from "../../../img/bKash-Dial-Payment.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const Rocket = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/userpackage/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    const paymentNumber = e.target.number.value;
    const transId = e.target.transId.value;

    const nameOfMonth = order.nameOfMonth;
    const packageName = order.packageName;
    const price = order.price;
    const email = user.email;
    const name = user.displayName;

    const method = "Rocket";

    const paymentData = {
      nameOfMonth,
      paymentNumber,
      transId,
      packageName,
      price,
      email,
      name,
      method,
    };
    fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your payment is done..!");
      });
    e.target.reset();
  };
  return (
    <div>
      <div>
        <div class=" pt-10 bg-gray-100">
          <div className="text-center mb-4 ">
            <p className="text-xl font-semibold uppercase">
              Payment your money using Rocket
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Rocket Number: 01788-156221
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
            <div>
              <img
                src="https://1.bp.blogspot.com/-vW41yipXlLA/YBtuKfOpyaI/AAAAAAAACcg/LLTIN4BR8YEvvnDf57eStjNugOKZYztMgCLcBGAsYHQ/s16000/cz24-040221-page-003.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="bg-base-100 p-6">
                <form action="" onSubmit={handlePayment}>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex gap-2">
                      <div class="form-control w-full">
                        <label class="label">
                          <span class="label-text">Your Name</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value={user?.displayName}
                          class="input input-bordered w-full input-sm "
                        />
                      </div>
                      <div class="form-control w-full">
                        <label class="label">
                          <span class="label-text">Payment Method</span>
                        </label>
                        <input
                          type="text"
                          disabled
                          value="Rocket"
                          class="input input-bordered w-full input-sm "
                        />
                      </div>
                    </div>
                    <div class="form-control w-full">
                      <label class="label">
                        <span class="label-text">Your Email</span>
                      </label>
                      <input
                        type="text"
                        disabled
                        value={user?.email}
                        class="input input-bordered w-full input-sm "
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-x-5">
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Your bKash Number</span>
                        </label>
                        <input
                          type="text"
                          name="number"
                          required
                          placeholder="Your bKash Number"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                      <div class="form-control w-full  max-w-xs">
                        <label class="label">
                          <span class="label-text">Transaction ID </span>
                        </label>
                        <input
                          type="text"
                          name="transId"
                          required
                          placeholder="Trans Id"
                          class="input input-bordered w-full input-sm max-w-xs"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn  btn-sm w-full">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
