import React from "react";
import { Link, Outlet } from "react-router-dom";
import whyUsImg from "../../../img/whyUs-img.jpg";
import CustomLinkTwo from "../../../shared/CustomLinkTwo/CustomLinkTwo";

const WhyUs = () => {
  return (
    <div className="md:px-28 px-5 md:py-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start">
            Few Reasons Why You Choose Us To Protect Nature!
          </h1>
          <div className="mt-10">
            <nav>
              <div className="grid grid-cols-3 gap-2 md:gap-5">
                <CustomLinkTwo
                  className="uppercase p-2 md:p-3 text-center text-xs md:text-base font-semibold"
                  to="ourmission"
                >
                  Our Mission
                </CustomLinkTwo>
                <CustomLinkTwo
                  className="uppercase p-2 md:p-3 text-center text-xs md:text-base font-semibold"
                  to="ourvision"
                >
                  Our Vision
                </CustomLinkTwo>
                <CustomLinkTwo
                  className="uppercase p-2 md:p-3 text-center text-xs md:text-base font-semibold"
                  to="/ourhistory"
                >
                  Our History
                </CustomLinkTwo>
              </div>
            </nav>
            <div className="mt-5 md:mt-0">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full rounded-lg shadow-xl md:h-[540px]"
            src={whyUsImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
