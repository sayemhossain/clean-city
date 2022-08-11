import React from "react";
import photo1 from "../../../img/ads-img/photo1.svg";
import photo2 from "../../../img/ads-img/photo2.svg";
import photo3 from "../../../img/ads-img/photo3.svg";
import photo4 from "../../../img/ads-img/photo4.svg";

const Branding = () => {
  return (
    <div className="md:px-28 md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="text-center shadow-lg rounded-xl p-3">
          <img className="w-14 mx-auto" src={photo1} alt="" />
          <h2 className="mt-5 mb-2 font-semibold text-secondary">
            Work Safely
          </h2>
          <p>
            Recycling is a process that converts the waste material into new
            refines.
          </p>
        </div>
        <div className="text-center shadow-lg rounded-xl p-3">
          <img className="w-14 mx-auto" src={photo2} alt="" />
          <h2 className="mt-5 mb-2 font-semibold">Moving Help</h2>
          <p>
            Are you Look for authorised recycler of your electronic items waste
            here!
          </p>
        </div>
        <div className="text-center shadow-lg rounded-xl p-3">
          <img className="w-14 mx-auto" src={photo3} alt="" />
          <h2 className="mt-5 mb-2 font-semibold">Waste Collection</h2>
          <p>
            We dispose most industrial item's waste appropriately and neatly.
          </p>
        </div>
        <div className="text-center shadow-lg rounded-xl p-3">
          <img className="w-14 mx-auto " src={photo4} alt="" />
          <h2 className="mt-5 mb-2 font-semibold">Recycling</h2>
          <p>
            We dispose of your waste in the most eco-friendly ways for the
            earth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
