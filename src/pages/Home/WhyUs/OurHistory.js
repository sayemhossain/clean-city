import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ourHistoryImg from "../../../img/ourHistory.jpg";

const OurHistory = () => {
  return (
    <div className="md:mt-12">
      <div className="md:grid grid-cols-2 gap-5">
        <div className="">
          <img className="rounded-sm" src={ourHistoryImg} alt="" />
        </div>
        <div className="mt-3">
          <p>
            We are working in a initial level right now, There are lot of things
            we have to do. We are trying to think different types of special
            feature and implement it in our platform.
          </p>
          <div className="mt-5">
            <p className="text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Reduce reuse recycle.
            </p>
            <p className="my-4 text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Reuse it or Lose it.
            </p>
            <p className="text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Think outside the trash…Recycle!
            </p>
            <p className="my-4 text-sm">
              <FontAwesomeIcon
                className="text-secondary"
                icon={faCircleCheck}
              ></FontAwesomeIcon>{" "}
              Waste it once…pay for it twice!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
