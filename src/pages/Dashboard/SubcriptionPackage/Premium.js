import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import standardImg from "../../../img/standardImg.png";

const Premium = () => {
  const [user] = useAuthState(auth);
  const nameOfMonth = new Date().toLocaleString("default", { month: "long" });
  const price = 499;
  const packageName = "Premium";

  const handlePackage = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const email = user.email;

    const packageData = { name, email, nameOfMonth, packageName, price };

    fetch(`http://localhost:5000/package`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
      .then((res) => res.json())
      .then((data) =>
        alert("Subcription pending... Please make payment first !")
      );
    e.target.reset();
  };
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Basic Subcribtion
      </h3>
      <hr />
      <div class="drawer drawer-mobile py-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="grid md:flex gap-10 grid-cols-1 md:grid-cols-2">
            <div>
              <img
                src="https://www.metrolocalmedia.com/wp-content/uploads/2018/11/metrolocalmedia-premium-logo.png"
                alt=""
              />
            </div>
            <div className="bg-gray-100 p-10">
              <form action="" onSubmit={handlePackage}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={user.displayName}
                      disabled
                      placeholder="Type here"
                      className="input w-full rounded-none"
                    />
                    <input
                      type="text"
                      value={packageName}
                      disabled
                      placeholder="Type here"
                      className="input w-full rounded-none"
                    />
                  </div>
                  <input
                    type="text"
                    value={user.email}
                    disabled
                    placeholder="Type here"
                    className="input w-full rounded-none"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={nameOfMonth}
                      disabled
                      placeholder="Phone Number"
                      className="input w-full rounded-none"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={price + " Taka"}
                      disabled
                      placeholder="Phone Number"
                      className="input w-full rounded-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary w-full rounded-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
