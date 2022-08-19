import {
  faAddressCard,
  faDumpster,
  faFontAwesome,
  faHandHoldingHand,
  faHandHoldingMedical,
  faHome,
  faListCheck,
  faSackDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import { auth } from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-50 max-w-[1540px] mx-auto">
      <div class="drawer  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div className="flex items-center justify-end md:justify-center">
            <h2
              className="text-4xl text-center pt-10 pb-3 text-base-400"
              style={{ fontFamily: "Teko" }}
            >
              <span className="text-lg text-secondary">
                Hello {user.displayName},
              </span>
              Welcome to your Dashboard
            </h2>
            <label
              for="dashboard-sidebar"
              class=" drawer-button pt-5 px-5 md:hidden"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>

          <ul class="menu p-4 bg-gray-100 overflow-y-auto w-48 md:w-72  shadow-2xl text-base-content">
            <li>
              <Link
                className="bg-secondary text-white uppercase"
                to="/dashboard/myprofile"
              >
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My Profile
              </Link>
            </li>
            <li>
              <Link className="" to="/dashboard/myorders">
                <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> Sell
                product
              </Link>
            </li>
            <li>
              <Link className="" to="/dashboard">
                <FontAwesomeIcon icon={faHandHoldingHand}></FontAwesomeIcon>
                Donate Product
              </Link>
            </li>
            <li>
              <Link className="" to="/dashboard">
                <FontAwesomeIcon icon={faDumpster}></FontAwesomeIcon> House
                Waste
              </Link>
            </li>
            <li>
              <Link className="" to="/dashboard">
                <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon> Order
                History
              </Link>
            </li>
            <li>
              <Link className="" to="/dashboard/accountsettings">
                <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon> Account
                Setting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;