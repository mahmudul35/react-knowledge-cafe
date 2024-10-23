import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl my-6">Blog: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog handleBookmark={handleBookmark} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
