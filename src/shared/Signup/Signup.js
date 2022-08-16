import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import googleLogo from "../../img/google.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [token] = useToken(user || googleUser);
  const handleSignup = async (e) => {
    e.preventDefault();

    // Read all input value from form for signup
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const fullName = firstName + " " + lastName;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(fullName);

    // for update name
    await updateProfile({ displayName: fullName });
    await createUserWithEmailAndPassword(email, password);
  };
  let errorElement;
  if (error || googleError) {
    errorElement = (
      <div>
        <p>
          <span className="text-primary ml-1">{error?.message}</span>
        </p>
      </div>
    );
  }
  if (token) {
    navigate("/dashboard");
  }
  return (
    <div>
      <div className="flex justify-center items-center px-5 md:px-28 my-10">
        <div className="shadow-lg p-5 w-96 rounded-lg">
          <div className="mb-5">
            <div className="mb-5">
              <img className="w-20 mx-auto" src={logo} alt="" />
              <h1 className="text-center mt-2 text-2xl font-bold">
                Create New Account
              </h1>
            </div>
            <div
              onClick={() => signInWithGoogle()}
              className="w-full shadow-md rounded-md p-2.5 flex items-center justify-center gap-3 hover:cursor-pointer bg-gray-50 hover:shadow-sm duration-300"
            >
              <img src={googleLogo} alt="" />
              <p className="">Continue With Google</p>
            </div>
          </div>
          <div class="divider mt-2">OR</div>
          <div className="">
            <form action="" onSubmit={handleSignup}>
              <div>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Your First Name"
                      class="input input-bordered rounded-md w-full"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Your last Name"
                      class="input input-md rounded-md input-bordered w-full"
                    />
                  </div>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email address"
                    class="input input-md rounded-md input-bordered w-full"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    required
                    class="input input-md rounded-md input-bordered w-full"
                  />
                </div>
                <div>
                  <button className="btn w-full mt-5 rounded-md btn-secondary text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">
              Already have an account?{" "}
              <Link className="text-secondary underline" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
