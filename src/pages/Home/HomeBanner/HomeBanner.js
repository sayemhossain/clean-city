import React from "react";
import banner from "../../../img/banner.jpg";
import Slider from "react-slick";
import banner5 from "../../../img/banner5.jpeg";
import banner3 from "../../../img/banner/banner.png";
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
    autoplaySpeed: 3000,
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
                  src="https://media.istockphoto.com/id/1262901956/photo/nobody-at-garage-sale.jpg?s=612x612&w=0&k=20&c=9CcrG3EviEMpAiGHWOZcD2bhV8jy-zJMYxSkbi37oiM="
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
                    User Products
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
                  src={banner5}
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
                  src="https://www.theglobeandmail.com/resizer/PZDzRW1bcqmfrvFAbMJScPynCao=/1200x676/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/6BBTWYS7GJFD7IVQRXYJM7HYIU"
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
