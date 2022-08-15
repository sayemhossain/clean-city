import React from "react";
import useBlog from "../../hooks/useBlog";
import LatestNewsContainer from "../Home/LatestNews/LatestNewsContainer";

const Blogs = () => {
  const [blogs, setBlogs] = useBlog();
  return (
    <div className="md:px-24 my-10">
      <h1 className="text-3xl font-bold text-center">Latest News & Articles</h1>
      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
          {blogs.map((blog) => (
            <LatestNewsContainer
              key={blog._id}
              blog={blog}
            ></LatestNewsContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
