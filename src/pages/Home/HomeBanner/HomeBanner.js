import React from "react";
import banner from "../../../img/banner.jpg";
const HomeBanner = () => {
  return (
    <div className="md:px-28 ">
      <div className="flex justify-between h-[450px] items-center">
        <div>
          <h1>
            Rececle Today <br /> For A Better Tomorrow
          </h1>
        </div>
        <div className="">
          <img
            className="w-[450px] rounded-2xl shadow-xl"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
