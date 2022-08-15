import React from "react";
import Branding from "../Branding/Branding";
import HomeBanner from "../HomeBanner/HomeBanner";
import LatestNews from "../LatestNews/LatestNews";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Branding></Branding>
      <WhyUs></WhyUs>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
