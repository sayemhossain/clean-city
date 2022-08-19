import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ourMissionImg from "../../../img/ourMission.jpg";

const OurMission = () => {
  return (
    <div className="md:mt-12">
      <div className="md:grid grid-cols-2 gap-5">
        <div className="">
          <img className="rounded-sm" src={ourMissionImg} alt="" />
        </div>
        <div className="mt-3">
          <p>
            It will save our users valuable time.It will create a job
            place,Those who work under our platform they will get a profit.There
            are so many people who haven’t enough time to clean their garbage in
            that case, our worker helped them to clean out.
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
