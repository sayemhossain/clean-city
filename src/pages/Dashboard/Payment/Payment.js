import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useParams } from "react-router-dom";
import { auth } from "../../../firebase.init";
import CustomLink from "../../../shared/CustomLink/CustomLink";

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  return (
    <div className=" md:px-20 pb-20 bg-base-100">
      <div className="text-center py-5">
        <h1
          className="text-xl font-bold uppercase text-blue-300"
          style={{ fontFamily: "Macondo" }}
        >
          Payment leaderboard
        </h1>
      </div>
      <div className="card bg-gray-500 text-gray-200 mb-3 rounded-none ">
        <div class=" p-2 flex items-center"></div>
      </div>
      <div className="mt-5">
        <nav className="text-center mb-10 flex justify-center">
          <CustomLink
            className="mr-5 uppercase font-semibold text-accent"
            to="bkash"
          >
            bKash
          </CustomLink>
          <CustomLink
            className=" ml-5 uppercase text-accent font-semibold"
            to="nagad"
          >
            Nagad
          </CustomLink>
          <CustomLink
            className=" ml-5 uppercase text-accent font-semibold"
            to="rocket"
          >
            Rocket
          </CustomLink>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Payment;
