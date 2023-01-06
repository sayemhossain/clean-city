import {
  faAngleDown,
  faShoppingCart,
  faTrashCan,
  faTrashCanArrowUp,
  faTrashRestore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import logo from "../../img/logo.png";
import SupNavbar from "./SupNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="shadow-md">
      <div className="hidden md:block">
        <SupNavbar></SupNavbar>
      </div>
      <div class="navbar bg-base-100 md:py-5 md:px-16">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link className="flex gap-1 items-center" to="/">
            <img className="w-8 h-8" src={logo} alt="" />
            <span className="text-xl uppercase font-semibold">E-Hawkar</span>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">
                <div
                  className="tooltip tooltip-open tooltip-warning  tooltip-right"
                  data-tip="0"
                >
                  <FontAwesomeIcon
                    className="text-gray-600"
                    icon={faShoppingCart}
                  ></FontAwesomeIcon>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="flex">
                <p className="w-6 h-6 ring-2 rounded-full flex items-center justify-center">
                  <img className="rounded-full" src={user.photoURL} alt="" />
                </p>
                <div className="flex items-center gap-2">
                  <p className="ml-2 font-semibold uppercase hover:cursor-pointer">
                    {user ? user.displayName : "Unknown user"}
                  </p>
                  <FontAwesomeIcon
                    className="text-sm text-secondary"
                    icon={faAngleDown}
                  ></FontAwesomeIcon>
                </div>
              </label>
              <ul
                tabindex="0"
                class="mr-[-4rem] mt-2 dropdown-content menu p-2 shadow bg-primary rounded-md w-52 text-gray-800 "
              >
                <li>
                  <Link to="/">Profile Settings</Link>
                </li>

                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <p onClick={logout}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                class="border-2 border-gray-800 rounded-full py-1.5 px-7 hidden md:block mr-5 font-semibold hover:bg-secondary hover:text-white duration-300 hover:border-secondary hover:cursor-pointer"
              >
                Login
              </Link>{" "}
              <Link
                to="/signup"
                class="bg-secondary text-white rounded-full py-2 px-7 hover:cursor-pointer"
              >
                Join Now
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
