import { useEffect, useState } from "react";

const useBlogDetails = ({ blogId }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`https://secure-wildwood-53933.herokuapp.com/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogId, blog]);
  return [blog];
};
export default useBlogDetails;
