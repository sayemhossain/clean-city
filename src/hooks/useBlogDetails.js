import { useEffect, useState } from "react";

const useBlogDetails = ({ blogId }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogId, blog]);
  return [blog];
};
export default useBlogDetails;
