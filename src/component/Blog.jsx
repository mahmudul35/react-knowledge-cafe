import React from "react";
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleBookmark }) => {
  const {
    title,
    cover_pic,
    author_name,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10">
      <img src={cover_pic} className="w-full mb-8 rounded-lg" alt="" />
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img src={author_img} className="w-10 h-9" alt="" />
          <div>
            <h3 className="text-xl font-semibold">{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex  items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={handleBookmark}
            className="ml-2 text-red-500 text-2xl"
          >
            <IoBookmarksOutline />
          </button>
        </div>
      </div>
      <h1 className="my-5 text-2xl font-semibold">{title}</h1>
      <div>
        {hashtags.map((hashtag, idx) => (
          <span key={idx} className="m-1 text-gray-500">
            {hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
