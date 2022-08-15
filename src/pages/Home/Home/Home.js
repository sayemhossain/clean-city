import React from "react";
import Branding from "../Branding/Branding";
import HomeBanner from "../HomeBanner/HomeBanner";
import LatestNews from "../LatestNews/LatestNews";
import WhyUs from "../WhyUs/WhyUs";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Branding></Branding>
      <WhyUs></WhyUs>
      <LatestNews></LatestNews>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
