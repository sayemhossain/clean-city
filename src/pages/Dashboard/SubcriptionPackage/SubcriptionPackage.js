import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";

const SubcriptionPackage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3
        className="text-xl md:px-20 mt-5 text-center "
        style={{ fontFamily: "Teko" }}
      >
        Our Packages
      </h3>
      <hr />
      <div class="drawer drawer-mobile pb-10  bg-primary">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:my-16 my-10">
            <div>
              <div className="bg-gray-100 px-5 md:w-64 h-[400px] py-5 shadow-lg">
                <div className="text-center">
                  <h4 className="text-2xl text-secondary font-bold">Basic</h4>
                  <h1 className="text-xs">
                    <span className="text-xl">149</span>tk/month
                  </h1>
                </div>
                <hr className="my-5" />
                <div className=" text-sm flex flex-col gap-2">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Usual household waste
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Kitchen waste (Stale food, Rotten Vegetable)
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Non usable cloths, window curtain.
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Household medical waste
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Pick-up from home.
                  </p>
                  <div className="text-center mt-5">
                    <Link
                      to="/dashboard/basic"
                      className="btn btn-secondary rounded-none btn-sm"
                    >
                      Subcribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-secondary text-primary px-5 py-5 md:w-64 shadow-lg h-[400px]">
                <div className="text-center">
                  <h4 className="text-2xl text-primary font-bold">Standard</h4>
                  <h1 className="text-xs">
                    <span className="text-xl">249</span>tk/month
                  </h1>
                </div>
                <hr className="my-5" />
                <div className=" text-sm flex flex-col gap-2">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Usual household waste
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Non usable cloths, window curtain.
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Household medical waste
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Pick-up from home.
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Collect from door to door.
                  </p>
                  <div className="text-center mt-5">
                    <Link
                      to="/dashboard/standard"
                      className="btn btn-primary rounded-none btn-sm"
                    >
                      Subcribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 px-5 py-5 md:w-64 h-[400px] shadow-lg">
                <div className="text-center">
                  <h4 className="text-2xl text-secondary font-bold">Premium</h4>
                  <h1 className="text-xs">
                    <span className="text-xl">499</span>tk/month
                  </h1>
                </div>
                <hr className="my-5" />
                <div className=" text-sm flex flex-col gap-2">
                  <p>
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    All types of household waste
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Available sell item (Stationery, Electronics item, Plastic
                    waste, Metal waste)
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Donate item (Broken chair, table and sofa)
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    Collect from door to door
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="text-green-400"
                      icon={faCircleCheck}
                    ></FontAwesomeIcon>{" "}
                    24/7 support
                  </p>
                  <div className="text-center mt-5">
                    <Link
                      to="/dashboard/premium"
                      className="btn btn-secondary rounded-none btn-sm"
                    >
                      Subcribe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SubcriptionPackage;
