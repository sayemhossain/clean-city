import React from "react";
import banner from "../../../img/banner.jpg";
import Slider from "react-slick";
import banner2 from "../../../img/banner2.webp";
import banner3 from "../../../img/banner3.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="md:px-20 max-w-[1440px] mx-auto mt-5 px-5">
      <div>
        <Slider {...settings}>
          <div className="md:px-5">
            <div className="md:flex justify-between md:h-[450px] items-center text-gray-800 gap-5">
              <div>
                <h1 className="text-2xl md:text-4xl mb-2 font-semibold">
                  <span className="text-sm md:text-2xl text-secondary">
                    Rececle Today
                  </span>{" "}
                  <br /> For A Better Tomorrow
                </h1>
                <p>
                  Recycling is a key component of modern waste reduction and is
                  the third component of the “Reduce.
                </p>
                <Link
                  to="/blogs"
                  className="btn btn-secondary rounded-none text-white mt-10"
                >
                  Discover More
                </Link>
              </div>
              <div className="mt-5 md:mt-0">
                <img
                  className="w-[650px] h-[350px] rounded-xl shadow-lg"
                  src={banner3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:px-5">
            <div className="md:flex justify-between md:h-[450px] items-center text-gray-800 gap-5">
              <div>
                <h1 className="text-2xl md:text-4xl mb-2  font-semibold">
                  <span className="text-sm md:text-2xl text-secondary">
                    Waste
                  </span>{" "}
                  <br /> Management
                </h1>
                <p>
                  Recycling is a key component of modern waste reduction and is
                  the third component of the “Reduce.
                </p>
                <Link
                  to="/blogs"
                  className="btn btn-secondary rounded-none text-white mt-10"
                >
                  Discover More
                </Link>
              </div>
              <div className="mt-5 md:mt-0">
                <img
                  className="w-[650px] h-[350px] rounded-xl shadow-lg"
                  src={banner2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:px-5">
            <div className="md:flex justify-between md:h-[450px] items-center text-gray-800 gap-5">
              <div>
                <h1 className=" text-2xl md:text-4xl mb-2  font-semibold">
                  <span className="text-sm md:text-2xl text-secondary">
                    Discover
                  </span>{" "}
                  <br /> our all Services
                </h1>
                <p>
                  Recycling is a key component of modern waste reduction and is
                  the third component of the “Reduce.
                </p>
                <Link
                  to="/blogs"
                  className="btn btn-secondary rounded-none text-white mt-10"
                >
                  Discover More
                </Link>
              </div>
              <div className="mt-5 md:mt-0">
                <img
                  className="w-[650px] h-[350px] rounded-xl shadow-lg"
                  src={banner}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
