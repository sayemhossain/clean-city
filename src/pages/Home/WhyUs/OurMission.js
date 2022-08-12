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
            Recycling is a key component modern waste reducation and is the
            third component of the “Reduce, Reuse, and Recycle” waste increase
            awareness.
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
