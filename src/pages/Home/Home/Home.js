import React from "react";
import Branding from "../Branding/Branding";
import HomeBanner from "../HomeBanner/HomeBanner";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Branding></Branding>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
