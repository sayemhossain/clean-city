import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg";
import googleLogo from "../../img/google.svg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import useToken from "../../hooks/useToken";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const [token] = useToken(user || googleUser);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast("Reset email send!");
  };

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-gray-800 text-xs mt-2 px-3">
          User or password are not valid!
          <span
            onClick={resetPassword}
            className="text-orange-400 ml-1 cursor-pointer underline"
          >
            Forget password?
          </span>
        </p>
      </div>
    );
  }
  if (token) {
    navigate("/");
  }

  return (
    <div>
      <div className="flex justify-center items-center px-5 md:px-28 my-10">
        <div className="shadow-lg p-5 w-96 rounded-lg">
          <div className="mb-5">
            <div className="mb-5">
              <h3 className="text-center">
                <FontAwesomeIcon
                  className="text-xl text-secondary "
                  icon={faTrashCan}
                ></FontAwesomeIcon>{" "}
                <span className="text-sm uppercase font-semibold">
                  Clean City
                </span>
              </h3>
              <h1 className="text-center mt-2 text-2xl font-bold">
                Welcome Back
              </h1>
            </div>
            <div
              onClick={() => signInWithGoogle()}
              className="w-full shadow-md rounded-md p-2.5 flex items-center justify-center gap-3  hover:cursor-pointer bg-gray-50 hover:shadow-sm duration-300"
            >
              <img src={googleLogo} alt="" />
              <p className="">Continue With Google</p>
            </div>
          </div>
          <div class="divider mt-2">OR</div>
          <div className="">
            <form action="" onSubmit={handleLogin}>
              <div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
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
                    ref={passwordRef}
                    placeholder="Your Password"
                    required
                    class="input input-md rounded-md input-bordered w-full"
                  />
                </div>
                {errorElement}
                <div>
                  <button
                    type="submit"
                    className="btn w-full mt-5 rounded-md btn-secondary text-white"
                  >
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
