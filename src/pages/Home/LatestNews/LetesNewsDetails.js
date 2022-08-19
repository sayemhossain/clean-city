import React from "react";
import { useParams } from "react-router-dom";
import useBlogDetails from "../../../hooks/useBlogDetails";

const LetesNewsDetails = () => {
  const blogId = useParams();
  const [blog] = useBlogDetails(blogId);
  const { _id, name, img, des } = blog;

  return (
    <div className="md:px-24 px-5 py-16 max-w-[1440px] mx-auto min-h-[450px]">
      <div className="[pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-extrabold">{name}</h1>
            <p className="mt-4 ">{des}</p>
          </div>
          <div>
            <img className="w-96 md:w-[500px] rounded-lg" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetesNewsDetails;
