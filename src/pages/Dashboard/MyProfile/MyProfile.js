import { faUser, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [userInfo, setUserInfo] = useState([]);

  const email = user?.email;
  const url = `http://localhost:5000/user/${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(user);
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        User Profile
      </h3>
      <hr />
      <div className="bg-primary flex justify-center md:pt-10 ">
        <div className="shadow-lg bg-gray-100 w-full md:mx-20 rounded-lg mb-10 pt-5 pb-10">
          <div className="text-center p-5">
            <div className="bg-primary w-28 h-28 ring-2 ring-offset-blue-100 rounded-full flex items-center justify-center mx-auto">
              <img className="rounded-full" src={user.photoURL} alt="" />
            </div>
            <h1 className="mt-2 text-xl uppercase">{user.displayName}</h1>
          </div>
          <div className="md:px-28 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user.displayName}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user.email}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Gender</span>
                </label>
                <input
                  type="text"
                  value={userInfo[0]?.gender}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Age</span>
                </label>
                <input
                  type="text"
                  value={userInfo[0]?.age}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Religion</span>
                </label>
                <input
                  type="text"
                  value={userInfo[0]?.religion}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Nationality</span>
                </label>
                <input
                  type="text"
                  value={userInfo[0]?.nationality}
                  disabled
                  class="input input-sm input-bordered  w-full "
                />
              </div>
              <div>
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    value={userInfo[0]?.phone}
                    disabled
                    class="input input-sm input-bordered  w-full "
                  />
                </div>
                <div class="form-control w-full mt-3">
                  <label class="label">
                    <span class="label-text">Profession</span>
                  </label>
                  <input
                    type="text"
                    value={userInfo[0]?.profession}
                    disabled
                    class="input input-sm input-bordered  w-full "
                  />
                </div>
              </div>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  value={userInfo[0]?.address}
                  disabled
                  class="input input-sm input-bordered h-28 w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
