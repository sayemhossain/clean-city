import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ourMissionImg from "../../../img/ourMission.jpg";

const OurMission = () => {
  return (
    <div className="md:mt-12">
      <div className="md:grid grid-cols-2 gap-5">
        <div className="">
          <img
            className="rounded-sm h-96"
            src="http://www.minimalistnewbies.com/wp-content/uploads/2016/12/img_2489-2.jpg"
            alt=""
          />
        </div>
        <div className="mt-3">
          <p>
            Many products can create huge problems in our daily life. They are
            lying around our house. These look very bad. There is a reason
            behind it The main reason is a manual management system. So we want
            to create an online base platform where we can sell products very
            easily.
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

export default OurMission;
