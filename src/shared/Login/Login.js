import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import googleLogo from "../../img/google.svg";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-5 md:px-28 my-10">
        <div className="shadow-lg p-5 w-96 rounded-lg">
          <div className="mb-5">
            <div className="mb-5">
              <img className="w-20 mx-auto" src={logo} alt="" />
              <h1 className="text-center mt-2 text-2xl font-bold">
                Welcome Back
              </h1>
            </div>
            <div className="w-full shadow-md rounded-md p-2.5 flex items-center justify-center gap-3">
              <img src={googleLogo} alt="" />
              <p className="">Continue With Google</p>
            </div>
          </div>
          <div class="divider mt-2">OR</div>
          <div className="">
            <form action="">
              <div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="Your Password"
                    required
                    class="input input-md rounded-md input-bordered w-full"
                  />
                </div>
                <div>
                  <button className="btn w-full mt-5 rounded-md btn-secondary text-white">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">
              New in Clean City?{" "}
              <Link className="text-secondary underline" to="/signup">
                Signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
