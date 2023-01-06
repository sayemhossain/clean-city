import { faAnglesRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const LatestNewsContainer = ({ blog }) => {
  const { _id, name, img, des } = blog;
  const navigate = useNavigate();

  console.log(blog);
  const navigateToBlogDetails = (_id) => {
    navigate(`/blogs/${_id}`);
  };
  return (
    <div className="shadow-lg p-5 rounded-lg hover:shadow-xl duration-300">
      <div>
        <div className="relative">
          <img className="rounded-md h-60 w-full" src={img} alt="" />
        </div>
        <h1 className="mt-3 font-bold text-xl text-gray-700">{name}</h1>
        <p className="mt-2">
          {des.length == 200 ? des : des.slice(0, 200) + "..."}
        </p>
        <p
          onClick={() => navigateToBlogDetails(_id)}
          className="mt-1 text-secondary hover:cursor-pointer hover:underline "
        >
          Read More{" "}
          <FontAwesomeIcon
            className="text-xs"
            icon={faAnglesRight}
          ></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default LatestNewsContainer;
