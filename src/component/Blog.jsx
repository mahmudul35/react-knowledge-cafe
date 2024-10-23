import React from "react";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover_pic} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img src={author_img} className="w-10 h-9" alt="" />
          <div>
            <h3 className="text-xl font-semibold">{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h1>{title}</h1>
      <div>
        {hashtags.map((hashtag, idx) => (
          <span key={idx} className="m-1">
            {hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
