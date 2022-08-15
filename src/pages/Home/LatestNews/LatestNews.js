import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useBlog from "../../../hooks/useBlog";
import LatestNewsContainer from "./LatestNewsContainer";

const LatestNews = () => {
  const [blogs, setBlogs] = useBlog();
  const homeBlogs = blogs.slice(0, 6);
  return (
    <div className="md:px-24 my-10">
      <h1 className="text-3xl font-bold text-center">Latest News & Articles</h1>
      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
          {homeBlogs.map((blog) => (
            <LatestNewsContainer
              key={blog._id}
              blog={blog}
            ></LatestNewsContainer>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/blogs" className="hover:text-secondary hover:underline">
          See More{" "}
          <FontAwesomeIcon
            className="text-xs"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
