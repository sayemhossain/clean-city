import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const Basic = () => {
  const [user] = useAuthState(auth);
  const nameOfMonth = new Date().toLocaleString("default", { month: "long" });
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
                src="https://cdn.filestackcontent.com/pbMe99njQ6ea8tAfsg1Z"
                alt=""
              />
            </div>
            <div className="bg-gray-100 p-10">
              <form action="">
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
                      value="Basic"
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
                      placeholder="Phone Number"
                      className="input w-full rounded-none"
                    />
                  </div>
                  <button className="btn btn-secondary w-full rounded-none">
                    Subcribe
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

export default Basic;
