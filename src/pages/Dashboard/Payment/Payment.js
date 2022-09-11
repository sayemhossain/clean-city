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
      <h3
        className="text-xl md:px-20 mt-5 text-center bg-base-100 "
        style={{ fontFamily: "Teko" }}
      >
        Payment
      </h3>
      <hr />
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
