import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ourVisionImg from "../../../img/ourVission.jpg";

const OurVision = () => {
  return (
    <div className="md:mt-12">
      <div className="md:grid grid-cols-2 gap-5">
        <div className="">
          <img className="rounded-sm" src={ourVisionImg} alt="" />
        </div>
        <div className="mt-3">
          <p>
            Our main vision behind thai project is make a suitable environment
            for us. We will help to build up internal communication between
            users and the city corporation. It will help to clean the user’s
            house from unwanted garbage.
          </p>
          <div className="mt-5">
            <p className="text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Purchase products wisely and recycle.
            </p>
            <p className="my-4 text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Use reusable grocery bags.
            </p>
            <p className="text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Buy secondhand items and donate
            </p>
            <p className="my-4 text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Curb your use of paper: mail, receipts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
