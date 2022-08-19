import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../../firebase.init";

const AccountSettings = () => {
  const [user] = useAuthState(auth);

  const handleUpdate = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const gender = e.target.gender.value;
    const age = e.target.age.value;
    const religion = e.target.religion.value;
    const nationality = e.target.nationality.value;
    const profession = e.target.profession.value;

    const email = user?.email;
    const userInfo = {
      phone,
      gender,
      address,
      age,
      religion,
      nationality,
      profession,
    };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Profile Updated");
      });
    e.target.reset();
  };

  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Account Settings
        </h3>
        <hr />
        <div className="bg-primary  flex justify-center md:pt-10 ">
          <div className="shadow-lgrounded-lg bg-gray-100 w-full mx-20 rounded-lg mb-10 pt-5 pb-10">
            <form action="" onSubmit={handleUpdate}>
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
                      <span class="label-text">Your Gender</span>
                    </label>
                    <input
                      type="text"
                      name="gender"
                      required
                      placeholder="Your Gender"
                      class="input input-sm input-bordered  w-full "
                    />
                  </div>
                  <div class="form-control w-full ">
                    <label class="label">
                      <span class="label-text">Your Age</span>
                    </label>
                    <input
                      type="text"
                      name="age"
                      required
                      placeholder="Your Age"
                      class="input input-sm input-bordered  w-full "
                    />
                  </div>
                  <div class="form-control w-full">
                    <label class="label">
                      <span class="label-text">Your Religion</span>
                    </label>
                    <input
                      type="text"
                      name="religion"
                      required
                      placeholder="Your Religion"
                      class="input input-sm input-bordered  w-full "
                    />
                  </div>
                  <div class="form-control w-full ">
                    <label class="label">
                      <span class="label-text">Your Nationality</span>
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      required
                      placeholder="Your Nationality"
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
                        name="phone"
                        required
                        placeholder="Your Phone Number"
                        class="input input-sm input-bordered  w-full "
                      />
                    </div>
                    <div class="form-control w-full mt-3">
                      <label class="label">
                        <span class="label-text">Your Profession</span>
                      </label>
                      <input
                        type="text"
                        name="profession"
                        required
                        placeholder="Your Profession"
                        class="input input-sm input-bordered  w-full "
                      />
                    </div>
                  </div>
                  <div class="form-control w-full ">
                    <label class="label">
                      <span class="label-text">Your Address</span>
                    </label>
                    <textarea
                      type="text"
                      name="address"
                      placeholder="Your Address"
                      required
                      class="input input-sm input-bordered h-28 w-full "
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-sm btn-secondary px-5 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AccountSettings;
