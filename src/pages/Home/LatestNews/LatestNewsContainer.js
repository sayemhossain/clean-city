import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LatestNewsContainer = ({ blog }) => {
  const { name, img, des, category } = blog;
  return (
    <div className="shadow-lg p-5 rounded-lg">
      <div>
        <div className="relative">
          <img className="rounded-md" src={img} alt="" />
          <p className="absolute top-52 left-0 z-20 bg-secondary px-10 py-0.5 text-white rounded-tr-3xl">
            {category}
          </p>
        </div>
        <h1 className="mt-3 font-bold text-2xl text-gray-700">{name}</h1>
        <p className="mt-2">
          {des.length == 200 ? des : des.slice(0, 200) + "..."}
        </p>
        <p className="mt-1 text-secondary">
          Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default LatestNewsContainer;
